import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import InsightsList from '@/components/insights/InsightsList';
import { getInsights } from '@/lib/sanity/queries';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Insights & Writing',
  description: 'Thoughts on web systems, SEO, AI & automation, and digital strategy from Abdul Basit A.',
  alternates: { canonical: 'https://abdulbasit.nl/insights' },
};

export default async function InsightsPage() {
  const insights = await getInsights();

  return (
    <>
      <PageHero
        eyebrow="Insights & Writing"
        title="THOUGHTS WORTH"
        titleAccent="READING"
        subtitle="Deep dives into web systems, precision SEO, AI automation, and the strategies behind our most impactful work."
      />

      <InsightsList insights={insights} />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Insights & Writing',
            description: 'Thoughts on web systems, SEO, AI & automation from Abdul Basit A.',
            url: 'https://abdulbasit.nl/insights',
            author: { '@type': 'Person', name: 'Abdul Basit A.' },
          }),
        }}
      />
    </>
  );
}
