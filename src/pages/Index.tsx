import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { ValuePillars } from '@/components/home/ValuePillars';
import { AnimatedCounters } from '@/components/home/AnimatedCounters';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ValuePillars />
      <AnimatedCounters />
    </Layout>
  );
};

export default Index;
