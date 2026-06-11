'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Eyebrow from '@/components/ui/Eyebrow';
import RevealWrapper from '@/components/ui/RevealWrapper';

const serviceData = [
  {
    num: '01',
    title: 'Scalable Web Systems',
    tagline: 'Built to outgrow your roadmap.',
    description:
      'Modern, future-proof digital platforms built on Next.js, custom CMS architectures, and serverless infrastructure. From content sites to full-scale web applications — every system is engineered for speed, scalability, and zero-compromise user experience.',
    bullets: [
      'Next.js App Router with server-side rendering and static generation',
      'Custom CMS integration (Sanity, Strapi, WordPress headless)',
      'API-first architecture with REST and GraphQL endpoints',
      'Sub-second page loads with 90+ Lighthouse scores',
      'Automated CI/CD pipelines with preview environments',
      'Enterprise-grade security, auth, and data protection',
    ],
    gradient: 'linear-gradient(135deg, rgba(56,152,255,.08) 0%, transparent 100%)',
  },
  {
    num: '02',
    title: 'Precision SEO',
    tagline: 'Every ranking is a data decision.',
    description:
      'Technical SEO, content architecture, and link acquisition executed with surgical precision. Programmatic SEO at scale, topical authority clusters, Core Web Vitals optimisation, and white-hat backlink strategies that survive algorithm updates.',
    bullets: [
      'Programmatic SEO architectures scaling to thousands of pages',
      'Topic clusters and pillar pages for topical authority',
      'Core Web Vitals optimisation — 90+ across mobile and desktop',
      'Structured data mastery (JSON-LD, FAQPage, HowTo, LocalBusiness)',
      'White-hat link acquisition via digital PR and guestographics',
      'AI Overview and featured snippet targeting',
    ],
    gradient: 'linear-gradient(135deg, rgba(0,224,255,.08) 0%, transparent 100%)',
  },
  {
    num: '03',
    title: 'AI Automation',
    tagline: 'Workflows that run while you sleep.',
    description:
      'Custom AI agents, RAG pipelines, and automation workflows that eliminate repetitive work. From content generation pipelines to multi-channel outreach, every system integrates with your existing stack and scales with your business.',
    bullets: [
      'Custom AI agents for research, content, and data processing',
      'RAG pipelines with vector databases for domain-specific accuracy',
      'n8n and Make workflows for end-to-end business automation',
      'Multi-channel outreach (email, LinkedIn, Telegram, WhatsApp)',
      'Content production pipelines — generate, review, approve, publish',
      'CRM integration and lead enrichment automation',
    ],
    gradient: 'linear-gradient(135deg, rgba(56,152,255,.06) 0%, transparent 100%)',
  },
  {
    num: '04',
    title: 'Performance Campaigns',
    tagline: 'Traffic that converts. Growth that compounds.',
    description:
      'Data-driven campaigns engineered for measurable ROI. From organic growth strategies to paid media optimisation — every campaign is built on analytics, iterated with A/B testing, and scaled with automation. No vanity metrics. Only what moves the business.',
    bullets: [
      'Organic growth strategies with compounding content effects',
      'Paid media optimisation with conversion-focused funnels',
      'A/B testing and conversion rate optimisation programmes',
      'Analytics infrastructure with GA4, GTM, and custom dashboards',
      'Email and SMS marketing automation sequences',
      'Monthly performance reporting with actionable insights',
    ],
    gradient: 'linear-gradient(135deg, rgba(0,224,255,.06) 0%, transparent 100%)',
  },
];

/* ─── Scroll-driven sticky card ─── */
function StickyServiceCard({
  service,
  index,
  total,
}: {
  service: (typeof serviceData)[number];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', `${100 / total}vh start`],
  });

  const y = useTransform(scrollYProgress, [0, 0.6, 1], [0, 0, -180]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <div ref={ref} className="relative" style={{ height: `${100 / total}vh` }}>
      <motion.div
        style={{ y, opacity }}
        className="sticky top-0 flex h-screen items-center justify-center px-6 py-20"
      >
        <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          {/* Gradient background */}
          <div className="pointer-events-none absolute inset-0" style={{ background: service.gradient }} />

          {/* Glow edge */}
          <div className="pointer-events-none absolute -top-40 -right-40 w-80 h-80 rounded-full" style={{ background: 'radial-gradient(circle, rgba(56,152,255,.08) 0%, transparent 70%)' }} />

          {/* Content */}
          <div className="relative z-10 grid gap-8 p-10 md:grid-cols-2 md:p-16 lg:p-20">
            {/* Left */}
            <div>
              {/* Number */}
              <div className="mb-6 font-headline text-[140px] leading-none tracking-tight" style={{ color: 'rgba(56,152,255,.06)' }}>
                {service.num}
              </div>

              <h2 className="font-display text-[clamp(28px,3vw,44px)] font-bold leading-[1.08] tracking-[-.02em]" style={{ color: 'var(--white)' }}>
                {service.title}
              </h2>

              <p className="mt-3 font-display text-base font-semibold" style={{ color: 'var(--blue)' }}>
                {service.tagline}
              </p>

              <p className="mt-5 max-w-md text-[15px] leading-relaxed" style={{ color: 'var(--silver)' }}>
                {service.description}
              </p>
            </div>

            {/* Right — bullets */}
            <div className="flex flex-col justify-center">
              <ul className="space-y-3">
                {service.bullets.map((bp) => (
                  <li key={bp} className="flex items-start gap-3">
                    <span className="mt-[7px] h-[3px] w-[12px] shrink-0 rounded-full" style={{ background: 'var(--blue)' }} />
                    <span className="text-[14px] leading-relaxed" style={{ color: 'var(--silver)' }}>
                      {bp}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Main component ─── */
export default function ServicesStack() {
  const total = serviceData.length;

  return (
    <section id="services" className="relative overflow-hidden" style={{ background: 'var(--bg)' }}>
      {/* Header */}
      <div className="relative z-10 px-6 pt-28 pb-8 max-w-6xl mx-auto">
        <RevealWrapper>
          <Eyebrow>What I deliver</Eyebrow>
          <h2 className="font-display font-extrabold tracking-tight leading-none mt-3" style={{ fontSize: 'clamp(34px, 4.2vw, 60px)' }}>
            Systems that span<br />
            <span style={{ color: 'var(--muted)' }}>the full stack.</span>
          </h2>
          <p className="mt-4 text-[15px] max-w-xl" style={{ color: 'var(--silver)' }}>
            From web infrastructure to search dominance and AI-powered automation — every capability engineered to compound.
          </p>
        </RevealWrapper>
      </div>

      {/* Sticky cards */}
      <div className="relative">
        {serviceData.map((svc, i) => (
          <StickyServiceCard key={svc.num} service={svc} index={i} total={total} />
        ))}
      </div>

      {/* CTA */}
      <div className="relative z-10 flex justify-center py-28">
        <Link href="/services" className="btn btn-g btn-sm">
          Explore all services →
        </Link>
      </div>
    </section>
  );
}
