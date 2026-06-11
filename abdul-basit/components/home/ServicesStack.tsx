'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { services } from '@/data/services';

/* ─── Scroll-driven sticky card ─── */
function StickyCard({
  service,
  index,
  total,
}: {
  service: (typeof services)[number];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  /* Each card occupies a scroll "bucket": height of 80vh + 100vh for the sticky effect */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', `${100 / total}vh start`],
  });

  /* Card slides up and fades as its scroll bucket passes */
  const y = useTransform(scrollYProgress, [0, 0.6, 1], [0, 0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
  const scaleIn = useTransform(scrollYProgress, [0, 0.5], [0.92, 1]);

  /* Number display: fades from visible to subtle */
  const numOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [0.08, 0.04, 0.015]);

  return (
    <div ref={ref} className="relative" style={{ height: `${100 / total}vh` }}>
      <motion.div
        style={{ y, opacity }}
        className="sticky top-0 flex h-screen items-center justify-center px-6 py-20"
      >
        <motion.div
          style={{ scale: scaleIn }}
          className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl"
        >
          {/* Background gradient layer */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-40`}
          />

          {/* Subtle border */}
          <div
            className="absolute inset-0 rounded-3xl"
            style={{ border: '1px solid rgba(56,152,255,.08)' }}
          />

          {/* Content */}
          <div className="relative z-10 grid gap-10 p-10 md:grid-cols-2 md:p-16 lg:p-20">
            {/* Left column */}
            <div>
              {/* Big faded number */}
              <motion.div
                style={{ opacity: numOpacity }}
                className="pointer-events-none absolute -left-4 -top-4 select-none font-headline text-[200px] leading-none tracking-tight"
              >
                {service.number}
              </motion.div>

              {/* Icon + tag */}
              <div className="relative mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0c1020] text-lg"
                  style={{ border: '1px solid rgba(56,152,255,.15)' }}
                >
                  {service.icon}
                </span>
                <span
                  className="font-display text-[11px] font-bold tracking-[.14em] uppercase"
                  style={{ color: '#8b9ab5' }}
                >
                  {service.number} · {service.title}
                </span>
              </div>

              {/* Title */}
              <h2
                className="font-display text-[clamp(28px,3.5vw,48px)] font-bold leading-[1.08] tracking-[-.02em]"
                style={{ color: '#edf3ff' }}
              >
                {service.title}
              </h2>

              {/* Tagline */}
              <p
                className="mt-3 text-balance font-display text-lg font-semibold leading-snug"
                style={{ color: '#3898ff' }}
              >
                {service.tagline}
              </p>

              {/* Description */}
              <p
                className="mt-5 max-w-lg text-[15px] leading-relaxed"
                style={{ color: '#8b9ab5' }}
              >
                {service.description}
              </p>
            </div>

            {/* Right column — bullet points */}
            <div className="flex flex-col justify-center">
              <ul className="space-y-3">
                {service.bulletPoints.map((bp) => (
                  <li key={bp} className="flex items-start gap-3">
                    <span
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: '#3898ff' }}
                    />
                    <span
                      className="text-[14px] leading-relaxed"
                      style={{ color: '#b0bedd' }}
                    >
                      {bp}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ─── Services Stack ─── */
export default function ServicesStack() {
  const total = services.length;

  return (
    <section id="services" className="relative" style={{ background: '#04060d' }}>
      {/* Section header pinned above the stack */}
      <div className="relative z-50 px-6 pt-28 pb-8 text-center">
        <div
          className="mx-auto mb-4 font-display text-[11px] font-bold tracking-[.14em] uppercase"
          style={{ color: '#8b9ab5' }}
        >
          <span className="mr-3 inline-block h-px w-5 align-middle" style={{ background: '#8b9ab5' }} />
          WHAT I DELIVER
        </div>
        <h2
          className="font-display text-[clamp(28px,4vw,52px)] font-bold leading-[1.08] tracking-[-.02em]"
          style={{ color: '#edf3ff' }}
        >
          Systems that span the full stack.
        </h2>
        <p
          className="mx-auto mt-3 max-w-xl text-[15px]"
          style={{ color: '#8b9ab5' }}
        >
          From AI agents to search dominance — every capability engineered to compound.
        </p>
      </div>

      {/* Sticky card stack */}
      <div className="relative">
        {services.map((svc, i) => (
          <StickyCard key={svc.id} service={svc} index={i} total={total} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="flex justify-center py-28">
        <Link
          href="/services"
          className="btn btn-p inline-flex items-center gap-2 px-8 py-[14px]"
        >
          SEE ALL SERVICES →
        </Link>
      </div>
    </section>
  );
}
