const products = [
  {
    image: '/images/img-product-1.jpg',
    name: 'Беседка "Уют" 3×3 м',
    price: '45 000 ₽',
  },
  {
    image: '/images/img-product-2.jpg',
    name: 'Бытовка дачная 2.3×4 м',
    price: '68 000 ₽',
  },
  {
    image: '/images/img-product-3.jpg',
    name: 'Дровник открытый 2×1.5 м',
    price: '18 500 ₽',
  },
];

export function Products() {
  return (
    <section style={{ backgroundColor: '#F5F0EB', padding: '120px 0' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14 reveal-section">
          <h2
            className="font-display text-4xl md:text-5xl font-semibold mb-4"
            style={{ color: '#3D2B1F', letterSpacing: '-0.01em' }}
          >
            Популярные изделия
          </h2>
          <p className="font-sans text-base" style={{ color: '#4A3728' }}>
            Бестселлеры, которые заказывают чаще всего
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="product-card bg-white rounded-2xl overflow-hidden reveal-section"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-sans text-base font-semibold mb-2" style={{ color: '#3D2B1F' }}>
                  {product.name}
                </h3>
                <p className="font-sans text-xl font-bold mb-4" style={{ color: '#C0772C' }}>
                  {product.price}
                </p>
                <button className="btn-outline px-4 py-2 text-sm">
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
