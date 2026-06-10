export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="inline-flex items-center gap-[10px] text-[11px] font-bold tracking-[.14em] uppercase mb-4 font-display"
      style={{ color: 'var(--blue)' }}
    >
      <span className="w-5 h-px" style={{ background: 'var(--blue)' }} />
      {children}
    </div>
  );
}
