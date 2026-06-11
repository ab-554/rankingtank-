'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

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

const skills = [
  'Technical SEO audits & Core Web Vitals optimisation',
  'Next.js, TypeScript, and modern full-stack architecture',
  'AI workflow automation (n8n, GoHighLevel, custom pipelines)',
  'Shopify Liquid development & e‑commerce UX',
  'Content strategy, GEO, and programmatic SEO at scale',
  'AdSense monetisation & conversion rate optimisation',
];

const howIWork = [
  { title: 'System Over Hype', desc: 'I invest in frameworks and automation that compound — not flashy one-offs that collapse after launch.' },
  { title: 'Data-Led Decisions', desc: 'Every change is backed by analytics, search data, or performance benchmarks. Opinions are cheap.' },
  { title: 'Straight Talk', desc: 'No jargon, no fluff, no pretending. If something does not move the needle, I will tell you.' },
  { title: 'Remote-First, Always On', desc: 'Works across time zones. Asynchronous communication. Ships fast and iterates faster.' },
];

const stack = [
  'Next.js / React / TypeScript',
  'Tailwind CSS / Framer Motion',
  'Shopify + Liquid',
  'GoHighLevel / n8n / Make',
  'Vercel / Cloudflare / AWS',
  'Google Analytics / GSC / Looker Studio',
  'Python / Node.js / PostgreSQL',
  'Screaming Frog / Ahrefs / Semrush',
];

export default function AboutPage() {
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
            Who I Am
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
            About.
          </h1>
          <p
            className="text-lg max-w-[640px] mx-auto mt-4 opacity-0"
            style={{
              color: 'var(--silver)',
              animation: 'riseUp .8s 1s var(--ease-s) forwards',
            }}
          >
            Solo operator. Pakistan-based. Serving clients worldwide. Senior international operator with a track record of building systems that scale.
          </p>
        </div>
      </section>

      {/* Who I Am */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="px-[60px] max-lg:px-6 pb-[100px]"
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
              background: 'radial-gradient(circle, rgba(56,152,255,.06) 0%, transparent 70%)',
            }}
          />
          <div
            className="font-display text-[11px] font-bold tracking-[.14em] uppercase mb-4 inline-flex items-center gap-[10px]"
            style={{ color: 'var(--blue)' }}
          >
            <span className="w-5 h-px" style={{ background: 'var(--blue)' }} />
            Who I Am
          </div>
          <h2
            className="font-display font-extrabold tracking-tight leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(26px, 3vw, 44px)' }}
          >
            Engineering digital growth,{' '}
            <span style={{ color: 'var(--blue)' }}>remotely</span>.
          </h2>
          <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1">
            <p className="text-[15px] leading-[1.8]" style={{ color: 'var(--silver)' }}>
              I am a senior freelance web developer and SEO operator. I architect digital systems that accelerate businesses — from Next.js platforms and Shopify stores to precision SEO campaigns and AI automation pipelines. My work is technical, measurable, and built to last.
            </p>
            <p className="text-[15px] leading-[1.8]" style={{ color: 'var(--silver)' }}>
              Based in Pakistan, I serve clients across North America, Europe, and the Middle East. I have deep experience in competitive English-language markets and a bias for shipping work that actually moves KPIs — not just looks good in a portfolio.
            </p>
          </div>
        </div>
      </motion.section>

      {/* How I Work */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="px-[60px] max-lg:px-6 pb-[100px]"
      >
        <div
          className="font-display text-[11px] font-bold tracking-[.14em] uppercase mb-4 inline-flex items-center gap-[10px]"
          style={{ color: 'var(--blue)' }}
        >
          <span className="w-5 h-px" style={{ background: 'var(--blue)' }} />
          How I Work
        </div>
        <h2
          className="font-display font-extrabold tracking-tight leading-[1.1] mb-8"
          style={{ fontSize: 'clamp(26px, 3vw, 44px)' }}
        >
          Operating principles.
        </h2>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 max-lg:grid-cols-1"
        >
          {howIWork.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="rounded-[16px] p-6 relative overflow-hidden"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: '100px',
                  height: '100px',
                  top: '-20px',
                  right: '-20px',
                  background: 'radial-gradient(circle, rgba(56,152,255,.06) 0%, transparent 70%)',
                }}
              />
              <div
                className="font-display text-[11px] font-extrabold tracking-[.04em] mb-2"
                style={{ color: 'var(--blue)' }}
              >
                {(i + 1).toString().padStart(2, '0')}
              </div>
              <h3
                className="font-display text-base font-bold mb-2"
                style={{ color: 'var(--white)' }}
              >
                {item.title}
              </h3>
              <p className="text-[13px] leading-[1.65]" style={{ color: 'var(--silver)' }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Skills / Approach */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="px-[60px] max-lg:px-6 pb-[100px]"
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
            Skills &amp; Approach
          </div>
          <h2
            className="font-display font-extrabold tracking-tight leading-[1.1] mb-8"
            style={{ fontSize: 'clamp(26px, 3vw, 44px)' }}
          >
            What I bring.
          </h2>
          <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: 'easeOut' }}
                className="flex items-start gap-3 p-4 rounded-xl"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <span
                  className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold mt-0.5"
                  style={{ background: 'var(--blue-dim)', color: 'var(--blue)' }}
                >
                  ✓
                </span>
                <span className="text-[14px] leading-[1.6]" style={{ color: 'var(--silver)' }}>
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* The Stack */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="px-[60px] max-lg:px-6 pb-[140px]"
      >
        <div
          className="font-display text-[11px] font-bold tracking-[.14em] uppercase mb-4 inline-flex items-center gap-[10px]"
          style={{ color: 'var(--blue)' }}
        >
          <span className="w-5 h-px" style={{ background: 'var(--blue)' }} />
          The Stack
        </div>
        <h2
          className="font-display font-extrabold tracking-tight leading-[1.1] mb-8"
          style={{ fontSize: 'clamp(26px, 3vw, 44px)' }}
        >
          Tools &amp; technology I work with.
        </h2>
        <div className="flex flex-wrap gap-3">
          {stack.map((tech, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.3, ease: 'easeOut' }}
              className="text-[12px] font-bold tracking-[.04em] px-[16px] py-[7px] rounded-full"
              style={{
                color: 'var(--blue)',
                border: '1px solid var(--border-hi)',
                background: 'var(--blue-dim)',
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.section>
    </>
  );
}
