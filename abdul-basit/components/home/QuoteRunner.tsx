const quotes = [
  { text: 'Scalable systems.', highlight: 'Zero compromise.' },
  { text: 'AI-native.', highlight: 'Impact-first.', suffix: ' Always.' },
  { text: 'From strategy to launch —', highlight: 'every single day.' },
  { text: 'Precision SEO.', highlight: 'Measurable results.' },
];

export default function QuoteRunner() {
  const doubled = [...quotes, ...quotes];

  return (
    <div
      className="py-16 overflow-hidden"
      style={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        background: 'var(--surface)',
      }}
    >
      <div
        className="inline-flex w-max"
        style={{ animation: 'tick 45s linear infinite' }}
      >
        {doubled.map((q, i) => (
          <span
            key={i}
            className="px-16 font-headline whitespace-nowrap tracking-[.02em]"
            style={{
              fontSize: 'clamp(22px, 3vw, 40px)',
              color: 'rgba(255,255,255,.07)',
            }}
          >
            {q.text} <span style={{ color: 'var(--blue)' }}>{q.highlight}</span>
            {q.suffix || ''}
          </span>
        ))}
      </div>
    </div>
  );
}
