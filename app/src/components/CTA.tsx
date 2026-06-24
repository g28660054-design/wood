import { useState } from 'react';
import { CallbackModal } from './CallbackModal';

export function CTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section style={{ backgroundColor: '#3D2B1F', padding: '80px 0' }}>
      <div className="max-w-[1200px] mx-auto px-6 text-center reveal-section">
        <h2
          className="font-display text-4xl md:text-5xl font-semibold mb-4 text-white"
        >
          Готовы сделать заказ?
        </h2>
        <p
          className="font-sans text-base mb-8 max-w-[540px] mx-auto"
          style={{ color: 'rgba(255, 255, 255, 0.7)' }}
        >
          Оставьте заявку — мы перезвоним в течение часа и рассчитаем стоимость
        </p>
        <button
          onClick={() => setModalOpen(true)}
          className="btn-accent px-10 py-4 text-base"
          style={{ marginTop: 8 }}
        >
          Оставить заявку
        </button>
      </div>

      <CallbackModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
