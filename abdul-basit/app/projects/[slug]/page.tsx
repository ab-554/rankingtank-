'use client';

import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { use, useEffect } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
} as const;

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
} as const;

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | RankingTank`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', project.description);
    }
  }, [project]);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-[200px] pb-[100px] flex items-start justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-noise" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(56,152,255,.028) 1px, transparent 1px), linear-gradient(90deg, rgba(56,152,255,.028) 1px, transparent 1px)',
              backgroundSize: '72px 72px',
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: '1000px',
              height: '1000px',
              background: 'radial-gradient(circle, rgba(56,152,255,.13) 0%, transparent 65%)',
              top: '-300px',
              right: '-200px',
              animation: 'orb1 18s ease-in-out infinite alternate',
            }}
          />
        </div>
        <div className="relative z-2 max-w-[800px] mx-auto text-center px-6">
          <div
            className="inline-flex items-center gap-[10px] px-4 py-[7px] rounded-full text-[11px] font-bold tracking-[.12em] uppercase mb-9 opacity-0"
            style={{
              background: 'var(--blue-dim)',
              border: '1px solid var(--border-hi)',
              color: 'var(--blue-bright)',
              animation: 'riseUp .7s .2s var(--ease-s) forwards',
            }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: 'var(--blue)',
                boxShadow: '0 0 8px var(--blue)',
                animation: 'pulse 2s ease-in-out infinite',
              }}
            />
            {project.tags.join(' · ')}
          </div>
          <h1
            className="!mb-0"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px, 5.5vw, 80px)',
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: '-.03em',
              color: 'var(--white)',
              animation: 'riseUp .8s .35s var(--ease-s) forwards',
              opacity: 0,
            }}
          >
            {project.title}
          </h1>
          <p
            className="text-lg max-w-[600px] mx-auto mt-4 opacity-0"
            style={{
              color: 'var(--silver)',
              animation: 'riseUp .8s 1s var(--ease-s) forwards',
            }}
          >
            {project.description}
          </p>
        </div>
      </section>

      {/* Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="px-[60px] max-lg:px-6 -mt-10 mb-16"
        >
          <div
            className="grid gap-4 max-sm:grid-cols-1"
            style={{ gridTemplateColumns: `repeat(${project.metrics.length}, 1fr)` }}
          >
            {project.metrics.map((metric, i) => (
              <div
                key={i}
                className="rounded-[20px] p-8 text-center relative overflow-hidden group"
                style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
              >
                <div className="font-headline text-[48px] leading-none gradient-text mb-2">{metric.value}</div>
                <div className="text-xs tracking-[.04em]" style={{ color: 'var(--silver)' }}>{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Grid: Challenge | Solution (3 columns: Challenge, Approach, Deliverables) */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="px-[60px] max-lg:px-6 pb-[120px]"
      >
        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
          {/* Challenge */}
          <motion.div
            variants={fadeUp}
            className="rounded-[20px] p-8 relative overflow-hidden"
            style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
          >
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: '160px',
                height: '160px',
                top: '-40px',
                right: '-40px',
                background: 'radial-gradient(circle, rgba(56,152,255,.08) 0%, transparent 70%)',
              }}
            />
            <div
              className="font-display text-[11px] font-bold tracking-[.14em] uppercase mb-4 inline-flex items-center gap-[10px]"
              style={{ color: 'var(--blue)' }}
            >
              <span className="w-5 h-px" style={{ background: 'var(--blue)' }} />
              Problem
            </div>
            <h3
              className="font-display text-lg font-extrabold tracking-tight mb-4"
              style={{ color: 'var(--white)' }}
            >
              The challenge
            </h3>
            <p className="text-[14px] leading-[1.8]" style={{ color: 'var(--silver)' }}>
              {project.challenge}
            </p>
          </motion.div>

          {/* Solution */}
          <motion.div
            variants={fadeUp}
            className="rounded-[20px] p-8 relative overflow-hidden"
            style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
          >
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: '160px',
                height: '160px',
                top: '-40px',
                right: '-40px',
                background: 'radial-gradient(circle, rgba(0,224,255,.08) 0%, transparent 70%)',
              }}
            />
            <div
              className="font-display text-[11px] font-bold tracking-[.14em] uppercase mb-4 inline-flex items-center gap-[10px]"
              style={{ color: 'var(--cyan)' }}
            >
              <span className="w-5 h-px" style={{ background: 'var(--cyan)' }} />
              Solution
            </div>
            <h3
              className="font-display text-lg font-extrabold tracking-tight mb-4"
              style={{ color: 'var(--white)' }}
            >
              What we delivered
            </h3>
            <p className="text-[14px] leading-[1.8]" style={{ color: 'var(--silver)' }}>
              {project.solution}
            </p>
          </motion.div>

          {/* Deliverables */}
          <motion.div
            variants={fadeUp}
            className="rounded-[20px] p-8 relative overflow-hidden"
            style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
          >
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: '160px',
                height: '160px',
                top: '-40px',
                right: '-40px',
                background: 'radial-gradient(circle, rgba(56,152,255,.08) 0%, transparent 70%)',
              }}
            />
            <div
              className="font-display text-[11px] font-bold tracking-[.14em] uppercase mb-4 inline-flex items-center gap-[10px]"
              style={{ color: 'var(--blue)' }}
            >
              <span className="w-5 h-px" style={{ background: 'var(--blue)' }} />
              Deliverables
            </div>
            <h3
              className="font-display text-lg font-extrabold tracking-tight mb-4"
              style={{ color: 'var(--white)' }}
            >
              What we built
            </h3>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {project.deliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[14px]" style={{ color: 'var(--silver)' }}>
                  <span
                    className="shrink-0 w-1.5 h-1.5 rounded-full mt-[6px]"
                    style={{ background: 'var(--blue)', boxShadow: '0 0 6px var(--blue-glow)' }}
                  />
                  {d}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Results section */}
      {project.result && (
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="px-[60px] max-lg:px-6 pb-[120px]"
        >
          <div
            className="rounded-[20px] p-10 md:p-14 relative overflow-hidden"
            style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
          >
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: '400px',
                height: '400px',
                top: '-120px',
                right: '-80px',
                background: 'radial-gradient(circle, rgba(0,224,255,.06) 0%, transparent 70%)',
              }}
            />
            <div
              className="font-display text-[11px] font-bold tracking-[.14em] uppercase mb-4 inline-flex items-center gap-[10px]"
              style={{ color: 'var(--cyan)' }}
            >
              <span className="w-5 h-px" style={{ background: 'var(--cyan)' }} />
              Key Result
            </div>
            <h2
              className="font-display text-2xl font-extrabold tracking-tight mb-4"
              style={{ color: 'var(--white)' }}
            >
              {project.result}
            </h2>
          </div>
        </motion.section>
      )}

      {/* Back to all work */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="px-[60px] max-lg:px-6 pb-[140px] text-center"
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-3 font-display text-[13px] font-bold no-underline transition-all duration-250 hover:gap-4"
          style={{ color: 'var(--blue)' }}
        >
          <span className="text-lg" style={{ color: 'var(--blue)' }}>
            ←
          </span>
          Back to all work
        </Link>
      </motion.div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: project.title,
            description: project.description,
            author: { '@type': 'Person', name: 'Abdul Basit A.' },
            url: `https://rankingtank.com/projects/${slug}`,
          }),
        }}
      />
    </>
  );
}
