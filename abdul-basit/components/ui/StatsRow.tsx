'use client';

interface StatsRowProps {
  stats: { value: string; label: string }[];
}

export default function StatsRow({ stats }: StatsRowProps) {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div
              className="font-headline text-[56px] leading-none tracking-[.04em] sm:text-[68px] gradient-text"
              style={{ letterSpacing: '.04em' }}
            >
              {stat.value}
            </div>
            <div
              className="mt-2 text-sm tracking-[.06em]"
              style={{ color: '#8b9ab5' }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
