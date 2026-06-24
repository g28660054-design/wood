const catalogLinks = ['Беседки', 'Бытовки', 'Мебель', 'Дровники', 'Декор'];
const companyLinks = ['О нас', 'Производство', 'Доставка', 'Отзывы'];

export function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{ backgroundColor: '#2A1F15', padding: '60px 0 32px' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="font-sans text-xl font-semibold text-white tracking-wide mb-4">
              СТРОЙДРЕВ
            </div>
            <p className="font-sans text-sm leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
              Производство деревянных изделий ручной работы с 2008 года
            </p>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold text-white mb-4 tracking-wide">
              КАТАЛОГ
            </h4>
            <ul className="space-y-2.5">
              {catalogLinks.map((link) => (
                <li key={link}>
                  <span
                    className="font-sans text-sm transition-colors duration-150 cursor-default"
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                  >
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold text-white mb-4 tracking-wide">
              КОМПАНИЯ
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#about"
                    onClick={(e) => handleNavClick(e, '#about')}
                    className="font-sans text-sm transition-colors duration-150 hover:text-white"
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold text-white mb-4 tracking-wide">
              КОНТАКТЫ
            </h4>
            <ul className="space-y-2.5">
              <li className="font-sans text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                +7 (495) 123-45-67
              </li>
              <li className="font-sans text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                info@stroydrev.ru
              </li>
              <li className="font-sans text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                Тульская обл., г. Новомосковск
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 text-center"
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <p className="font-mono text-xs" style={{ color: 'rgba(255, 255, 255, 0.3)' }}>
            © 2025 СтройДрев
          </p>
        </div>
      </div>
    </footer>
  );
}
