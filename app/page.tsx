import CustomCursor from '@/components/ui/CustomCursor';
import Navigation from '@/components/nav/Navigation';
import Hero from '@/components/hero/Hero';
import Marquee from '@/components/ui/Marquee';
import Manifesto from '@/components/sections/Manifesto';
import Biomes from '@/components/sections/Biomes';
import Species from '@/components/sections/Species';
import ScaleDuality from '@/components/sections/ScaleDuality';
import Gallery from '@/components/sections/Gallery';
import PlanetData from '@/components/sections/PlanetData';
import Future from '@/components/sections/Future';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navigation />

      <main id="main-content">
        <Hero />
        <Marquee />
        <Manifesto />
        <Biomes />
        <Species />
        <ScaleDuality />
        <Gallery />
        <PlanetData />
        <Future />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
