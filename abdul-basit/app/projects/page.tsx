'use client';

import { projects } from '@/data/projects';
import Link from 'next/link';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
} as const;

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
} as const;

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-[200px] pb-[80px] flex items-start justify-center">
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
        <div className="relative z-2 max-w-[900px] mx-auto text-center px-6">
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
            Portfolio
          </div>
          <h1
            className="!mb-0"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(44px, 6vw, 90px)',
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: '-.03em',
              color: 'var(--white)',
              animation: 'riseUp .8s .35s var(--ease-s) forwards',
              opacity: 0,
            }}
          >
            The Work.
          </h1>
        </div>
      </section>

      {/* Project cards */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="px-[60px] pb-[140px] max-lg:px-6"
        style={{ marginTop: '-20px' }}
      >
        <div className="flex flex-col gap-5">
          {projects.map((project) => (
            <motion.div key={project.slug} variants={item}>
              <Link
                href={`/projects/${project.slug}`}
                className="group block no-underline rounded-[20px] overflow-hidden transition-all duration-350 hover:-translate-y-1 relative card-shimmer"
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  color: 'var(--white)',
                }}
              >
                <div className="flex max-md:flex-col">
                  {/* Thumbnail — 200px wide on desktop */}
                  <div
                    className="relative shrink-0 overflow-hidden max-md:w-full max-md:aspect-video"
                    style={{ width: '200px', minHeight: '200px' }}
                  >
                    {project.thumbnail ? (
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                        style={{ position: 'absolute', inset: 0 }}
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.06]"
                        style={{ background: project.gradient }}
                      >
                        <span
                          className="font-headline text-[80px] opacity-[.07] tracking-tight"
                          style={{ color: 'var(--white)' }}
                        >
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(to right, transparent 50%, var(--card) 100%)' }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                    {/* Tags */}
                    <div className="flex gap-[7px] flex-wrap mb-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold tracking-[.08em] uppercase px-[11px] py-[3px] rounded-full"
                          style={{
                            color: 'var(--blue)',
                            border: '1px solid var(--border-hi)',
                            background: 'var(--blue-dim)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h2
                      className="font-display text-2xl font-extrabold tracking-tight mb-1"
                      style={{ color: 'var(--white)' }}
                    >
                      {project.title}
                    </h2>

                    {/* Description */}
                    <p className="text-[13px] mb-4" style={{ color: 'var(--silver)' }}>
                      {project.description}
                    </p>

                    {/* CTA */}
                    <div
                      className="font-display text-[13px] font-bold inline-flex items-center gap-[7px] transition-all duration-250 group-hover:gap-3"
                      style={{ color: 'var(--cyan)' }}
                    >
                      <span style={{ color: 'var(--blue)' }}>→</span> Read case study
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
