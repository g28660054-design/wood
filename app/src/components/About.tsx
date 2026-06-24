export function About() {
  return (
    <section id="about" style={{ backgroundColor: '#F5F0EB', padding: '120px 0' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-section">
            <h2
              className="font-display text-4xl md:text-5xl font-semibold mb-6"
              style={{ color: '#3D2B1F', letterSpacing: '-0.01em' }}
            >
              Как мы работаем
            </h2>
            <p
              className="font-sans text-base leading-7 mb-8"
              style={{ color: '#4A3728' }}
            >
              Каждое изделие изготавливается вручную на нашем производстве в Тульской области.
              Мы используем сосну, ель и лиственницу — древесину, которая выдерживает российские
              климатические условия. От замера до доставки — полный цикл под нашим контролем.
            </p>
            <a
              href="#contacts"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contacts')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-outline px-6 py-3 text-sm inline-block"
            >
              Подробнее о нас
            </a>
          </div>

          <div className="reveal-section">
            <img
              src="/images/img-about.jpg"
              alt="Наше производство"
              className="w-full rounded-2xl object-cover"
              style={{ maxHeight: 476 }}
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {[
            {
              title: 'Собственное производство',
              desc: 'Полный цикл изготовления — от распила до сборки',
            },
            {
              title: 'Натуральная древесина',
              desc: 'Сосна, ель и лиственница высшего сорта',
            },
            {
              title: 'Гарантия 2 года',
              desc: 'На все изделия предоставляем гарантию',
            },
            {
              title: 'Доставка по России',
              desc: 'Привезём и соберём на вашем участке',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 reveal-section"
              style={{ boxShadow: '0 4px 24px rgba(74, 55, 40, 0.06)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: 'rgba(192, 119, 44, 0.1)' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C0772C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-sans text-base font-semibold mb-2" style={{ color: '#3D2B1F' }}>
                {item.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed" style={{ color: '#4A3728' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
