'use client';

import { useState } from 'react';
import Link from 'next/link';
import RevealWrapper from '@/components/ui/RevealWrapper';
import Eyebrow from '@/components/ui/Eyebrow';
import { formatDate } from '@/lib/utils';
import type { Insight } from '@/lib/data';

const categories = ['All', 'SEO', 'Web Systems', 'AI & Automation', 'Performance', 'Case Study'];

export default function InsightsList({ insights }: { insights: Insight[] }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const filtered = activeCategory === 'All'
    ? insights
    : insights.filter(i => i.category === activeCategory);

  const featured = insights.find(i => i.featured) || insights[0];
  const rest = filtered.filter(i => i._id !== featured?._id);
  const visible = rest.slice(0, visibleCount);

  return (
    <section className="py-[120px] px-[60px] max-lg:px-6" style={{ paddingTop: '40px' }}>
      {/* Filter Bar */}
      <RevealWrapper className="mb-12">
        <Eyebrow>Browse by Topic</Eyebrow>
        <div className="flex flex-wrap gap-2 mt-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setVisibleCount(6); }}
              className="px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-250 font-display"
              style={{
                background: activeCategory === cat ? 'var(--blue)' : 'var(--card)',
                border: `1px solid ${activeCategory === cat ? 'var(--blue)' : 'var(--border)'}`,
                color: activeCategory === cat ? '#fff' : 'var(--silver)',
                cursor: 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </RevealWrapper>

      {/* Featured Post */}
      {featured && activeCategory === 'All' && (
        <RevealWrapper className="mb-12">
          <Link
            href={`/insights/${featured.slug}`}
            className="block rounded-[24px] overflow-hidden no-underline transition-all duration-350 group hover:-translate-y-2"
            style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--white)' }}
          >
            <div className="grid grid-cols-2 max-lg:grid-cols-1">
              {/* Image placeholder */}
              <div className="aspect-[16/10] relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #040d26, #0b2248)' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-headline text-[120px] opacity-[.05]">AB</span>
                </div>
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 50%, var(--card) 100%)' }} />
              </div>
              {/* Content */}
              <div className="p-10 flex flex-col justify-center">
                <span className="text-[10px] font-bold tracking-[.08em] uppercase px-3 py-1 rounded-full w-fit mb-4" style={{ color: 'var(--blue)', border: '1px solid var(--border-hi)', background: 'var(--blue-dim)' }}>
                  {featured.category}
                </span>
                <h2 className="font-display text-[28px] font-extrabold tracking-tight leading-[1.15] mb-4 group-hover:!text-[var(--blue)] transition-colors">{featured.title}</h2>
                <p className="text-sm leading-[1.75] mb-6" style={{ color: 'var(--silver)' }}>{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-xs" style={{ color: 'var(--muted)' }}>
                  <span>{formatDate(featured.publishedAt)}</span>
                  <span>·</span>
                  <span>{featured.readTime} min read</span>
                </div>
              </div>
            </div>
          </Link>
        </RevealWrapper>
      )}

      {/* Grid */}
      <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {visible.map((insight, i) => (
          <RevealWrapper key={insight._id} delay={(['d1', 'd2', 'd3'] as const)[i % 3]}>
            <Link
              href={`/insights/${insight.slug}`}
              className="block rounded-[20px] overflow-hidden no-underline transition-all duration-350 group hover:-translate-y-2 h-full"
              style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--white)' }}
            >
              {/* Cover */}
              <div className="aspect-[16/10] relative overflow-hidden" style={{ background: `linear-gradient(135deg, #04${Math.floor(Math.random()*9)}d${Math.floor(Math.random()*9)}6, #0b224${Math.floor(Math.random()*9)})` }}>
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.06]">
                  <span className="font-headline text-[80px] opacity-[.05]">{insight.title.charAt(0)}</span>
                </div>
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, var(--card) 100%)' }} />
              </div>

              <div className="p-6">
                <span className="text-[10px] font-bold tracking-[.08em] uppercase px-[11px] py-[3px] rounded-full" style={{ color: 'var(--blue)', border: '1px solid var(--border-hi)', background: 'var(--blue-dim)' }}>
                  {insight.category}
                </span>
                <h3 className="font-display text-lg font-extrabold tracking-tight mt-3 mb-2 leading-[1.2] group-hover:!text-[var(--blue)] transition-colors">{insight.title}</h3>
                <p className="text-[13px] leading-[1.65] mb-4 line-clamp-2" style={{ color: 'var(--silver)' }}>{insight.excerpt}</p>
                <div className="flex items-center gap-3 text-[11px]" style={{ color: 'var(--muted)' }}>
                  <span>{formatDate(insight.publishedAt)}</span>
                  <span>·</span>
                  <span>{insight.readTime} min read</span>
                </div>
              </div>
            </Link>
          </RevealWrapper>
        ))}
      </div>

      {/* Load More */}
      {visible.length < rest.length && (
        <div className="text-center mt-12">
          <button
            onClick={() => setVisibleCount(prev => prev + 6)}
            className="btn btn-g"
          >
            Load more articles →
          </button>
        </div>
      )}
    </section>
  );
}
