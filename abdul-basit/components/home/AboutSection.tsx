import Link from 'next/link';
import Eyebrow from '@/components/ui/Eyebrow';
import RevealWrapper from '@/components/ui/RevealWrapper';

const steps = [
  { n: '01', title: 'Strategy & Discovery', desc: 'Deep-dive sessions mapping your market, audience, and goals into a sharp digital roadmap.' },
  { n: '02', title: 'Design & Architecture', desc: 'Systems built to scale — from UX wireframes to technical infrastructure for the future.' },
  { n: '03', title: 'Build & Launch', desc: 'Full-stack development, rigorous QA, and a smooth go-live that puts your brand on the map.' },
  { n: '04', title: 'Grow & Optimise', desc: 'Continuous campaigns, A/B testing, and AI-powered analytics to compound your growth.' },
];

export default function AboutSection() {
  return (
    <div className="py-[120px] px-[60px] grid grid-cols-2 gap-20 items-center max-lg:grid-cols-1 max-lg:px-6">
      <RevealWrapper>
        <Eyebrow>About</Eyebrow>
        <h2 className="font-display font-extrabold tracking-tight leading-[1.1] my-[18px] mb-7" style={{ fontSize: 'clamp(26px, 3vw, 44px)' }}>
          Building digital systems that <span style={{ color: 'var(--blue)' }}>outlast trends</span> &amp; outperform competition.
        </h2>
        <p className="text-[15px] leading-[1.8] mb-3.5" style={{ color: 'var(--silver)' }}>
          I am a freelance web developer and SEO operator. I build digital infrastructure that accelerates your business and maximises organic reach across competitive markets.
        </p>
        <p className="text-[15px] leading-[1.8] mb-3.5" style={{ color: 'var(--silver)' }}>
          Precision SEO, scalable web systems, and AI automation — delivered with zero compromise, deep technical expertise, and a singular focus on measurable growth.
        </p>
        <div className="flex gap-3 mt-8 flex-wrap">
          <Link href="/contact" className="btn btn-p btn-sm">Work with me →</Link>
          <a href="#" className="btn btn-g btn-sm">Download portfolio</a>
        </div>
      </RevealWrapper>

      <RevealWrapper delay="d2">
        <div
          className="rounded-3xl p-10 relative overflow-hidden"
          style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
          }}
        >
          {/* Corner glow */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: '220px', height: '220px', top: '-60px', right: '-60px',
              background: 'radial-gradient(circle, rgba(56,152,255,.12) 0%, transparent 70%)',
            }}
          />

          <div className="text-[11px] font-bold tracking-[.12em] uppercase mb-6" style={{ color: 'var(--muted)' }}>
            Success Formula
          </div>
          <div>
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex gap-[18px] py-[18px]"
                style={{
                  borderBottom: i < steps.length - 1 ? '1px solid var(--border)' : 'none',
                }}
              >
                <div className="font-display text-[11px] font-extrabold tracking-[.04em] min-w-7 pt-[3px]" style={{ color: 'var(--blue)' }}>
                  {step.n}
                </div>
                <div>
                  <div className="font-display text-[15px] font-bold mb-1">{step.title}</div>
                  <div className="text-[13px] leading-[1.65]" style={{ color: 'var(--silver)' }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealWrapper>
    </div>
  );
}
