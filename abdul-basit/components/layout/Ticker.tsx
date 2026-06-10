const items = [
  'Recruitment Platform — ENGNR',
  'B2B E-Commerce — ACM Products',
  'Performance Marketing — Q1905 / Quick',
  'Behavior Change Campaign — Municipality Breda',
  'Corporate Website & Configurator — HBC',
  'Strategic Client Journey — Koppert Cress',
  'Lead Generation — FiscFree',
  'Digital Landscape — Damen Technical',
];

export default function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden py-[9px] relative z-[100] border-b" style={{ background: '#061430', borderColor: 'var(--border-hi)' }}>
      <div
        className="inline-flex w-max"
        style={{ animation: 'tick 55s linear infinite' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-display text-[12px] font-bold tracking-[.06em] pr-[52px] whitespace-nowrap opacity-85"
            style={{ color: 'var(--blue-bright)' }}
          >
            <span className="opacity-50">◈&nbsp;&nbsp;</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
