import HeroSection from '@/components/home/HeroSection';
import WorkSection from '@/components/home/WorkSection';
import StatsRow from '@/components/ui/StatsRow';
import CtaBanner from '@/components/ui/CtaBanner';
import RevealWrapper from '@/components/ui/RevealWrapper';
import Eyebrow from '@/components/ui/Eyebrow';

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '10x', label: 'Avg. Traffic Growth' },
  { value: '100%', label: 'Client Retention' },
  { value: '0', label: 'Compromises' },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section className="py-[120px] px-[60px] max-lg:px-6 max-w-7xl mx-auto">
        <WorkSection />
        <div className="mt-24">
          <StatsRow stats={stats} />
        </div>
      </section>
      <section className="py-[120px] px-[60px] max-lg:px-6 bg-[#080b15]">
        <div className="max-w-6xl mx-auto">
          <RevealWrapper>
            <Eyebrow>ABOUT</Eyebrow>
            <h2 className="font-heading font-bold text-[clamp(28px,4vw,48px)] text-[#edf3ff] leading-[1.15] mt-4 max-w-3xl">
              Building digital systems that outlast trends{' '}
              <span className="text-[#3898ff]">and outperform</span> competition.
            </h2>
            <p className="text-[#8b9ab5] font-body text-lg mt-6 max-w-2xl leading-relaxed">
              I am a Pakistan-based freelance web developer and SEO operator. I build digital infrastructure
              that accelerates your business and maximises organic reach across competitive markets.
            </p>
            <p className="text-[#8b9ab5] font-body text-lg mt-4 max-w-2xl leading-relaxed">
              Precision SEO, scalable web systems, and AI automation — delivered with zero compromise,
              deep technical expertise, and a singular focus on measurable growth.
            </p>
            <div className="flex gap-4 mt-8 flex-wrap">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#3898ff] to-[#00e0ff] text-[#04060d] font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Work with me →
              </a>
            </div>
          </RevealWrapper>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
