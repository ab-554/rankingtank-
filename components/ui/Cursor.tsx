'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
    };

    const loop = () => {
      rx += (mx - rx - 17) * 0.11;
      ry += (my - ry - 17) * 0.11;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      requestAnimationFrame(loop);
    };

    document.addEventListener('mousemove', onMove);
    const raf = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] mix-blend-screen transition-[width,height] duration-300"
        style={{ background: 'var(--blue)' }}
        id="cursor-dot"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-[34px] h-[34px] rounded-full pointer-events-none z-[9998] hidden md:block"
        style={{
          border: '1px solid rgba(56,152,255,.4)',
          transition: 'width .35s var(--ease-s), height .35s var(--ease-s), border-color .35s',
        }}
        id="cursor-ring"
      />
      <style>{`
        @media (pointer: coarse) {
          #cursor-dot, #cursor-ring { display: none !important; }
        }
        body:has(a:hover, button:hover) #cursor-dot {
          width: 16px !important; height: 16px !important;
          background: var(--cyan) !important;
        }
        body:has(a:hover, button:hover) #cursor-ring {
          width: 52px !important; height: 52px !important;
          border-color: var(--blue) !important;
        }
      `}</style>
    </>
  );
}
