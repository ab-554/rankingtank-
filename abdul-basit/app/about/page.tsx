import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import Eyebrow from '@/components/ui/Eyebrow';
import RevealWrapper from '@/components/ui/RevealWrapper';
import CultureSection from '@/components/home/CultureSection';
import QuoteRunner from '@/components/home/QuoteRunner';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Abdul Basit A. — the mind behind scalable web systems and precision SEO strategies based in Roosendaal & The Hague.',
};

const steps = [
  { n: '01', title: 'Strategy & Discovery', desc: 'Deep-dive sessions mapping your market, audience, and goals into a sharp digital roadmap.' },
  { n: '02', title: 'Design & Architecture', desc: 'Systems built to scale — from UX wireframes to technical infrastructure for the future.' },
  { n: '03', title: 'Build & Launch', desc: 'Full-stack development, rigorous QA, and a smooth go-live that puts your brand on the map.' },
  { n: '04', title: 'Grow & Optimise', desc: 'Continuous campaigns, A/B testing, and AI-powered analytics to compound your growth.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Abdul Basit A."
        title="THE MIND BEHIND"
        titleAccent="THE SYSTEM"
        subtitle="I engineer digital growth. Period. With years of experience leading technically complex projects, I don't just build websites — I architect platforms that dominate markets."
      />

      {/* Philosophy */}
      <div className="py-[120px] px-[60px] grid grid-cols-2 gap-20 items-center max-lg:grid-cols-1 max-lg:px-6" style={{ paddingTop: '40px' }}>
        <RevealWrapper>
          <Eyebrow>Philosophy</Eyebrow>
          <h2 className="font-display font-extrabold tracking-tight leading-[1.1] my-[18px] mb-7" style={{ fontSize: 'clamp(26px, 3vw, 44px)' }}>
            Building digital systems that <span style={{ color: 'var(--blue)' }}>outlast trends</span> &amp; outperform competition.
          </h2>
          <p className="text-[15px] leading-[1.8] mb-3.5" style={{ color: 'var(--silver)' }}>
            I am a digital powerhouse for platforms and AI. My team develops digital infrastructure that accelerates your business and maximises impact across your market.
          </p>
          <p className="text-[15px] leading-[1.8]" style={{ color: 'var(--silver)' }}>
            A crew of digital natives across strategy, development, creative, and marketing — working from strong partnerships, AI-first, with zero compromise.
          </p>
        </RevealWrapper>

        <RevealWrapper delay="d2">
          <div className="rounded-3xl p-10 relative overflow-hidden" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <div className="absolute rounded-full pointer-events-none" style={{ width: '220px', height: '220px', top: '-60px', right: '-60px', background: 'radial-gradient(circle, rgba(56,152,255,.12) 0%, transparent 70%)' }} />
            <div className="text-[11px] font-bold tracking-[.12em] uppercase mb-6" style={{ color: 'var(--muted)' }}>Success Formula</div>
            {steps.map((step, i) => (
              <div key={i} className="flex gap-[18px] py-[18px]" style={{ borderBottom: i < steps.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div className="font-display text-[11px] font-extrabold tracking-[.04em] min-w-7 pt-[3px]" style={{ color: 'var(--blue)' }}>{step.n}</div>
                <div>
                  <div className="font-display text-[15px] font-bold mb-1">{step.title}</div>
                  <div className="text-[13px] leading-[1.65]" style={{ color: 'var(--silver)' }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>

      <CultureSection />
      <QuoteRunner />
    </>
  );
}
