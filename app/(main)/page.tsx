export const metadata = {
  title: 'Home - Saas',
  description: 'Page description',
};

import Hero from '@/components/hero';
import Testimonials from '@/components/testimonials';
import Features from '@/components/features';
import Features02 from '@/components/features-02';
import FaeturedProjects from '@/components/featured-projects';
import Faqs from '@/components/faqs';
import Cta from '@/components/cta';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Features02 />
      <FaeturedProjects />
      <Faqs />
      {/* <Testimonials /> */}
      <Cta />
    </>
  );
}
