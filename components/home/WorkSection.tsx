import Link from 'next/link';
import Eyebrow from '@/components/ui/Eyebrow';
import RevealWrapper from '@/components/ui/RevealWrapper';
import { getAllProjects } from '@/lib/data';

export default function WorkSection() {
  const projects = getAllProjects().slice(0, 4);

  return (
    <div className="py-[120px] px-[60px] max-lg:px-6">
      <RevealWrapper>
        <div className="flex items-end justify-between mb-13 flex-wrap gap-6">
          <div>
            <Eyebrow>Selected Work</Eyebrow>
            <h2 className="font-display font-extrabold tracking-tight leading-none" style={{ fontSize: 'clamp(34px, 4.2vw, 60px)' }}>
              Stand out.<br />
              <span style={{ color: 'var(--muted)' }}>Make impact.</span>
            </h2>
          </div>
          <Link href="/projects" className="btn btn-g btn-sm">View all cases →</Link>
        </div>
      </RevealWrapper>

      <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        {projects.map((project, i) => (
          <RevealWrapper key={project._id} delay={(['d1', 'd2', 'd3', 'd4'] as const)[i]}>
            <Link
              href={`/projects/${project.slug}`}
              className="block rounded-[20px] overflow-hidden no-underline relative transition-all duration-350 group hover:-translate-y-2"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                color: 'var(--white)',
                cursor: 'none',
              }}
            >
              {/* Arrow */}
              <div
                className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center text-[15px] opacity-0 translate-x-1.5 -translate-y-1.5 transition-all duration-300 z-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
                style={{
                  background: 'var(--blue-dim)',
                  border: '1px solid var(--border-hi)',
                  color: 'var(--blue)',
                }}
              >
                ↗
              </div>

              {/* Visual */}
              <div className="w-full aspect-video relative overflow-hidden">
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.06]"
                    style={{ background: project.gradient }}
                  >
                    <span className="font-headline text-[100px] opacity-[.07] tracking-tight" style={{ color: 'var(--white)' }}>
                      {project.monogram}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 35%, var(--card) 100%)' }} />
              </div>

              {/* Body */}
              <div className="p-6 pb-8 px-7">
                <div className="flex gap-[7px] flex-wrap mb-3.5">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold tracking-[.08em] uppercase px-[11px] py-[3px] rounded-full"
                      style={{
                        color: 'var(--blue)',
                        border: '1px solid var(--border-hi)',
                        background: 'var(--blue-dim)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="font-display text-2xl font-extrabold tracking-tight mb-1">{project.title}</div>
                <div className="text-[13px] mb-4" style={{ color: 'var(--silver)' }}>{project.description}</div>
                <div className="font-display text-[13px] font-bold inline-flex items-center gap-[7px]" style={{ color: 'var(--cyan)' }}>
                  <span style={{ color: 'var(--blue)' }}>→</span> {project.result}
                </div>
              </div>
            </Link>
          </RevealWrapper>
        ))}
      </div>
    </div>
  );
}
