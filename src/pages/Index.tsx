import { useEffect } from 'react';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Services from '@/components/landing/Services';
import Portfolio from '@/components/landing/Portfolio';
import Footer from '@/components/landing/Footer';

const Index = () => {
  const containerRef = useFadeInOnScroll();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
