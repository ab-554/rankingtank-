const strips = [
  { label: 'Platform Launch', gradient: 'linear-gradient(135deg,#04091e,#0c2248)' },
  { label: 'Performance Marketing', gradient: 'linear-gradient(135deg,#030c14,#072030)' },
  { label: 'Corporate Website', gradient: 'linear-gradient(135deg,#04100d,#091e18)' },
  { label: 'Brand Identity', gradient: 'linear-gradient(135deg,#080414,#14082a)' },
  { label: 'AI Automation', gradient: 'linear-gradient(135deg,#040b1c,#081a38)' },
  { label: 'SaaS Platform', gradient: 'linear-gradient(135deg,#060814,#0e162c)' },
];

export default function ImageStrip() {
  const doubled = [...strips, ...strips];

  return (
    <div className="overflow-hidden mt-[72px] pb-1">
      <div
        className="flex gap-3.5 w-max hover:[animation-play-state:paused]"
        style={{ animation: 'strip 40s linear infinite' }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="w-[300px] h-[200px] rounded-[18px] shrink-0 overflow-hidden relative transition-all duration-400"
            style={{ border: '1px solid var(--border)' }}
          >
            <div
              className="w-full h-full flex items-end p-[18px] relative"
              style={{ background: item.gradient }}
            >
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(4,6,13,.82) 0%, transparent 60%)' }} />
              <span className="font-display text-[11px] font-bold z-2 tracking-[.06em] uppercase" style={{ color: 'rgba(255,255,255,.55)' }}>
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
