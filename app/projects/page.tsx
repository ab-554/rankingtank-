import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import RevealWrapper from '@/components/ui/RevealWrapper';
import { getAllProjects } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore our portfolio of web systems, platforms, SEO campaigns, and AI automation projects that deliver measurable results.',
};

const strips = [
  { label: 'Platform Launch', gradient: 'linear-gradient(135deg,#04091e,#0c2248)' },
  { label: 'Performance Marketing', gradient: 'linear-gradient(135deg,#030c14,#072030)' },
  { label: 'Corporate Website', gradient: 'linear-gradient(135deg,#04100d,#091e18)' },
  { label: 'Brand Identity', gradient: 'linear-gradient(135deg,#080414,#14082a)' },
  { label: 'AI Automation', gradient: 'linear-gradient(135deg,#040b1c,#081a38)' },
];

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <PageHero eyebrow="Cases & Work" title="PROVEN" titleAccent="IMPACT" />

      {/* Grid */}
      <div className="py-[120px] px-[60px] max-lg:px-6" style={{ paddingTop: '40px' }}>
        <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
          {projects.map((project, i) => (
            <RevealWrapper key={project._id} delay={i % 2 === 0 ? undefined : 'd2'}>
              <Link
                href={`/projects/${project.slug}`}
                className="block rounded-[20px] overflow-hidden no-underline relative transition-all duration-350 group hover:-translate-y-2"
                style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--white)', cursor: 'none' }}
              >
                <div className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center text-[15px] opacity-0 translate-x-1.5 -translate-y-1.5 transition-all duration-300 z-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" style={{ background: 'var(--blue-dim)', border: '1px solid var(--border-hi)', color: 'var(--blue)' }}>↗</div>
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
                      <span className="font-headline text-[100px] opacity-[.07] tracking-tight" style={{ color: 'var(--white)' }}>{project.monogram}</span>
                    </div>
                  )}
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 35%, var(--card) 100%)' }} />
                </div>
                <div className="p-6 pb-8 px-7">
                  <div className="flex gap-[7px] flex-wrap mb-3.5">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold tracking-[.08em] uppercase px-[11px] py-[3px] rounded-full" style={{ color: 'var(--blue)', border: '1px solid var(--border-hi)', background: 'var(--blue-dim)' }}>{tag}</span>
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

      {/* Strip */}
      <div className="overflow-hidden mt-10 mb-[120px] pb-1">
        <div className="flex gap-3.5 w-max hover:[animation-play-state:paused]" style={{ animation: 'strip 40s linear infinite' }}>
          {[...strips, ...strips, ...strips].map((item, i) => (
            <div key={i} className="w-[300px] h-[200px] rounded-[18px] shrink-0 overflow-hidden relative" style={{ border: '1px solid var(--border)' }}>
              <div className="w-full h-full flex items-end p-[18px] relative" style={{ background: item.gradient }}>
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(4,6,13,.82) 0%, transparent 60%)' }} />
                <span className="font-display text-[11px] font-bold z-2 tracking-[.06em] uppercase" style={{ color: 'rgba(255,255,255,.55)' }}>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
