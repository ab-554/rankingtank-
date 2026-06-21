const items = [
  'E-Commerce Platform — Precision SEO',
  'AI Automation Pipeline — Lead Generation',
  'Technical SEO Audit — 10x Organic Traffic',
  'Custom Web App — B2B SaaS',
  'Content Strategy — Authority Building',
  'Next.js Platform — Sub-1s Load Time',
  'Link Building Campaign — Domain Authority',
  'Workflow Automation — n8n & OpenAI',
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
