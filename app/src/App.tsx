import { useLenis } from './hooks/useLenis';
import { useReveal } from './hooks/useReveal';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Products } from './components/Products';
import { Categories } from './components/Categories';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { CTA } from './components/CTA';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';

function App() {
  useLenis();
  useReveal();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F0EB' }}>
      <Navigation />
      <Hero />
      <Stats />
      <Products />
      <Categories />
      <About />
      <Gallery />
      <Reviews />
      <CTA />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
