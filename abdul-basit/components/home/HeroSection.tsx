'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
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
          I build web systems and SEO that compound.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="mt-5 max-w-2xl text-balance text-[15px] leading-[1.8] sm:text-base"
          style={{ color: '#8b9ab5' }}
        >
          Full-stack engineering bureau. We audit what is broken, rebuild on a modern
          stack, and hold the gains with ongoing technical SEO.
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
