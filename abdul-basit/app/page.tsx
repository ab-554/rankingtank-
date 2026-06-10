import HeroSection from '@/components/home/HeroSection';
import ChipsRow from '@/components/home/ChipsRow';
import ImageStrip from '@/components/home/ImageStrip';
import LogosStrip from '@/components/home/LogosStrip';
import ServicesSection from '@/components/home/ServicesSection';
import StatsRow from '@/components/ui/StatsRow';
import QuoteRunner from '@/components/home/QuoteRunner';
import AboutSection from '@/components/home/AboutSection';
import WorkSection from '@/components/home/WorkSection';
import CultureSection from '@/components/home/CultureSection';
import CtaBanner from '@/components/ui/CtaBanner';

const stats = [
  { value: '20+', label: 'Years Active' },
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Retention' },
  { value: '2', label: 'Offices in NL' },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ChipsRow />
      <ImageStrip />
      <LogosStrip />

      <section className="py-[120px] px-[60px] max-lg:px-6">
        <ServicesSection />
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
