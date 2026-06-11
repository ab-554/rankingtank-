'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

/* ─── Ambient particle grid ─── */
function ParticleGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const dots: { x: number; y: number; vx: number; vy: number; r: number; o: number }[] = [];
    const count = Math.min(60, Math.floor((w * h) / 24000));

    for (let i = 0; i < count; i++) {
      dots.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        o: Math.random() * 0.4 + 0.1,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56,152,255,${d.o})`;
        ctx.fill();

        /* Draw connections to nearby dots */
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(56,152,255,${0.06 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-[1]"
      style={{ opacity: 0.6 }}
    />
  );
}

/* ─── Variants ─── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const easeOut = [0.22, 0.68, 0, 1.2] as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

const statVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.9 + i * 0.15, ease: easeOut },
  }),
};

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '10x', label: 'Avg Traffic Growth' },
  { value: '100%', label: 'Client Retention' },
];

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-32"
      style={{ background: '#04060d' }}
    >
      {/* ── Background layers ── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Noise */}
        <div className="absolute inset-0 bg-noise" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(56,152,255,.028) 1px, transparent 1px), linear-gradient(90deg, rgba(56,152,255,.028) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />

        {/* Ambient particle grid */}
        <ParticleGrid />

        {/* Blue orb */}
        <div
          className="absolute rounded-full"
          style={{
            width: '900px',
            height: '900px',
            background: 'radial-gradient(circle, rgba(56,152,255,.12) 0%, transparent 65%)',
            top: '-250px',
            right: '-150px',
            animation: 'orb1 18s ease-in-out infinite alternate',
          }}
        />

        {/* Cyan orb */}
        <div
          className="absolute rounded-full"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(0,224,255,.07) 0%, transparent 65%)',
            bottom: '-80px',
            left: '10%',
            animation: 'orb2 13s ease-in-out infinite alternate',
          }}
        />

        {/* Scanline */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute left-0 right-0 h-[2px]"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(56,152,255,.15), transparent)',
              animation: 'scanV 8s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      {/* ── Main content ── */}
      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.div
          variants={itemVariants}
          className="mb-6 font-display text-[11px] font-bold tracking-[.14em] uppercase"
          style={{ color: '#8b9ab5' }}
        >
          ENGINEERING · WEB SYSTEMS · SEO
        </motion.div>

        {/* H1 */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-[clamp(36px,6vw,76px)] font-bold leading-[1.05] tracking-[-.02em]"
          style={{ color: '#edf3ff' }}
        >
          I build web systems, AI, and search strategies that compound.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="mt-5 max-w-2xl text-balance text-[15px] leading-[1.8] sm:text-base"
          style={{ color: '#8b9ab5' }}
        >
          Full-stack engineering bureau specialising in AI systems, generative engine
          optimisation (GEO), answer engine optimisation (AEO), precision SEO, custom
          CMS/CRM architectures, and business automation. Every system engineered to
          accelerate growth across every channel.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/projects"
            className="btn btn-p inline-flex items-center gap-2 px-7 py-[13px]"
          >
            VIEW THE WORK
          </Link>
          <Link
            href="/contact"
            className="btn inline-flex items-center gap-2 px-7 py-[13px]"
            style={{
              background: 'transparent',
              border: '1.5px solid #3898ff',
              color: '#edf3ff',
            }}
          >
            GET IN TOUCH
          </Link>
        </motion.div>
      </motion.div>

      {/* ── Stats ── */}
      <div className="relative z-10 mx-auto mt-20 grid w-full max-w-4xl grid-cols-1 gap-10 sm:grid-cols-3">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={statVariants}
            className="text-center"
          >
            <div
              className="font-headline text-[52px] leading-none tracking-[.06em] sm:text-[64px] gradient-text"
              style={{ letterSpacing: '.06em' }}
            >
              {stat.value}
            </div>
            <div
              className="mt-2 text-[13px] tracking-[.06em]"
              style={{ color: '#8b9ab5' }}
            >
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
