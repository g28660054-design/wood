import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { CallbackModal } from './CallbackModal';

export function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.name.length >= 2 &&
      formData.phone.length >= 7 &&
      formData.email.includes('@') &&
      formData.message.length >= 10
    ) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', phone: '', email: '', message: '' });
      }, 3000);
    }
  };

  return (
    <section id="contacts" className="bg-white" style={{ padding: '120px 0' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="reveal-section">
            <h2
              className="font-display text-4xl md:text-5xl font-semibold mb-8"
              style={{ color: '#3D2B1F', letterSpacing: '-0.01em' }}
            >
              Контакты
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(192, 119, 44, 0.1)' }}
                >
                  <Phone size={20} style={{ color: '#C0772C' }} />
                </div>
                <div>
                  <div className="font-sans text-sm font-medium mb-1" style={{ color: '#8B6914' }}>
                    Телефон
                  </div>
                  <button
                    onClick={() => setCallbackOpen(true)}
                    className="font-sans text-lg font-semibold hover:text-honey transition-colors"
                    style={{ color: '#3D2B1F' }}
                  >
                    +7 (495) 123-45-67
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(192, 119, 44, 0.1)' }}
                >
                  <Mail size={20} style={{ color: '#C0772C' }} />
                </div>
                <div>
                  <div className="font-sans text-sm font-medium mb-1" style={{ color: '#8B6914' }}>
                    Email
                  </div>
                  <div className="font-sans text-lg font-semibold" style={{ color: '#3D2B1F' }}>
                    info@stroydrev.ru
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(192, 119, 44, 0.1)' }}
                >
                  <MapPin size={20} style={{ color: '#C0772C' }} />
                </div>
                <div>
                  <div className="font-sans text-sm font-medium mb-1" style={{ color: '#8B6914' }}>
                    Адрес
                  </div>
                  <div className="font-sans text-lg font-semibold" style={{ color: '#3D2B1F' }}>
                    Тульская обл., г. Новомосковск, ул. Лесная, 15
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(192, 119, 44, 0.1)' }}
                >
                  <Clock size={20} style={{ color: '#C0772C' }} />
                </div>
                <div>
                  <div className="font-sans text-sm font-medium mb-1" style={{ color: '#8B6914' }}>
                    Часы работы
                  </div>
                  <div className="font-sans text-lg font-semibold" style={{ color: '#3D2B1F' }}>
                    Пн–Пт: 9:00–18:00, Сб: 10:00–15:00
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-section">
            {submitted ? (
              <div
                className="rounded-2xl p-10 text-center"
                style={{ backgroundColor: '#F5F0EB' }}
              >
                <div className="text-5xl mb-4">✓</div>
                <h3 className="font-display text-2xl font-semibold mb-3" style={{ color: '#3D2B1F' }}>
                  Спасибо!
                </h3>
                <p className="text-brown-600">
                  Мы свяжемся с вами в течение часа
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8"
                style={{ backgroundColor: '#F5F0EB' }}
              >
                <h3
                  className="font-display text-2xl font-semibold mb-6"
                  style={{ color: '#3D2B1F' }}
                >
                  Напишите нам
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block font-sans text-sm font-medium mb-1.5" style={{ color: '#4A3728' }}>
                      Имя
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ваше имя"
                      required
                      minLength={2}
                      className="w-full bg-white border border-brown-300 rounded-lg px-4 py-3 text-brown-800 placeholder:text-brown-400/60 focus:outline-none focus:border-honey focus:ring-[3px] focus:ring-honey/15 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-sm font-medium mb-1.5" style={{ color: '#4A3728' }}>
                      Телефон
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (999) 000-00-00"
                      required
                      minLength={7}
                      className="w-full bg-white border border-brown-300 rounded-lg px-4 py-3 text-brown-800 placeholder:text-brown-400/60 focus:outline-none focus:border-honey focus:ring-[3px] focus:ring-honey/15 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-sm font-medium mb-1.5" style={{ color: '#4A3728' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                      required
                      className="w-full bg-white border border-brown-300 rounded-lg px-4 py-3 text-brown-800 placeholder:text-brown-400/60 focus:outline-none focus:border-honey focus:ring-[3px] focus:ring-honey/15 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-sm font-medium mb-1.5" style={{ color: '#4A3728' }}>
                      Сообщение
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Расскажите, что вам нужно..."
                      required
                      minLength={10}
                      rows={4}
                      className="w-full bg-white border border-brown-300 rounded-lg px-4 py-3 text-brown-800 placeholder:text-brown-400/60 focus:outline-none focus:border-honey focus:ring-[3px] focus:ring-honey/15 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-accent py-3.5 text-base font-semibold mt-2"
                  >
                    Отправить
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <CallbackModal isOpen={callbackOpen} onClose={() => setCallbackOpen(false)} />
    </section>
  );
}
