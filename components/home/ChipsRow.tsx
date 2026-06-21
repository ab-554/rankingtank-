import RevealWrapper from '@/components/ui/RevealWrapper';

const chips = [
  '🤖 Smarter workflows with AI & automation',
  '💸 A webshop that rockets your revenue',
  '🚀 Sky-high ROI that impresses leadership',
  '🖥️ A website your competitors will envy',
  '📈 Growth through precision campaigns',
  '🧠 Real behavior change & lasting impact',
];

export default function ChipsRow() {
  return (
    <RevealWrapper className="py-14 px-[60px] flex flex-wrap gap-[9px] max-lg:px-6">
      {chips.map((chip, i) => (
        <a
          key={i}
          href="#"
          className="inline-flex items-center gap-[7px] px-[18px] py-[9px] rounded-full text-[13px] font-medium no-underline transition-all duration-250"
          style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            color: 'var(--silver)',
            cursor: 'none',
          }}
        >
          {chip}
        </a>
      ))}
    </RevealWrapper>
  );
}
