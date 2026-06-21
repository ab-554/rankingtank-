import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import RevealWrapper from '@/components/ui/RevealWrapper';
import StatsRow from '@/components/ui/StatsRow';
import CtaBanner from '@/components/ui/CtaBanner';

export const metadata: Metadata = {
  title: 'Offerings',
  description:
    'RankingTank services: scalable web platforms, precision SEO, AI automation, and technical consulting — built for real business impact.',
};

const services = [
  {
    num: '01',
    icon: '🖥️',
    title: 'Platform Development',
    desc: 'Future-proof digital platforms — websites, webshops, and web applications built for real business results. We use Next.js, React, Liquid, and robust API layers to ensure perfect performance and scale.',
    bullets: [
      'E-Commerce (Shopify Plus, B2B)',
      'Corporate & Brand Websites',
      'Custom Web Applications',
    ],
    link: 'Start a platform project →',
  },
  {
    num: '02',
    icon: '📈',
    title: 'Precision SEO & Campaigns',
    desc: "Data-driven campaigns across paid, organic, and emerging channels. We don't guess — we architect growth strategies that guarantee return on investment.",
    bullets: [
      'Technical SEO & Audits',
      'Performance Marketing (Ads, Social)',
      'Growth Hacking & CRO',
    ],
    link: 'Accelerate growth →',
  },
  {
    num: '03',
    icon: '🤖',
    title: 'AI & Automation',
    desc: 'Intelligent workflows, AI agents, and integration pipelines utilizing n8n, OpenAI, and custom logic to free your team from manual labor.',
    bullets: [
      'Workflow Automation (n8n, Zapier)',
      'AI Agent Customization',
      'API Integrations & Sync',
    ],
    link: 'Automate processes →',
  },
  {
    num: '04',
    icon: '🧠',
    title: 'Technical Consulting',
    desc: 'High-level strategic consulting for digital transformations. We map out complex architectures and guide your executive team through tech pivots.',
    bullets: [
      'Digital Strategy Roadmaps',
      'Tech Stack Audits',
      'CTO as a Service',
    ],
    link: 'Book consultation →',
  },
];

const stats = [
  { value: '50+', label: 'Platforms Launched' },
  { value: '10x',  label: 'Avg. Traffic Growth' },
  { value: '5K+',  label: 'Hours Saved via Automation' },
  { value: '0',    label: 'Compromises' },
];

export default function OfferingsPage() {
  return (
    <>
      <PageHero
        eyebrow="Offerings"
        title="SERVICES &"
        titleAccent="CAPABILITIES"
        subtitle="End-to-end digital mastery. From scalable web platforms to surgical SEO, I build architectures of growth — solo, fast, and without compromise."
      />

      {/* Services Grid */}
      <section className="py-[120px] px-[60px] max-lg:px-6" style={{ paddingTop: '40px' }}>
        <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
          {services.map((svc, i) => (
            <RevealWrapper key={i} delay={(['d1', 'd2', 'd3', 'd4'] as const)[i]}>
              <div
                className="card-shimmer rounded-[20px] p-12 relative overflow-hidden transition-all duration-300 group hover:-translate-y-2 h-full flex flex-col"
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  cursor: 'none',
                }}
              >
                {/* Big background number */}
                <div
                  className="absolute font-headline leading-none pointer-events-none transition-colors duration-300 group-hover:!text-[rgba(56,152,255,.12)]"
                  style={{ fontSize: '80px', top: '10px', right: '20px', color: 'rgba(56,152,255,.06)' }}
                >
                  {svc.num}
                </div>

                {/* Icon */}
                <div
                  className="flex items-center justify-center rounded-xl mb-[22px] shrink-0"
                  style={{ width: '64px', height: '64px', fontSize: '28px', background: 'var(--blue-dim)', border: '1px solid var(--border-hi)' }}
                >
                  {svc.icon}
                </div>

                <div className="font-display font-bold mb-4" style={{ fontSize: '24px' }}>
                  {svc.title}
                </div>

                <p className="text-[15px] leading-[1.75] mb-8" style={{ color: 'var(--silver)' }}>
                  {svc.desc}
                </p>

                {/* Bullet list */}
                <ul className="flex flex-col gap-2 mb-8 flex-1" style={{ listStyle: 'none' }}>
                  {svc.bullets.map(b => (
                    <li key={b} className="text-sm" style={{ color: 'var(--silver)' }}>
                      <strong style={{ color: 'var(--white)' }}>+</strong> {b}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="text-xs font-bold tracking-[.04em] uppercase no-underline inline-flex items-center gap-1.5 transition-all duration-250 hover:gap-3 self-start"
                  style={{ color: 'var(--blue)', cursor: 'none' }}
                >
                  {svc.link}
                </a>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <StatsRow stats={stats} />
      </section>

      <CtaBanner />
    </>
  );
}
