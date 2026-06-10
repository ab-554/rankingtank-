import Eyebrow from '@/components/ui/Eyebrow';
import RevealWrapper from '@/components/ui/RevealWrapper';

const values = [
  { icon: '🎯', title: 'Precision-First SEO', desc: 'Every ranking decision is data-driven. No guesswork — just technical depth, keyword intent, and relentless iteration.' },
  { icon: '🤖', title: 'AI-Native Automation', desc: 'From n8n pipelines to OpenAI integrations, I build systems that work while you sleep — scaling your output without scaling headcount.' },
  { icon: '💪', title: 'Solo, High-Leverage Output', desc: 'You work directly with me — no account managers, no overhead. Pure execution from the person who knows your project inside out.' },
  { icon: '🚀', title: 'Zero Compromise Delivery', desc: 'Fast, clean, scalable code and measurable SEO results. Every project is treated as if my own business depends on it — because it does.' },
];

export default function CultureSection() {
  return (
    <div className="py-[120px] px-[60px] max-lg:px-6">
      <RevealWrapper>
        <Eyebrow>Ethos &amp; Culture</Eyebrow>
        <h2 className="font-display font-extrabold tracking-tight leading-none" style={{ fontSize: 'clamp(34px, 4.2vw, 60px)' }}>
          You can buy a solution.<br />
          <span style={{ color: 'var(--muted)' }}>You can&apos;t buy this culture.</span>
        </h2>
      </RevealWrapper>

      <div className="grid gap-[18px] mt-13 items-start max-sm:grid-cols-1" style={{ gridTemplateColumns: '1.1fr 1fr' }}>
        {/* Hero card */}
        <RevealWrapper>
          <div
            className="rounded-3xl overflow-hidden h-[520px] relative transition-all duration-300"
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              cursor: 'none',
            }}
          >
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #04091a 0%, #071630 60%, #04091a 100%)' }} />
            {/* Circuit SVG */}
            <div className="absolute inset-0 overflow-hidden opacity-[.18]">
              <svg viewBox="0 0 500 520" fill="none" className="w-full h-full">
                <line x1="60" y1="0" x2="60" y2="520" stroke="#3898ff" strokeWidth=".5" />
                <line x1="200" y1="0" x2="200" y2="520" stroke="#3898ff" strokeWidth=".5" />
                <line x1="380" y1="0" x2="380" y2="520" stroke="#3898ff" strokeWidth=".5" />
                <line x1="0" y1="130" x2="500" y2="130" stroke="#3898ff" strokeWidth=".5" />
                <line x1="0" y1="280" x2="500" y2="280" stroke="#3898ff" strokeWidth=".5" />
                <line x1="0" y1="420" x2="500" y2="420" stroke="#3898ff" strokeWidth=".5" />
                <circle cx="60" cy="130" r="4" fill="#3898ff" />
                <circle cx="200" cy="130" r="4" fill="#3898ff" />
                <circle cx="380" cy="130" r="4" fill="#3898ff" />
                <circle cx="60" cy="280" r="4" fill="#00e0ff" />
                <circle cx="200" cy="280" r="6" fill="#3898ff" />
                <circle cx="380" cy="280" r="4" fill="#3898ff" />
                <circle cx="60" cy="420" r="4" fill="#3898ff" />
                <circle cx="200" cy="420" r="4" fill="#00e0ff" />
                <circle cx="380" cy="420" r="4" fill="#3898ff" />
              </svg>
            </div>
            {/* Center glow */}
            <div
              className="absolute w-[350px] h-[350px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(56,152,255,.22) 0%, transparent 70%)',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                animation: 'glw 5s ease-in-out infinite alternate',
              }}
            />
            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 p-8" style={{ background: 'linear-gradient(to top, rgba(4,6,13,.95) 0%, transparent 100%)' }}>
              <div className="text-[11px] font-bold tracking-[.12em] uppercase mb-2" style={{ color: 'var(--blue)' }}>Brand Story</div>
              <div className="font-display text-2xl font-extrabold tracking-tight mb-2.5">Good vibes, great outcomes.</div>
              <div className="text-sm leading-[1.7]" style={{ color: 'var(--silver)' }}>
                The best digital work comes from people who love what they build — collaborative, ambitious, and relentlessly forward-moving.
              </div>
            </div>
          </div>
        </RevealWrapper>

        {/* Value cards */}
        <div className="flex flex-col gap-3.5">
          {values.map((v, i) => (
            <RevealWrapper key={i} delay={(['d1', 'd2', 'd3', 'd4'] as const)[i]}>
              <div
                className="rounded-[18px] p-[22px] px-6 flex gap-4 items-start transition-all duration-300 group hover:translate-x-2"
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  cursor: 'none',
                }}
              >
                <div
                  className="w-11 h-11 rounded-[11px] shrink-0 flex items-center justify-center text-lg"
                  style={{
                    background: 'var(--blue-dim)',
                    border: '1px solid var(--border-hi)',
                  }}
                >
                  {v.icon}
                </div>
                <div>
                  <div className="font-display text-sm font-bold mb-1">{v.title}</div>
                  <div className="text-[13px] leading-[1.6]" style={{ color: 'var(--silver)' }}>{v.desc}</div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}
