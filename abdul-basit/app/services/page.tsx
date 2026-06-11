import Eyebrow from '@/components/ui/Eyebrow';
import RevealWrapper from '@/components/ui/RevealWrapper';

const services = [
  {
    num: '01', icon: '🖥️',
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
    num: '02', icon: '📈',
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
    num: '03', icon: '🤖',
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
    num: '04', icon: '⚡',
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

export default function ServicesPage() {
  return (
    <>
      {/* ── Header ── */}
      <section
        className="relative flex min-h-[50vh] flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-16"
        style={{ background: 'var(--bg)' }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-noise" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(56,152,255,.02) 1px, transparent 1px), linear-gradient(90deg, rgba(56,152,255,.02) 1px, transparent 1px)',
              backgroundSize: '72px 72px',
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: '700px', height: '700px',
              background: 'radial-gradient(circle, rgba(56,152,255,.1) 0%, transparent 65%)',
              top: '-200px', right: '-100px',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 font-display text-[11px] font-bold tracking-[.14em] uppercase" style={{ color: 'var(--silver)' }}>
            SERVICES
          </div>
          <h1 className="font-display font-extrabold tracking-tight leading-none" style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}>
            Systems that span<br />
            <span style={{ color: 'var(--muted)' }}>the full stack.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed" style={{ color: 'var(--silver)' }}>
            Four pillars, one integrated delivery system. Every capability engineered to compound your growth.
          </p>
        </div>
      </section>

      {/* ── Service detail sections ── */}
      <section className="py-20 px-6 lg:px-16" style={{ background: 'var(--bg)' }}>
        <div className="mx-auto max-w-6xl space-y-24">
          {services.map((svc, i) => (
            <RevealWrapper key={svc.num} delay={(['d1', 'd2', 'd3', 'd4'] as const)[i]}>
              <div
                className="relative overflow-hidden rounded-3xl p-10 md:p-16"
                style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
              >
                <div className="pointer-events-none absolute inset-0" style={{ background: svc.gradient }} />
                <div className="pointer-events-none absolute -top-40 -right-40 w-80 h-80 rounded-full" style={{ background: 'radial-gradient(circle, rgba(56,152,255,.08) 0%, transparent 70%)' }} />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="mb-10 flex items-start justify-between">
                    <div>
                      <div className="mb-3 flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl text-lg" style={{ background: 'var(--blue-dim)', border: '1px solid var(--border-hi)' }}>
                          {svc.icon}
                        </span>
                        <span className="font-display text-[11px] font-bold tracking-[.14em] uppercase" style={{ color: 'var(--silver)' }}>
                          {svc.num} · {svc.title}
                        </span>
                      </div>
                      <h2 className="font-display font-extrabold tracking-tight leading-[1.08] mt-2" style={{ fontSize: 'clamp(28px, 3vw, 44px)' }}>
                        {svc.title}
                      </h2>
                      <p className="mt-2 font-display text-base font-semibold" style={{ color: 'var(--blue)' }}>
                        {svc.tagline}
                      </p>
                    </div>
                    <div className="hidden font-headline text-[120px] leading-none tracking-tight md:block" style={{ color: 'rgba(56,152,255,.06)' }}>
                      {svc.num}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mb-8 max-w-3xl text-[15px] leading-relaxed" style={{ color: 'var(--silver)' }}>
                    {svc.description}
                  </p>

                  {/* Bullets */}
                  <div className="grid gap-4 md:grid-cols-2">
                    {svc.bullets.map((bp) => (
                      <div key={bp} className="flex items-start gap-3 rounded-xl p-4" style={{ background: 'var(--blue-dim)', border: '1px solid var(--border)' }}>
                        <span className="mt-[5px] h-[3px] w-[12px] shrink-0 rounded-full" style={{ background: 'var(--blue)' }} />
                        <span className="text-[14px] leading-relaxed" style={{ color: 'var(--silver)' }}>{bp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 text-center px-6" style={{ background: 'var(--surface)' }}>
        <h2 className="font-display font-extrabold tracking-tight" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}>
          Ready to build something that compounds?
        </h2>
        <a href="/contact" className="btn btn-p mt-8 inline-flex items-center gap-2 px-8 py-[14px]">
          LET'S TALK →
        </a>
      </section>
    </>
  );
}
