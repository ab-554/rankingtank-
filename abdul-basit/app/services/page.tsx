'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
} as const;

const services = [
  {
    icon: '⚡',
    title: 'Web Systems',
    description: 'Full-stack web development built for speed, scale, and maintainability — from Next.js platforms to Shopify storefronts.',
    bullets: [
      'Next.js & React SPAs with server-side rendering',
      'Shopify headless & custom Liquid development',
      'Custom web applications & API integration',
      'Vercel / Cloudflare deployment & CI/CD',
    ],
  },
  {
    icon: '🎯',
    title: 'Precision SEO',
    description: 'Technical SEO that cuts through the noise. Audits, content strategy, and execution that actually ranks.',
    bullets: [
      'Technical SEO audits & Core Web Vitals fixing',
      'Content strategy & pillar-cluster architecture',
      'Backlink analysis & acquisition planning',
      'Generative Engine Optimisation (GEO)',
    ],
  },
  {
    icon: '🤖',
    title: 'AI Automation',
    description: 'Automate the tedious. Scale the essential. Workflows that turn manual processes into self-running systems.',
    bullets: [
      'Workflow automation (n8n, Make, GoHighLevel)',
      'Lead generation & sales funnel building',
      'AI-powered content pipelines & scheduling',
      'Data extraction, transformation & reporting',
    ],
  },
  {
    icon: '📈',
    title: 'Performance Campaigns',
    description: 'Data-driven campaigns that optimise what matters: speed, conversions, and revenue per visitor.',
    bullets: [
      'Core Web Vitals optimisation & Lighthouse 90+',
      'Conversion rate optimisation (CRO) & A/B testing',
      'AdSense monetisation strategy & RPM optimisation',
      'Google Search Console & analytics setup',
    ],
  },
];

export default function ServicesPage() {
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
            What I Do
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
            Services.
          </h1>
          <p
            className="text-lg max-w-[640px] mx-auto mt-4 opacity-0"
            style={{
              color: 'var(--silver)',
              animation: 'riseUp .8s 1s var(--ease-s) forwards',
            }}
          >
            Web systems, precision SEO, AI automation, and performance campaigns — engineered to move the needle.
          </p>
        </div>
      </section>

      {/* 2x2 Grid */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="px-[60px] pb-[140px] max-lg:px-6"
        style={{ marginTop: '-20px' }}
      >
        <div className="grid grid-cols-2 gap-5 max-lg:grid-cols-1">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className="rounded-[20px] p-8 md:p-10 relative overflow-hidden group card-shimmer"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: '200px',
                  height: '200px',
                  top: '-60px',
                  right: '-60px',
                  background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(56,152,255,.08)' : 'rgba(0,224,255,.08)'} 0%, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl mb-5"
                style={{ background: 'var(--blue-dim)', border: '1px solid var(--border-hi)' }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h2
                className="font-display text-xl font-extrabold tracking-tight mb-3"
                style={{ color: 'var(--white)' }}
              >
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-[14px] leading-[1.7] mb-5" style={{ color: 'var(--silver)' }}>
                {service.description}
              </p>

              {/* Bullets */}
              <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
                {service.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-[13px]" style={{ color: 'var(--silver)' }}>
                    <span
                      className="shrink-0 w-1.5 h-1.5 rounded-full mt-[6px]"
                      style={{ background: 'var(--blue)', boxShadow: '0 0 6px var(--blue-glow)' }}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="px-[60px] pb-[140px] max-lg:px-6 text-center"
      >
        <h2
          className="font-display font-extrabold tracking-tight leading-[1.1] mb-6"
          style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}
        >
          Ready to build something{' '}
          <span style={{ color: 'var(--blue)' }}>that works?</span>
        </h2>
        <Link
          href="/contact"
          className="btn btn-p inline-flex"
        >
          Let&apos;s talk →
        </Link>
      </motion.div>
    </>
  );
}
