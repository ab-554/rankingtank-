import HeroSection from '@/components/home/HeroSection';
import ChipsRow from '@/components/home/ChipsRow';
import ImageStrip from '@/components/home/ImageStrip';
import LogosStrip from '@/components/home/LogosStrip';
import ServicesStack from '@/components/home/ServicesStack';
import StatsRow from '@/components/ui/StatsRow';
import QuoteRunner from '@/components/home/QuoteRunner';
import AboutSection from '@/components/home/AboutSection';
import WorkSection from '@/components/home/WorkSection';
import CultureSection from '@/components/home/CultureSection';
import CtaBanner from '@/components/ui/CtaBanner';

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
      <ChipsRow />
      <ImageStrip />
      <LogosStrip />

      <ServicesStack />

      <section className="py-[120px] px-[60px] max-lg:px-6">
        <StatsRow stats={stats} />
      </section>

      <QuoteRunner />
      <AboutSection />
      <WorkSection />
      <CultureSection />
      <CtaBanner />
    </>
  );
}
