import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { CallbackModal } from './CallbackModal';

const navLinks = [
  { label: 'Главная', href: '#hero' },
  { label: 'Каталог', href: '#categories' },
  { label: 'О нас', href: '#about' },
  { label: 'Контакты', href: '#contacts' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-shadow duration-300 ${
          scrolled ? 'shadow-nav' : ''
        }`}
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between" style={{ height: 64 }}>
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="font-sans text-xl font-semibold tracking-wide"
            style={{ color: '#3D2B1F' }}
          >
            СТРОЙДРЕВ
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-sans text-sm font-medium tracking-wide transition-colors duration-150 hover:text-honey"
                style={{ color: '#4A3728' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => setCallbackOpen(true)}
              className="btn-accent px-5 py-2.5 text-sm"
            >
              Заказать звонок
            </button>
          </div>

          <button
            className="md:hidden text-brown-800"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div style={{ height: 1, backgroundColor: '#E8E0D5' }} />

        {mobileOpen && (
          <div className="md:hidden bg-white border-t" style={{ borderColor: '#E8E0D5' }}>
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block font-sans text-base font-medium py-2"
                  style={{ color: '#4A3728' }}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setCallbackOpen(true);
                  setMobileOpen(false);
                }}
                className="btn-accent w-full py-3 text-sm mt-2"
              >
                Заказать звонок
              </button>
            </div>
          </div>
        )}
      </header>

      <CallbackModal isOpen={callbackOpen} onClose={() => setCallbackOpen(false)} />
    </>
  );
}
