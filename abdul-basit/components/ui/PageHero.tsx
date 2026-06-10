interface PageHeroProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
}

export default function PageHero({ eyebrow, title, titleAccent, subtitle }: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden flex items-start justify-center"
      style={{ minHeight: '50vh', paddingTop: '200px', paddingBottom: '80px' }}
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
      </div>

      {/* Content */}
      <div className="relative z-2 max-w-[900px] mx-auto text-center flex flex-col items-center px-6">
        {/* Eyebrow pill */}
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
          {eyebrow}
        </div>

        {/* Title */}
        <h1
          className="hl-solid l1 !mb-0"
          style={{ fontSize: 'clamp(44px, 6vw, 90px)', lineHeight: 1 }}
        >
          {title}
          {titleAccent && (
            <>
              <br />
              <span className="hl-outline l2" data-text={titleAccent}>
                {titleAccent}
              </span>
            </>
          )}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            className="text-lg max-w-[640px] mt-4 opacity-0"
            style={{
              color: 'var(--silver)',
              animation: 'riseUp .8s 1s var(--ease-s) forwards',
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
