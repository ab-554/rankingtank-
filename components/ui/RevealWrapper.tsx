'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface RevealWrapperProps {
  children: React.ReactNode;
  delay?: 'd1' | 'd2' | 'd3' | 'd4' | 'd5';
  className?: string;
  as?: React.ElementType;
}

export default function RevealWrapper({
  children,
  delay,
  className,
  as: Tag = 'div',
}: RevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.07 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);



  return (
    <Tag ref={ref} className={cn('rv', delay, className)}>
      {children}
    </Tag>
  );
}
