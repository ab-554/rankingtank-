export interface ServicePillar {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  bulletPoints: string[];
  gradient: string;
  icon: string;
}

export const services: ServicePillar[] = [
  {
    id: 'ai-systems',
    number: '01',
    title: 'AI Systems',
    tagline: 'Intelligent agents that do the work.',
    description:
      'I design and deploy production-grade AI systems — custom GPT agents, RAG pipelines, workflow automation, and intelligent decision engines. From autonomous research agents to multi-step workflow orchestrators, every system is built to integrate with your existing stack and scale with your business.',
    bulletPoints: [
      'Custom AI agents for research, content, outreach, and data processing',
      'RAG pipelines with vector databases (Pinecone, Supabase, Weaviate)',
      'Multi-agent orchestration for complex business workflows',
      'LLM fine-tuning and prompt engineering for domain-specific accuracy',
      'Integration with Slack, Telegram, CRM, and API ecosystems',
    ],
    gradient: 'from-[#3898ff]/20 to-[#3898ff]/5',
    icon: '🤖',
  },
  {
    id: 'geo',
    number: '02',
    title: 'GEO',
    tagline: 'Optimised for the engines that read, not just search.',
    description:
      'Generative Engine Optimization is the new frontier. I optimise your content for AI Overviews, ChatGPT, Gemini, Perplexity, and Copilot — making your brand the answer when AI answers. Structured data, entity salience, citation authority, and conversational content architecture.',
    bulletPoints: [
      'AI Overview citation optimization — get quoted by Google SGE, ChatGPT, Gemini',
      'Entity salience architecture — make AI understand what you actually do',
      'Conversational content design for voice, chat, and answer engines',
      'Structured data mastery — JSON-LD, FAQPage, HowTo, LocalBusiness, Product',
      'Citation authority scoring + topical authority pipeline building',
    ],
    gradient: 'from-[#00e0ff]/20 to-[#00e0ff]/5',
    icon: '🌐',
  },
  {
    id: 'aeo',
    number: '03',
    title: 'AEO',
    tagline: 'Own the zero-click search moment.',
    description:
      'Answer Engine Optimization captures the zero-click search — featured snippets, People Also Ask, Knowledge Panels, and direct answers. I architect content specifically to answer questions with precision, earning the snippet position that drives authority, brand recall, and voice search dominance.',
    bulletPoints: [
      'Featured snippet targeting — position 0 ownership for high-intent queries',
      'People Also Ask optimisation — structured Q&A that gets surfaced',
      'Voice search readiness — conversational answer patterns for Siri, Alexa, Google Assistant',
      'Knowledge Panel enrichment — entity linking, Wikipedia-style citations',
      'FAQPage schema + natural language answer architecture',
    ],
    gradient: 'from-[#70bcff]/20 to-[#70bcff]/5',
    icon: '🎯',
  },
  {
    id: 'seo',
    number: '04',
    title: 'SEO',
    tagline: 'Precision engineering for search dominance.',
    description:
      'Technical SEO, content strategy, and link acquisition — executed with surgical precision. I audit, rebuild, and optimise for the algorithms that matter. Core Web Vitals, crawl budget optimisation, programmatic SEO architecture, topical clusters, and backlink pipelines that pass manual review.',
    bulletPoints: [
      'Technical SEO audits with full remediation roadmaps',
      'Programmatic SEO — content architectures that scale to thousands of pages',
      'Topic clusters + pillar pages for topical authority dominance',
      'Core Web Vitals optimisation — 90+ Lighthouse across mobile and desktop',
      'White-hat link acquisition via digital PR, guestographics, and HARO/Connectively',
    ],
    gradient: 'from-[#3898ff]/20 to-[#00e0ff]/5',
    icon: '📈',
  },
  {
    id: 'cms-crm',
    number: '05',
    title: 'CMS & CRM',
    tagline: 'Content and relationships, engineered.',
    description:
      'Custom CMS builds, Sanity Studio configuration, WordPress headless architectures, and CRM integrations that unify your operations. I build content infrastructure that your team can actually use — with structured content modelling, preview environments, and automated publishing workflows.',
    bulletPoints: [
      'Custom CMS architecture (Sanity, Strapi, WordPress headless, Contentful)',
      'CRM integration (GoHighLevel, HubSpot, Salesforce, custom API bridges)',
      'Content modelling for SEO — structured fields that feed search engines',
      'Automated publishing pipelines with preview environments',
      'Migration from legacy CMS to modern stack — zero downtime',
    ],
    gradient: 'from-[#00e0ff]/20 to-[#3898ff]/5',
    icon: '⚙️',
  },
  {
    id: 'automation',
    number: '06',
    title: 'Automations',
    tagline: 'Workflows that run while you sleep.',
    description:
      'End-to-end business automation — from lead capture to follow-up sequences, content generation to deployment. I build pipelines using n8n, Make, custom Node.js workers, and AI agents that handle the repetitive work so your team focuses on strategy, creativity, and high-value decisions.',
    bulletPoints: [
      'Lead generation automation — capture, enrich, route, and follow up',
      'Content production pipelines — generate, review, approve, publish',
      'Multi-channel outreach sequences (email, LinkedIn, Telegram, WhatsApp)',
      'Scheduling, reporting, and alerting — automated dashboards and notifications',
      'Custom API integrations between any two systems',
    ],
    gradient: 'from-[#70bcff]/20 to-[#00e0ff]/5',
    icon: '⚡',
  },
];
