import { sanityClient } from './client';
import type { Project, Insight } from '../types';

/* ═══════════════════════════════════════
   FALLBACK DATA
═══════════════════════════════════════ */

export const fallbackProjects: Project[] = [
  {
    _id: '1', title: 'Wristler', slug: { current: 'wristler' },
    tags: ['E-Commerce', 'Platforms'], client: 'Wristler B.V.',
    description: 'Watch trading marketplace with advanced filtering and secure transactions.',
    gradient: 'linear-gradient(135deg,#040d26,#0b2248)', monogram: 'W',
    challenge: 'Build a trustworthy marketplace for luxury watch trading with real-time authentication.',
    solution: 'Custom-built Next.js platform with integrated payment processing, AI-powered authenticity verification, and real-time bidding.',
    deliverables: ['Next.js Platform', 'Payment Integration', 'AI Authentication', 'Admin Dashboard'],
    metrics: [{ label: 'Listings at Launch', value: '5,500+' }, { label: 'Conversion Rate', value: '4.2%' }, { label: 'Load Time', value: '1.2s' }],
    result: '+5,500 listings at launch',
  },
  {
    _id: '2', title: 'Urban Creative', slug: { current: 'urban-creative' },
    tags: ['Websites', 'Retail'], client: 'Urban Creative',
    description: 'Full digital partnership for a retail brand.',
    gradient: 'linear-gradient(135deg,#050d16,#0e1c2e)', monogram: 'UC',
    challenge: 'Transform a traditional retail brand into a digital-first experience.',
    solution: 'End-to-end digital transformation including e-commerce, branding, and performance marketing.',
    deliverables: ['E-Commerce Platform', 'Brand Identity', 'SEO Strategy', 'Social Media'],
    metrics: [{ label: 'Revenue Growth', value: '+180%' }, { label: 'Online Sales', value: '€2.4M' }, { label: 'Organic Traffic', value: '+340%' }],
    result: 'Long-term growth partner',
  },
  {
    _id: '3', title: 'So Syncd', slug: { current: 'so-syncd' },
    tags: ['Branding', 'SaaS'], client: 'So Syncd Ltd.',
    description: 'Design dating platform with personality-based matching.',
    gradient: 'linear-gradient(135deg,#080416,#120a26)', monogram: 'SS',
    challenge: 'Create a dating app that stands out in a saturated market through personality science.',
    solution: 'Research-backed UX design combining MBTI personality matching with modern SwiftUI and React Native interfaces.',
    deliverables: ['Brand Identity', 'UX/UI Design', 'React Native App', 'Marketing Website'],
    metrics: [{ label: 'App Downloads', value: '500K+' }, { label: 'User Rating', value: '4.7★' }, { label: 'Countries', value: '12' }],
    result: 'International SaaS launch',
  },
  {
    _id: '4', title: 'Scooperz', slug: { current: 'scooperz' },
    tags: ['Websites', 'Business Services'], client: 'Scooperz',
    description: 'Social & influencer marketing platform.',
    gradient: 'linear-gradient(135deg,#04100d,#091e18)', monogram: 'SC',
    challenge: 'Build a platform connecting brands with micro-influencers at scale.',
    solution: 'Custom CMS-driven platform with influencer matching algorithms and campaign management tools.',
    deliverables: ['Platform Development', 'Influencer Matching', 'Analytics Dashboard', 'Campaign Tools'],
    metrics: [{ label: 'Campaigns Managed', value: '200+' }, { label: 'Influencer Network', value: '15K+' }, { label: 'Client Satisfaction', value: '98%' }],
    result: 'Award-winning design',
  },
  {
    _id: '5', title: 'Koppert Cress', slug: { current: 'koppert-cress' },
    tags: ['SEO', 'Strategy'], client: 'Koppert Cress',
    description: 'Strategic client journey optimization.',
    gradient: 'linear-gradient(135deg,#120a26,#080416)', monogram: 'KC',
    challenge: 'Increase organic visibility for a B2B horticultural brand in competitive international markets.',
    solution: 'Technical SEO audit, content strategy overhaul, and international link building campaign.',
    deliverables: ['SEO Audit', 'Content Strategy', 'Link Building', 'Analytics Setup'],
    metrics: [{ label: 'Organic Traffic', value: '+30%' }, { label: 'Rankings Improved', value: '150+' }, { label: 'Domain Authority', value: '+12' }],
    result: '+30% sustainable traffic',
  },
  {
    _id: '6', title: 'HBC', slug: { current: 'hbc' },
    tags: ['Automation', 'Web Application'], client: 'HBC Group',
    description: 'Corporate website & product configurator.',
    gradient: 'linear-gradient(135deg,#0e1c2e,#050d16)', monogram: 'HB',
    challenge: 'Replace manual quoting process with an automated product configurator saving hours weekly.',
    solution: 'Next.js web application with a dynamic product configurator, PDF generation, and CRM integration.',
    deliverables: ['Corporate Website', 'Product Configurator', 'PDF Generation', 'CRM Integration'],
    metrics: [{ label: 'Hours Saved/Month', value: '40+' }, { label: 'Quote Accuracy', value: '99.2%' }, { label: 'Lead Response Time', value: '-65%' }],
    result: 'Saved 40 hrs/month',
  },
];

export const fallbackInsights: Insight[] = [
  {
    _id: 'i1', title: 'Why Technical SEO Is the Foundation of Every Growth Strategy',
    slug: { current: 'technical-seo-foundation-growth' }, category: 'SEO',
    excerpt: 'Most businesses focus on content and links. But without a solid technical foundation, you\'re building on sand. Here\'s how to fix that.',
    publishedAt: '2026-03-15', readTime: 8, author: 'Abdul Basit A.', tags: ['SEO', 'Strategy'],
    featured: true,
  },
  {
    _id: 'i2', title: 'Building Scalable Web Systems with Next.js 15',
    slug: { current: 'scalable-web-systems-nextjs-15' }, category: 'Web Systems',
    excerpt: 'The App Router changed everything. Here\'s our architecture for building enterprise-grade applications that scale.',
    publishedAt: '2026-03-08', readTime: 12, author: 'Abdul Basit A.', tags: ['Next.js', 'Architecture'],
  },
  {
    _id: 'i3', title: 'AI Agents in Production: What We Learned After 6 Months',
    slug: { current: 'ai-agents-production-learnings' }, category: 'AI & Automation',
    excerpt: 'We deployed AI agents across 3 client projects. The results surprised us — and here\'s what we\'d do differently.',
    publishedAt: '2026-02-22', readTime: 10, author: 'Abdul Basit A.', tags: ['AI', 'Automation'],
  },
  {
    _id: 'i4', title: 'Core Web Vitals: The Metrics That Actually Matter in 2026',
    slug: { current: 'core-web-vitals-2026' }, category: 'Performance',
    excerpt: 'Google keeps updating what matters. We break down INP, CLS, and LCP strategies that move the needle.',
    publishedAt: '2026-02-10', readTime: 7, author: 'Abdul Basit A.', tags: ['Performance', 'SEO'],
  },
  {
    _id: 'i5', title: 'Case Study: How We Grew Organic Traffic by 340% for Urban Creative',
    slug: { current: 'case-study-urban-creative-seo' }, category: 'Case Study',
    excerpt: 'A deep dive into our 18-month SEO transformation for a retail brand — from audit to dominance.',
    publishedAt: '2026-01-28', readTime: 15, author: 'Abdul Basit A.', tags: ['Case Study', 'SEO'],
  },
  {
    _id: 'i6', title: 'The n8n Automation Stack We Use for Every Client',
    slug: { current: 'n8n-automation-stack-clients' }, category: 'AI & Automation',
    excerpt: 'Our battle-tested automation workflows that save 20+ hours per week across client projects.',
    publishedAt: '2026-01-15', readTime: 9, author: 'Abdul Basit A.', tags: ['Automation', 'n8n'],
  },
];

/* ═══════════════════════════════════════
   QUERY FUNCTIONS
═══════════════════════════════════════ */

export async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const projects = await sanityClient.fetch<Project[]>(
      `*[_type == "project"] | order(_createdAt desc)[0...4] {
        _id, title, slug, tags, client, description, gradient, monogram, result
      }`
    );
    return projects.length > 0 ? projects : fallbackProjects.slice(0, 4);
  } catch {
    return fallbackProjects.slice(0, 4);
  }
}

export async function getAllProjects(): Promise<Project[]> {
  try {
    const projects = await sanityClient.fetch<Project[]>(
      `*[_type == "project"] | order(_createdAt desc) {
        _id, title, slug, tags, client, description, gradient, monogram, result
      }`
    );
    return projects.length > 0 ? projects : fallbackProjects;
  } catch {
    return fallbackProjects;
  }
}

export async function getProject(slug: string): Promise<Project | null> {
  try {
    const project = await sanityClient.fetch<Project>(
      `*[_type == "project" && slug.current == $slug][0] {
        _id, title, slug, tags, client, description, coverImage,
        gradient, monogram, challenge, solution, deliverables,
        metrics, result, seoTitle, seoDescription
      }`,
      { slug }
    );
    return project || fallbackProjects.find(p => p.slug.current === slug) || null;
  } catch {
    return fallbackProjects.find(p => p.slug.current === slug) || null;
  }
}

export async function getAllProjectSlugs(): Promise<string[]> {
  try {
    const slugs = await sanityClient.fetch<{ current: string }[]>(
      `*[_type == "project"].slug`
    );
    return slugs.length > 0
      ? slugs.map(s => s.current)
      : fallbackProjects.map(p => p.slug.current);
  } catch {
    return fallbackProjects.map(p => p.slug.current);
  }
}

export async function getInsights(): Promise<Insight[]> {
  try {
    const insights = await sanityClient.fetch<Insight[]>(
      `*[_type == "insight"] | order(publishedAt desc) {
        _id, title, slug, category, excerpt, publishedAt, readTime, author, tags, featured
      }`
    );
    return insights.length > 0 ? insights : fallbackInsights;
  } catch {
    return fallbackInsights;
  }
}

export async function getInsight(slug: string): Promise<Insight | null> {
  try {
    const insight = await sanityClient.fetch<Insight>(
      `*[_type == "insight" && slug.current == $slug][0] {
        _id, title, slug, category, excerpt, body, coverImage,
        publishedAt, readTime, author, tags, featured,
        seoTitle, seoDescription
      }`,
      { slug }
    );
    return insight || fallbackInsights.find(i => i.slug.current === slug) || null;
  } catch {
    return fallbackInsights.find(i => i.slug.current === slug) || null;
  }
}

export async function getAllInsightSlugs(): Promise<string[]> {
  try {
    const slugs = await sanityClient.fetch<{ current: string }[]>(
      `*[_type == "insight"].slug`
    );
    return slugs.length > 0
      ? slugs.map(s => s.current)
      : fallbackInsights.map(i => i.slug.current);
  } catch {
    return fallbackInsights.map(i => i.slug.current);
  }
}

export async function getRelatedProjects(currentSlug: string, tags: string[]): Promise<Project[]> {
  try {
    const projects = await sanityClient.fetch<Project[]>(
      `*[_type == "project" && slug.current != $slug && count((tags[])[@ in $tags]) > 0][0...3] {
        _id, title, slug, tags, gradient, monogram, result
      }`,
      { slug: currentSlug, tags }
    );
    return projects.length > 0
      ? projects
      : fallbackProjects.filter(p => p.slug.current !== currentSlug).slice(0, 3);
  } catch {
    return fallbackProjects.filter(p => p.slug.current !== currentSlug).slice(0, 3);
  }
}

export async function getRelatedInsights(currentSlug: string, tags: string[]): Promise<Insight[]> {
  try {
    const insights = await sanityClient.fetch<Insight[]>(
      `*[_type == "insight" && slug.current != $slug && count((tags[])[@ in $tags]) > 0][0...3] {
        _id, title, slug, category, excerpt, publishedAt, readTime
      }`,
      { slug: currentSlug, tags }
    );
    return insights.length > 0
      ? insights
      : fallbackInsights.filter(i => i.slug.current !== currentSlug).slice(0, 3);
  } catch {
    return fallbackInsights.filter(i => i.slug.current !== currentSlug).slice(0, 3);
  }
}
