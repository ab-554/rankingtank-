'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 22, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 22, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 20);
      mouseY.set(e.clientY - 20);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        id="cursor-ring"
        className="fixed top-0 left-0 pointer-events-none z-[9998] hidden md:block"
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          x: springX,
          y: springY,
          background: 'linear-gradient(135deg, #3898ff, #00e0ff)',
          WebkitMask: 'radial-gradient(circle, transparent 11px, #000 12px)',
          mask: 'radial-gradient(circle, transparent 11px, #000 12px)',
        }}
      />
      <style>{`
        @media (hover: none) and (pointer: coarse) {
          #cursor-ring { display: none !important; }
        }
      `}</style>
    </>
  );
}
