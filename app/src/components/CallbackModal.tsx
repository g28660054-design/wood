import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CallbackModal({ isOpen, onClose }: CallbackModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.length >= 2 && phone.length >= 7) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setName('');
        setPhone('');
        onClose();
      }, 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ backgroundColor: 'rgba(61, 43, 31, 0.5)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-2xl p-10 w-full max-w-[480px] mx-4 relative"
        style={{ boxShadow: '0 20px 60px rgba(74, 55, 40, 0.2)' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brown-700 hover:text-brown-900 transition-colors"
        >
          <X size={24} />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">✓</div>
            <h3 className="font-display text-2xl font-semibold text-brown-800 mb-3">
              Спасибо!
            </h3>
            <p className="text-brown-600">
              Мы свяжемся с вами в течение часа
            </p>
          </div>
        ) : (
          <>
            <h3 className="font-display text-2xl font-semibold text-brown-800 mb-2">
              Заказать звонок
            </h3>
            <p className="text-brown-600 mb-6">
              Оставьте свои данные — мы перезвоним вам
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-brown-700 mb-1.5">
                  Ваше имя
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Иван"
                  required
                  minLength={2}
                  className="w-full bg-cream border border-brown-300 rounded-lg px-4 py-3 text-brown-800 placeholder:text-brown-400/60 focus:outline-none focus:border-honey focus:ring-[3px] focus:ring-honey/15 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brown-700 mb-1.5">
                  Телефон
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (999) 000-00-00"
                  required
                  minLength={7}
                  className="w-full bg-cream border border-brown-300 rounded-lg px-4 py-3 text-brown-800 placeholder:text-brown-400/60 focus:outline-none focus:border-honey focus:ring-[3px] focus:ring-honey/15 transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full btn-accent py-3.5 text-base font-semibold mt-2"
              >
                Отправить
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
