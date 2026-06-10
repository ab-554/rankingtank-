import Eyebrow from '@/components/ui/Eyebrow';
import RevealWrapper from '@/components/ui/RevealWrapper';

const services = [
  {
    num: '01', icon: '🖥️', title: 'Platform Development',
    desc: 'Future-proof digital platforms — websites, webshops, and web applications built for real business results and frictionless user experiences.',
    link: 'Explore platforms →',
  },
  {
    num: '02', icon: '📈', title: 'Performance Campaigns',
    desc: 'Data-driven campaigns across paid, organic, and emerging channels. We engineer growth and deliver measurable ROI — not just impressions.',
    link: 'See campaigns →',
  },
  {
    num: '03', icon: '🤖', title: 'AI & Automation',
    desc: 'Intelligent workflows, AI agents, and automation pipelines that free your team to focus on what matters most: strategy, creativity, and growth.',
    link: 'Discover AI →',
  },
];

export default function ServicesSection() {
  return (
    <RevealWrapper>
      <Eyebrow>What I do</Eyebrow>
      <h2 className="font-display font-extrabold tracking-tight leading-none" style={{ fontSize: 'clamp(34px, 4.2vw, 60px)' }}>
        Accelerate with platforms,<br />
        <span style={{ color: 'var(--muted)' }}>AI &amp; automation</span>
      </h2>
      <div className="grid grid-cols-3 gap-4 mt-13 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {services.map((svc, i) => (
          <RevealWrapper key={i} delay={(['d1', 'd2', 'd3'] as const)[i]}>
            <div
              className="card-shimmer rounded-[20px] p-9 pb-8 relative overflow-hidden transition-all duration-300 group hover:-translate-y-2"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                cursor: 'none',
              }}
            >
              {/* Background number */}
              <div
                className="absolute top-7 right-7 font-headline text-[52px] leading-none pointer-events-none transition-colors duration-300 group-hover:!text-[rgba(56,152,255,.12)]"
                style={{ color: 'rgba(56,152,255,.06)' }}
              >
                {svc.num}
              </div>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-[22px]"
                style={{
                  background: 'var(--blue-dim)',
                  border: '1px solid var(--border-hi)',
                }}
              >
                {svc.icon}
              </div>

              <div className="font-display text-lg font-bold mb-2.5">{svc.title}</div>
              <div className="text-sm leading-7 mb-[22px]" style={{ color: 'var(--silver)' }}>{svc.desc}</div>
              <a
                href="#"
                className="text-xs font-bold tracking-[.04em] uppercase no-underline inline-flex items-center gap-1.5 transition-all duration-250 hover:gap-3"
                style={{ color: 'var(--blue)' }}
              >
                {svc.link}
              </a>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </RevealWrapper>
  );
}
