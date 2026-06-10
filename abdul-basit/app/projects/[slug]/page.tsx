import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import RevealWrapper from '@/components/ui/RevealWrapper';
import CtaBanner from '@/components/ui/CtaBanner';
import { getProject, getAllProjectSlugs, getRelatedProjects } from '@/lib/sanity/queries';

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: project.seoTitle || project.title,
    description: project.seoDescription || project.description,
    alternates: { canonical: `https://abdulbasit.nl/projects/${slug}` },
    openGraph: {
      title: project.seoTitle || project.title,
      description: project.seoDescription || project.description,
      type: 'article',
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  const related = await getRelatedProjects(slug, project.tags);

  return (
    <>
      <PageHero
        eyebrow={project.tags.join(' · ')}
        title={project.title.toUpperCase()}
        subtitle={project.description}
      />

      {/* Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <section className="px-[60px] max-lg:px-6 -mt-10">
          <RevealWrapper>
            <div className="grid gap-4 max-sm:grid-cols-1" style={{ gridTemplateColumns: `repeat(${project.metrics.length}, 1fr)` }}>
              {project.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="rounded-[20px] p-8 text-center relative overflow-hidden group"
                  style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
                >
                  <div className="font-headline text-[48px] leading-none gradient-text mb-2">{metric.value}</div>
                  <div className="text-xs tracking-[.04em]" style={{ color: 'var(--silver)' }}>{metric.label}</div>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </section>
      )}

      {/* Challenge & Solution */}
      <section className="py-[120px] px-[60px] max-lg:px-6">
        <div className="grid grid-cols-2 gap-20 max-lg:grid-cols-1">
          {/* Challenge */}
          <RevealWrapper>
            <div className="font-display text-[11px] font-bold tracking-[.14em] uppercase mb-4 inline-flex items-center gap-[10px]" style={{ color: 'var(--blue)' }}>
              <span className="w-5 h-px" style={{ background: 'var(--blue)' }} />
              The Challenge
            </div>
            <h2 className="font-display text-2xl font-extrabold tracking-tight mb-6">What we faced</h2>
            <p className="text-[15px] leading-[1.8]" style={{ color: 'var(--silver)' }}>{project.challenge}</p>
          </RevealWrapper>

          {/* Solution */}
          <RevealWrapper delay="d2">
            <div className="font-display text-[11px] font-bold tracking-[.14em] uppercase mb-4 inline-flex items-center gap-[10px]" style={{ color: 'var(--blue)' }}>
              <span className="w-5 h-px" style={{ background: 'var(--blue)' }} />
              The Solution
            </div>
            <h2 className="font-display text-2xl font-extrabold tracking-tight mb-6">How we solved it</h2>
            <p className="text-[15px] leading-[1.8]" style={{ color: 'var(--silver)' }}>{project.solution}</p>
          </RevealWrapper>
        </div>

        {/* Deliverables */}
        {project.deliverables && project.deliverables.length > 0 && (
          <RevealWrapper className="mt-20">
            <div className="font-display text-[11px] font-bold tracking-[.14em] uppercase mb-6 inline-flex items-center gap-[10px]" style={{ color: 'var(--blue)' }}>
              <span className="w-5 h-px" style={{ background: 'var(--blue)' }} />
              Deliverables
            </div>
            <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
              {project.deliverables.map((d, i) => (
                <div
                  key={i}
                  className="rounded-[16px] p-6 text-center transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
                >
                  <div className="font-display text-sm font-bold">{d}</div>
                </div>
              ))}
            </div>
          </RevealWrapper>
        )}
      </section>

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="py-[120px] px-[60px] max-lg:px-6" style={{ paddingTop: 0 }}>
          <RevealWrapper>
            <div className="font-display text-[11px] font-bold tracking-[.14em] uppercase mb-4 inline-flex items-center gap-[10px]" style={{ color: 'var(--blue)' }}>
              <span className="w-5 h-px" style={{ background: 'var(--blue)' }} />
              More Work
            </div>
            <h2 className="font-display font-extrabold tracking-tight leading-none mb-13" style={{ fontSize: 'clamp(34px, 4.2vw, 60px)' }}>
              Related<br /><span style={{ color: 'var(--muted)' }}>projects</span>
            </h2>
          </RevealWrapper>

          <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {related.map((p, i) => (
              <RevealWrapper key={p._id} delay={(['d1', 'd2', 'd3'] as const)[i]}>
                <Link
                  href={`/projects/${p.slug.current}`}
                  className="block rounded-[20px] overflow-hidden no-underline transition-all duration-350 group hover:-translate-y-2"
                  style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--white)' }}
                >
                  <div className="w-full aspect-video relative overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.06]" style={{ background: p.gradient }}>
                      <span className="font-headline text-[80px] opacity-[.07]">{p.monogram}</span>
                    </div>
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 35%, var(--card) 100%)' }} />
                  </div>
                  <div className="p-5">
                    <div className="font-display font-extrabold tracking-tight mb-1">{p.title}</div>
                    <div className="text-xs font-bold" style={{ color: 'var(--cyan)' }}>{p.result}</div>
                  </div>
                </Link>
              </RevealWrapper>
            ))}
          </div>
        </section>
      )}

      <CtaBanner />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: project.title,
            description: project.description,
            author: { '@type': 'Person', name: 'Abdul Basit A.' },
            url: `https://abdulbasit.nl/projects/${slug}`,
          }),
        }}
      />
    </>
  );
}
