import { services } from '@/data/services';
import RevealWrapper from '@/components/ui/RevealWrapper';

export default function ServicesPage() {
  return (
    <>
      {/* ── Header ── */}
      <section
        className="relative flex min-h-[50vh] flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-16"
        style={{ background: '#04060d' }}
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
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div
            className="mb-6 font-display text-[11px] font-bold tracking-[.14em] uppercase"
            style={{ color: '#8b9ab5' }}
          >
            SERVICES
          </div>
          <h1
            className="font-display text-[clamp(36px,5vw,72px)] font-bold leading-[1.05] tracking-[-.02em]"
            style={{ color: '#edf3ff' }}
          >
            Systems that span the{' '}
            <span className="text-[#3898ff]">full stack.</span>
          </h1>
          <p
            className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed"
            style={{ color: '#8b9ab5' }}
          >
            From AI agents to search dominance — every capability engineered to compound.
            Six pillars, one integrated delivery system.
          </p>
        </div>
      </section>

      {/* ── Service detail sections ── */}
      <section className="py-20 px-6 lg:px-16" style={{ background: '#04060d' }}>
        <div className="mx-auto max-w-6xl space-y-20">
          {services.map((svc, i) => (
            <RevealWrapper key={svc.id} delay={(['d1', 'd2', 'd3', 'd4', 'd5'] as const)[i % 5]}>
              <div
                className="relative overflow-hidden rounded-3xl p-10 md:p-16"
                style={{
                  background: '#0c1020',
                  border: '1px solid rgba(56,152,255,.08)',
                }}
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${svc.gradient} opacity-30`}
                />

                <div className="relative z-10">
                  {/* Header row */}
                  <div className="mb-10 flex items-start justify-between">
                    <div>
                      <div className="mb-3 flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#04060d] text-lg"
                          style={{ border: '1px solid rgba(56,152,255,.15)' }}
                        >
                          {svc.icon}
                        </span>
                        <span
                          className="font-display text-[11px] font-bold tracking-[.14em] uppercase"
                          style={{ color: '#8b9ab5' }}
                        >
                          {svc.number} · {svc.title}
                        </span>
                      </div>
                      <h2
                        className="font-display text-[clamp(24px,3vw,42px)] font-bold leading-[1.08] tracking-[-.02em]"
                        style={{ color: '#edf3ff' }}
                      >
                        {svc.title}
                      </h2>
                      <p
                        className="mt-2 font-display text-base font-semibold"
                        style={{ color: '#3898ff' }}
                      >
                        {svc.tagline}
                      </p>
                    </div>

                    <div
                      className="hidden font-headline text-[120px] leading-none tracking-tight md:block"
                      style={{ color: 'rgba(56,152,255,.06)' }}
                    >
                      {svc.number}
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className="mb-8 max-w-3xl text-[15px] leading-relaxed"
                    style={{ color: '#8b9ab5' }}
                  >
                    {svc.description}
                  </p>

                  {/* Bullet points */}
                  <div className="grid gap-4 md:grid-cols-2">
                    {svc.bulletPoints.map((bp) => (
                      <div key={bp} className="flex items-start gap-3 rounded-xl p-4"
                        style={{ background: 'rgba(56,152,255,.04)', border: '1px solid rgba(56,152,255,.06)' }}
                      >
                        <span
                          className="mt-[5px] h-2 w-2 shrink-0 rounded-full"
                          style={{ background: '#3898ff' }}
                        />
                        <span
                          className="text-[14px] leading-relaxed"
                          style={{ color: '#b0bedd' }}
                        >
                          {bp}
                        </span>
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
      <section className="py-28 text-center px-6" style={{ background: '#080b15' }}>
        <h2
          className="font-display text-[clamp(28px,3.5vw,48px)] font-bold"
          style={{ color: '#edf3ff' }}
        >
          Ready to build something that compounds?
        </h2>
        <a
          href="/contact"
          className="btn btn-p mt-8 inline-flex items-center gap-2 px-8 py-[14px]"
        >
          LET'S TALK →
        </a>
      </section>
    </>
  );
}
