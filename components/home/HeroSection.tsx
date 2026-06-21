import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden grid items-center gap-14 max-lg:gap-7"
      style={{
        minHeight: '100vh',
        gridTemplateColumns: '1fr 280px',
        padding: '160px 60px 80px',
      }}
    >
      {/* Background layers */}
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
            width: '1000px', height: '1000px',
            background: 'radial-gradient(circle, rgba(56,152,255,.13) 0%, transparent 65%)',
            top: '-300px', right: '-200px',
            animation: 'orb1 18s ease-in-out infinite alternate',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '600px', height: '600px',
            background: 'radial-gradient(circle, rgba(0,224,255,.07) 0%, transparent 65%)',
            bottom: 0, left: '15%',
            animation: 'orb2 13s ease-in-out infinite alternate',
          }}
        />
        {/* Scanline */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute left-0 right-0 h-[2px]"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(56,152,255,.15), transparent)',
              animation: 'scanV 8s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      {/* LEFT: Headline */}
      <div className="relative z-2">
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
          Freelance Web Developer &amp; SEO Operator · Pakistan
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="hl-solid l1">SCALABLE</span>
          <span className="hl-outline l2" data-text="WEB SYSTEMS">WEB SYSTEMS</span>
          <span className="hl-solid l3">PRECISION SEO</span>
          <span className="hl-gradient l4">ZERO COMPROMISE</span>
        </div>
      </div>

      {/* RIGHT: Info sidebar */}
      <div className="relative z-2 flex flex-col justify-end gap-7 pb-1 min-w-[260px] max-w-[300px] max-lg:min-w-0 max-lg:max-w-full max-lg:pt-9">
        <p
          className="text-sm leading-[1.8] pt-5 border-t opacity-0"
          style={{
            color: 'var(--silver)',
            borderColor: 'var(--border-hi)',
            animation: 'riseUp .8s 1s var(--ease-s) forwards',
          }}
        >
          We architect scalable web systems and precision SEO strategies that accelerate your business — from ground-zero to market dominance. No shortcuts. No compromise.
        </p>
        <div
          className="flex flex-col gap-2.5 opacity-0 max-lg:flex-row"
          style={{ animation: 'riseUp .8s 1.1s var(--ease-s) forwards' }}
        >
          <Link href="/contact" className="btn btn-p btn-sm">Start a project →</Link>
          <Link href="/projects" className="btn btn-g btn-sm">View cases</Link>
        </div>
        <div
          className="flex items-center gap-3 text-[11px] tracking-[.05em] opacity-0"
          style={{
            color: 'var(--muted)',
            animation: 'riseUp .8s 1.2s var(--ease-s) forwards',
          }}
        >
          <div className="w-1 h-1 rounded-full" style={{ background: 'var(--blue)' }} />
          Available for projects
          <div className="w-1 h-1 rounded-full" style={{ background: 'var(--blue)' }} />
          Worldwide · Remote
        </div>
        <div className="flex items-center gap-2.5 mt-2 text-[10px] tracking-[.12em] uppercase" style={{ color: 'var(--muted)' }}>
          <div
            className="w-8 h-px relative overflow-hidden"
            style={{ background: 'var(--muted)' }}
          >
            <div
              className="absolute top-0 w-full h-full"
              style={{
                background: 'var(--blue)',
                animation: 'scanH 2.4s ease-in-out infinite',
                left: '-100%',
              }}
            />
          </div>
          Scroll to explore
        </div>
      </div>

      {/* Responsive grid fix */}
      <style>{`
        @media (max-width: 1100px) {
          section:first-of-type {
            grid-template-columns: 1fr 220px !important;
            padding: 120px 24px 64px !important;
          }
        }
        @media (max-width: 640px) {
          section:first-of-type {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
