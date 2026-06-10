import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import RevealWrapper from '@/components/ui/RevealWrapper';
import { getInsight, getAllInsightSlugs, getRelatedInsights } from '@/lib/sanity/queries';
import { formatDate } from '@/lib/utils';

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getAllInsightSlugs();
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const insight = await getInsight(slug);
  if (!insight) return { title: 'Insight Not Found' };

  return {
    title: insight.seoTitle || insight.title,
    description: insight.seoDescription || insight.excerpt,
    alternates: { canonical: `https://abdulbasit.nl/insights/${slug}` },
    openGraph: {
      title: insight.seoTitle || insight.title,
      description: insight.seoDescription || insight.excerpt,
      type: 'article',
      publishedTime: insight.publishedAt,
      authors: [insight.author],
    },
  };
}

export default async function InsightDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = await getInsight(slug);
  if (!insight) notFound();

  const related = await getRelatedInsights(slug, insight.tags);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-noise" />
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(56,152,255,.028) 1px, transparent 1px), linear-gradient(90deg, rgba(56,152,255,.028) 1px, transparent 1px)', backgroundSize: '72px 72px' }} />
        </div>

        <div className="relative z-2 max-w-[800px] mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-[10px] font-bold tracking-[.08em] uppercase px-3 py-1 rounded-full" style={{ color: 'var(--blue)', border: '1px solid var(--border-hi)', background: 'var(--blue-dim)' }}>
              {insight.category}
            </span>
            <span className="text-xs" style={{ color: 'var(--muted)' }}>{insight.readTime} min read</span>
          </div>

          <h1
            className="font-display font-extrabold tracking-tight leading-[1.1] mb-6 opacity-0"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)', animation: 'riseUp .8s .3s var(--ease-s) forwards' }}
          >
            {insight.title}
          </h1>

          <p className="text-lg leading-[1.75] mb-8 opacity-0" style={{ color: 'var(--silver)', animation: 'riseUp .8s .5s var(--ease-s) forwards' }}>
            {insight.excerpt}
          </p>

          <div className="flex items-center justify-center gap-4 text-sm opacity-0" style={{ color: 'var(--muted)', animation: 'riseUp .8s .7s var(--ease-s) forwards' }}>
            <span className="font-semibold" style={{ color: 'var(--silver)' }}>{insight.author}</span>
            <span>·</span>
            <span>{formatDate(insight.publishedAt)}</span>
          </div>
        </div>
      </section>

      {/* Cover Image Placeholder */}
      <div className="px-[60px] max-lg:px-6 -mt-4">
        <RevealWrapper>
          <div
            className="rounded-[24px] overflow-hidden aspect-[21/9]"
            style={{ background: 'linear-gradient(135deg, #040d26, #0b2248)', border: '1px solid var(--border)' }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-headline text-[200px] opacity-[.03]">{insight.title.charAt(0)}</span>
            </div>
          </div>
        </RevealWrapper>
      </div>

      {/* Article Body */}
      <section className="py-[80px] px-[60px] max-lg:px-6">
        <div className="grid gap-16 max-w-[1200px] mx-auto" style={{ gridTemplateColumns: '1fr 280px' }}>
          {/* Main Content */}
          <RevealWrapper>
            <article className="prose-custom">
              {/* Since we don't have PortableText content yet, show a placeholder */}
              {insight.body ? (
                <div>
                  {/* TODO: Render with PortableText when Sanity content is available */}
                  <p>This article&apos;s content will be rendered from Sanity CMS using PortableText once the CMS is connected.</p>
                </div>
              ) : (
                <div>
                  <h2>Overview</h2>
                  <p>{insight.excerpt}</p>

                  <h2>Key Takeaways</h2>
                  <p>This article covers essential insights about {insight.category.toLowerCase()} strategies that drive measurable results. From technical implementation to strategic planning, we explore the approaches that have consistently delivered for our clients.</p>

                  <h2>The Approach</h2>
                  <p>Our methodology combines data-driven analysis with creative problem-solving. Every recommendation is backed by real-world testing and proven results across dozens of client projects.</p>

                  <h2>Results & Impact</h2>
                  <p>The strategies outlined in this article have been applied across multiple projects, consistently delivering above-benchmark results. We measure everything — from technical metrics to business outcomes — ensuring every effort contributes to sustainable growth.</p>

                  <blockquote>
                    &quot;The best digital strategies combine technical excellence with creative ambition. It&apos;s not enough to follow best practices — you need to push boundaries.&quot;
                    <br /><br />
                    — Abdul Basit A.
                  </blockquote>

                  <h2>What&apos;s Next</h2>
                  <p>We&apos;re constantly evolving our approaches as the digital landscape shifts. Stay tuned for more insights on {insight.tags.join(', ').toLowerCase()}, and how we&apos;re leveraging the latest tools and techniques to drive exceptional results.</p>
                </div>
              )}
            </article>
          </RevealWrapper>

          {/* Sidebar */}
          <aside className="max-lg:hidden">
            <div className="sticky top-[120px]">
              {/* Table of Contents */}
              <div className="rounded-[20px] p-6 mb-6" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="font-display text-xs font-bold tracking-[.12em] uppercase mb-4" style={{ color: 'var(--muted)' }}>In this article</div>
                <nav className="flex flex-col gap-3">
                  {['Overview', 'Key Takeaways', 'The Approach', 'Results & Impact', "What's Next"].map((item, i) => (
                    <a key={i} href="#" className="text-[13px] no-underline transition-colors duration-250 hover:!text-[var(--blue)]" style={{ color: 'var(--silver)' }}>
                      {item}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Tags */}
              <div className="rounded-[20px] p-6 mb-6" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="font-display text-xs font-bold tracking-[.12em] uppercase mb-4" style={{ color: 'var(--muted)' }}>Tags</div>
                <div className="flex flex-wrap gap-2">
                  {insight.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold tracking-[.06em] uppercase px-2.5 py-1 rounded-full" style={{ color: 'var(--blue)', border: '1px solid var(--border-hi)', background: 'var(--blue-dim)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="rounded-[20px] p-6" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="font-display text-xs font-bold tracking-[.12em] uppercase mb-4" style={{ color: 'var(--muted)' }}>Share</div>
                <div className="flex gap-2">
                  {['in', 'tw', 'fb'].map(s => (
                    <a key={s} href="#" className="w-9 h-9 rounded-[10px] flex items-center justify-center text-[11px] font-bold no-underline transition-all duration-250" style={{ background: 'var(--blue-dim)', border: '1px solid var(--border-hi)', color: 'var(--blue)' }}>{s}</a>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-[80px] px-[60px] max-lg:px-6" style={{ borderTop: '1px solid var(--border)' }}>
          <RevealWrapper>
            <div className="font-display text-[11px] font-bold tracking-[.14em] uppercase mb-4 inline-flex items-center gap-[10px]" style={{ color: 'var(--blue)' }}>
              <span className="w-5 h-px" style={{ background: 'var(--blue)' }} />
              Keep Reading
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight mb-10">Related articles</h2>
          </RevealWrapper>

          <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {related.map((r, i) => (
              <RevealWrapper key={r._id} delay={(['d1', 'd2', 'd3'] as const)[i]}>
                <Link
                  href={`/insights/${r.slug.current}`}
                  className="block rounded-[20px] p-6 no-underline transition-all duration-300 hover:-translate-y-2"
                  style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--white)' }}
                >
                  <span className="text-[10px] font-bold tracking-[.08em] uppercase px-[11px] py-[3px] rounded-full" style={{ color: 'var(--blue)', border: '1px solid var(--border-hi)', background: 'var(--blue-dim)' }}>{r.category}</span>
                  <h3 className="font-display text-lg font-extrabold tracking-tight mt-3 mb-2 leading-[1.2]">{r.title}</h3>
                  <p className="text-[13px] line-clamp-2 mb-3" style={{ color: 'var(--silver)' }}>{r.excerpt}</p>
                  <div className="text-[11px]" style={{ color: 'var(--muted)' }}>{formatDate(r.publishedAt)} · {r.readTime} min</div>
                </Link>
              </RevealWrapper>
            ))}
          </div>
        </section>
      )}

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: insight.title,
            description: insight.excerpt,
            author: { '@type': 'Person', name: insight.author },
            datePublished: insight.publishedAt,
            url: `https://abdulbasit.nl/insights/${slug}`,
            publisher: {
              '@type': 'Organization',
              name: 'Abdul Basit A.',
              url: 'https://abdulbasit.nl',
            },
          }),
        }}
      />
    </>
  );
}
