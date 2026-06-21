'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import RevealWrapper from './RevealWrapper';

export default function CtaBanner() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    for (let i = 0; i < 18; i++) {
      const d = document.createElement('div');
      d.className = 'absolute rounded-full';
      d.style.cssText = `
        left: ${Math.random() * 100}%;
        bottom: ${Math.random() * 30}%;
        animation: floatDot ${3 + Math.random() * 5}s linear infinite;
        animation-delay: ${Math.random() * 6}s;
        opacity: 0;
        width: ${1 + Math.random() * 3}px;
        height: ${1 + Math.random() * 3}px;
        background: var(--blue);
      `;
      container.appendChild(d);
    }
  }, []);

  return (
    <div className="px-11 pb-20 max-lg:px-3.5 max-lg:pb-16">
      <RevealWrapper>
        <div
          className="rounded-[28px] py-[88px] px-[72px] flex items-center justify-between gap-12 relative overflow-hidden max-lg:flex-col max-lg:items-start max-lg:p-8"
          style={{
            background: 'linear-gradient(135deg, #050e22 0%, #081c40 45%, #050e22 100%)',
            border: '1px solid var(--border-hi)',
          }}
        >
          {/* Glow */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: '700px', height: '500px',
              background: 'radial-gradient(ellipse, rgba(56,152,255,.11) 0%, transparent 70%)',
              top: '50%', right: '-100px',
              transform: 'translateY(-50%)',
            }}
          />

          {/* Particles */}
          <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none" />

          {/* Title */}
          <div className="relative z-1 font-headline leading-[.95] tracking-[.01em]" style={{ fontSize: 'clamp(38px, 4.5vw, 66px)' }}>
            Ready to build<br />
            <span className="gradient-text-animated">something legendary?</span>
          </div>

          {/* Right */}
          <div className="flex flex-col items-end gap-3.5 shrink-0 relative z-1 max-lg:items-start">
            <Link href="/contact" className="btn btn-p" style={{ fontSize: '15px', padding: '17px 38px' }}>
              Start my journey →
            </Link>
            <div className="text-xs text-right max-lg:text-left" style={{ color: 'var(--muted)' }}>
              No commitment. Just a conversation.
            </div>
            <div className="flex gap-2.5 mt-1.5">
              {[
                { label: 'in', title: 'LinkedIn' },
                { label: 'gh', title: 'GitHub' },
                { label: 'tw', title: 'Twitter' },
              ].map(s => (
                <a
                  key={s.label}
                  href="#"
                  title={s.title}
                  className="w-9 h-9 rounded-[10px] flex items-center justify-center text-[13px] no-underline transition-all duration-250"
                  style={{
                    background: 'var(--blue-dim)',
                    border: '1px solid var(--border-hi)',
                    color: 'var(--blue)',
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </RevealWrapper>
    </div>
  );
}
