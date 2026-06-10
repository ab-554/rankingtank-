const logos = [
  'Viscon', 'Groenhuysen', 'Automotions', 'Dokter.nl',
  'Ministry of Interior', 'MKB Brandstof', 'Mason Garments',
  'Municipality Breda', 'Municipality Roosendaal', 'Audi',
];

export default function LogosStrip() {
  const doubled = [...logos, ...logos];

  return (
    <div
      className="mt-20 py-10 overflow-hidden"
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        className="inline-flex w-max"
        style={{ animation: 'tick 32s linear infinite' }}
      >
        {doubled.map((logo, i) => (
          <span
            key={i}
            className="px-10 font-display text-sm font-extrabold whitespace-nowrap cursor-default tracking-[.01em] transition-colors duration-250 relative hover:!text-[var(--blue-bright)]"
            style={{ color: 'var(--muted)' }}
          >
            {logo}
            <span
              className="absolute right-0 top-1/2 -translate-y-1/2"
              style={{ color: 'var(--border-hi)' }}
            >
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
