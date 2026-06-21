'use client';

import { useEffect, useRef } from 'react';
import RevealWrapper from './RevealWrapper';

interface Stat {
  value: string;
  label: string;
}

export default function StatsRow({ stats }: { stats: Stat[] }) {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const nums = entry.target.querySelectorAll('[data-count]');
            nums.forEach(el => {
              const target = parseInt(el.getAttribute('data-count') || '0');
              const suffix = el.textContent?.replace(/[0-9]/g, '') || '';
              if (isNaN(target)) return;

              const start = performance.now();
              const duration = 1800;
              const update = (now: number) => {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.floor(eased * target) + suffix;
                if (progress < 1) requestAnimationFrame(update);
              };
              requestAnimationFrame(update);
            });
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    io.observe(row);
    return () => io.disconnect();
  }, []);

  return (
    <RevealWrapper>
      <div
        ref={rowRef}
        className="grid grid-cols-4 rounded-[20px] overflow-hidden mt-20 max-lg:grid-cols-2 max-sm:grid-cols-2"
        style={{
          border: '1px solid var(--border)',
          background: 'var(--card)',
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="relative overflow-hidden text-center py-9 px-7 transition-colors duration-300 group"
            style={{
              borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
            }}
          >
            {/* Top shimmer on hover */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
              style={{
                background: 'linear-gradient(90deg, var(--blue), var(--cyan))',
                transitionTimingFunction: 'var(--ease-s)',
              }}
            />
            <div
              className="font-headline text-[58px] leading-none gradient-text"
              data-count={stat.value.replace(/[^0-9]/g, '')}
            >
              {stat.value}
            </div>
            <div className="text-xs mt-1.5 tracking-[.04em]" style={{ color: 'var(--silver)' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </RevealWrapper>
  );
}
