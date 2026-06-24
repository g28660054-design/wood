const categories = [
  { image: '/images/img-cat-1.jpg', name: 'Беседки' },
  { image: '/images/img-cat-2.jpg', name: 'Бытовки' },
  { image: '/images/img-cat-3.jpg', name: 'Мебель' },
  { image: '/images/img-cat-4.jpg', name: 'Дровники' },
  { image: '/images/img-cat-5.jpg', name: 'Декор' },
  { image: '/images/img-cat-6.jpg', name: 'Детские площадки' },
];

export function Categories() {
  return (
    <section id="categories" className="bg-white" style={{ padding: '120px 0' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14 reveal-section">
          <h2
            className="font-display text-4xl md:text-5xl font-semibold mb-4"
            style={{ color: '#3D2B1F', letterSpacing: '-0.01em' }}
          >
            Каталог изделий
          </h2>
          <p className="font-sans text-base" style={{ color: '#4A3728' }}>
            Выберите категорию, чтобы найти нужное изделие
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="category-card cursor-pointer reveal-section"
              style={{ height: 344 }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(transparent 40%, rgba(61, 43, 31, 0.8) 100%)',
                  zIndex: 1,
                }}
              />
              <h3
                className="absolute font-sans text-xl font-semibold text-white z-10"
                style={{ bottom: 24, left: 24 }}
              >
                {cat.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
