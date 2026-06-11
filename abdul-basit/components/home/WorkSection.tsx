'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { projects } from '@/data/projects';

const easeOut = [0.22, 0.68, 0, 1.2] as const satisfies readonly [number, number, number, number];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.12, ease: easeOut },
  }),
};

export default function WorkSection() {
  const featured = projects.slice(0, 4);

  return (
    <section className="py-[100px] px-6 sm:px-10 lg:px-[60px]" style={{ background: '#04060d' }}>
      <div className="mx-auto max-w-7xl">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <div
              className="mb-3 font-display text-[11px] font-bold tracking-[.14em] uppercase"
              style={{ color: '#8b9ab5' }}
            >
              <span className="mr-3 inline-block h-px w-5 align-middle" style={{ background: '#8b9ab5' }} />
              SELECTED WORK
            </div>
            <h2
              className="font-display text-[clamp(28px,4vw,52px)] font-bold leading-[1.08] tracking-[-.02em]"
              style={{ color: '#edf3ff' }}
            >
              The numbers moved.
            </h2>
          </div>
          <Link
            href="/projects"
            className="btn btn-p btn-sm shrink-0"
          >
            VIEW ALL PROJECTS
          </Link>
        </motion.div>

        {/* ── Cards grid (container query) ── */}
        <div
          className="@container grid grid-cols-1 gap-5 @md:grid-cols-2"
          style={{ containerType: 'inline-size' }}
        >
          {featured.map((project, i) => (
            <motion.div
              key={project._id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={itemVariants}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group relative block overflow-hidden no-underline transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  background: '#0c1020',
                  border: '1px solid rgba(56,152,255,.09)',
                  borderRadius: '12px',
                }}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video w-full overflow-hidden">
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div
                      className="flex h-full w-full items-center justify-center transition-transform duration-500 group-hover:scale-[1.05]"
                      style={{ background: project.gradient }}
                    >
                      <span
                        className="font-headline text-[100px] leading-none tracking-tight opacity-[.07]"
                        style={{ color: '#edf3ff' }}
                      >
                        {project.monogram}
                      </span>
                    </div>
                  )}
                  {/* Gradient overlay */}
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{ background: 'linear-gradient(to bottom, transparent 35%, #0c1020 100%)' }}
                  />
                  {/* Arrow */}
                  <div
                    className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full text-sm opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
                    style={{
                      background: 'rgba(56,152,255,.10)',
                      border: '1px solid rgba(56,152,255,.24)',
                      color: '#3898ff',
                      transform: 'translate(6px, -6px)',
                    }}
                  >
                    ↗
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 pb-7 sm:p-6 sm:pb-8">
                  {/* Tags */}
                  <div className="mb-3 flex flex-wrap gap-[7px]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full px-[11px] py-[3px] text-[10px] font-bold uppercase tracking-[.08em]"
                        style={{
                          background: 'rgba(56,152,255,.10)',
                          border: '1px solid rgba(56,152,255,.24)',
                          color: '#3898ff',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3
                    className="font-display text-xl font-bold tracking-tight sm:text-2xl"
                    style={{ color: '#edf3ff' }}
                  >
                    {project.title}
                  </h3>

                  {/* Description (subtitle) */}
                  <p
                    className="mt-1.5 text-[13px] leading-relaxed"
                    style={{ color: '#8b9ab5' }}
                  >
                    {project.description}
                  </p>

                  {/* Result link */}
                  <div
                    className="mt-4 inline-flex items-center gap-[7px] font-display text-[13px] font-bold"
                    style={{ color: '#00e0ff' }}
                  >
                    <span style={{ color: '#3898ff' }}>→</span> {project.result}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.3, ease: easeOut }}
          className="mt-12 text-center"
        >
          <Link
            href="/projects"
            className="btn btn-g inline-flex items-center gap-2 px-8 py-[14px]"
          >
            VIEW ALL PROJECTS →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
