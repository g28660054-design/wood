import { Star } from 'lucide-react';

const reviews = [
  {
    text: 'Беседку установили за один день. Качество отличное, дерево обработано аккуратно. Всем рекомендую!',
    author: 'Сергей К.',
    role: 'Московская обл.',
  },
  {
    text: 'Заказывал бытовку для дачи. Доставили быстро, сборка простая. Зимой тепло, летом прохладно.',
    author: 'Анна М.',
    role: 'Тула',
  },
  {
    text: 'Третий год пользуемся дровником. Дерево не гниет, конструкция крепкая. Спасибо за качество!',
    author: 'Игорь П.',
    role: 'Рязань',
  },
];

export function Reviews() {
  return (
    <section className="bg-white" style={{ padding: '120px 0' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14 reveal-section">
          <h2
            className="font-display text-4xl md:text-5xl font-semibold mb-4"
            style={{ color: '#3D2B1F', letterSpacing: '-0.01em' }}
          >
            Что говорят клиенты
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.author}
              className="rounded-2xl p-8 reveal-section"
              style={{ backgroundColor: '#F5F0EB' }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="#C0772C"
                    stroke="#C0772C"
                  />
                ))}
              </div>
              <p
                className="font-sans text-[0.9375rem] leading-7 italic mb-5"
                style={{ color: '#4A3728' }}
              >
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="font-sans text-sm font-semibold" style={{ color: '#3D2B1F' }}>
                {review.author}
              </div>
              <div className="font-sans text-xs mt-1" style={{ color: '#8B6914' }}>
                {review.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
