/**
 * Native data module — replaces Sanity CMS queries with local JSON data.
 * Sanity files (lib/sanity/*, sanity/schemas/*) are kept intact for future CMS setup.
 */
import projectsData from '@/data/projects.json' assert { type: 'json' };
import insightsData from '@/data/insights.json' assert { type: 'json' };

export type Project = {
  _id: string;
  title: string;
  slug: string;
  tags: string[];
  client: string;
  description: string;
  gradient: string;
  monogram: string;
  thumbnail?: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  result: string;
  seoTitle?: string;
  seoDescription?: string;
};

export type Insight = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  body?: unknown[];
  publishedAt: string;
  readTime: number;
  author: string;
  tags: string[];
  featured?: boolean;
  seoTitle?: string;
  seoDescription?: string;
};

const projects: Project[] = projectsData as Project[];
const insights: Insight[] = insightsData as Insight[];

export function getFeaturedProjects(): Project[] {
  return projects.slice(0, 4);
}

export function getAllProjects(): Project[] {
  return projects;
}

export function getProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map(p => p.slug);
}

export function getInsights(): Insight[] {
  return insights;
}

export function getInsight(slug: string): Insight | undefined {
  return insights.find(i => i.slug === slug);
}

export function getAllInsightSlugs(): string[] {
  return insights.map(i => i.slug);
}

export function getRelatedProjects(currentSlug: string, tags: string[]): Project[] {
  return projects
    .filter(p => p.slug !== currentSlug && p.tags.some(t => tags.includes(t)))
    .slice(0, 3);
}

export function getRelatedInsights(currentSlug: string, tags: string[]): Insight[] {
  return insights
    .filter(i => i.slug !== currentSlug && i.tags.some(t => tags.includes(t)))
    .slice(0, 3);
}
