import { BifrostBackground } from './BifrostBackground';
import { TrailCursor } from './TrailCursor';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: 600 }}
    >
      {/* Layer 1: CSS Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #F5F0EB 0%, #EDE7DF 50%, #E5DDD3 100%)',
          zIndex: 0,
        }}
      />

      {/* Layer 2: WebGL Bifrost Effect */}
      <BifrostBackground />

      {/* Layer 3: Trail Cursor */}
      <TrailCursor />

      {/* Layer 4: Content */}
      <div
        className="relative flex flex-col items-center justify-center text-center px-6"
        style={{ zIndex: 3, height: '100%' }}
      >
        <p
          className="font-mono text-xs uppercase tracking-[0.15em] mb-6"
          style={{ color: '#8B6914' }}
        >
          Собственное производство с 2008 года
        </p>

        <h1
          className="font-display font-bold leading-[1.1] mb-6"
          style={{
            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
            color: '#3D2B1F',
            textShadow: '0 2px 30px rgba(245, 240, 235, 0.8)',
            letterSpacing: '-0.02em',
          }}
        >
          Деревянные изделия
          <br />
          ручной работы
        </h1>

        <p
          className="font-sans text-lg leading-relaxed mb-10 max-w-[540px]"
          style={{ color: '#4A3728' }}
        >
          Беседки, бытовки, мебель и декор из натурального дерева. Доставка по всей России.
        </p>

        <a
          href="#categories"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#categories')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="btn-accent px-8 py-4 text-base inline-block"
        >
          Смотреть каталог
        </a>
      </div>
    </section>
  );
}
