const galleryImages = [
  { src: '/images/img-gallery-1.jpg', alt: 'Работа в мастерской', tall: true },
  { src: '/images/img-gallery-2.jpg', alt: 'Семья в беседке', tall: false },
  { src: '/images/img-product-1.jpg', alt: 'Беседка Уют', tall: false },
  { src: '/images/img-about.jpg', alt: 'Производство', tall: true },
  { src: '/images/img-product-2.jpg', alt: 'Бытовка', tall: false },
  { src: '/images/img-cat-1.jpg', alt: 'Коллекция беседок', tall: false },
];

export function Gallery() {
  return (
    <section className="bg-white" style={{ padding: '120px 0' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14 reveal-section">
          <h2
            className="font-display text-4xl md:text-5xl font-semibold mb-4"
            style={{ color: '#3D2B1F', letterSpacing: '-0.01em' }}
          >
            Наше производство
          </h2>
          <p className="font-sans text-base" style={{ color: '#4A3728' }}>
            Загляните в нашу мастерскую
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="break-inside-avoid rounded-xl overflow-hidden reveal-section"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover hover:scale-105 transition-transform duration-500"
                style={{ height: img.tall ? 400 : 280 }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
