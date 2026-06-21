/* ═══════════════════════════════════════
   SHARED TYPES
═══════════════════════════════════════ */

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  tags: string[];
  client: string;
  description: string;
  coverImage?: SanityImage;
  gradient: string;
  monogram: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  result: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface Insight {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  excerpt: string;
  body?: unknown[];
  coverImage?: SanityImage;
  publishedAt: string;
  readTime: number;
  author: string;
  tags: string[];
  featured?: boolean;
  seoTitle?: string;
  seoDescription?: string;
}

export interface Offering {
  _id: string;
  title: string;
  slug: { current: string };
  icon: string;
  description: string;
  features: string[];
  order: number;
}

export interface Talk {
  _id: string;
  title: string;
  event: string;
  date: string;
  description: string;
}
