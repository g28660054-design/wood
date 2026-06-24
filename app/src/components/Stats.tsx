import { Clock, Users, Package, Truck } from 'lucide-react';

const stats = [
  { icon: Clock, value: '15+', label: 'Лет на рынке' },
  { icon: Users, value: '2000+', label: 'Довольных клиентов' },
  { icon: Package, value: '50+', label: 'Видов изделий' },
  { icon: Truck, value: '7', label: 'Дней на изготовление' },
];

export function Stats() {
  return (
    <section className="bg-white" style={{ padding: '80px 0' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center reveal-section">
              <stat.icon size={48} style={{ color: '#C0772C' }} className="mx-auto mb-4" strokeWidth={1.5} />
              <div
                className="font-display text-4xl font-semibold mb-2"
                style={{ color: '#3D2B1F' }}
              >
                {stat.value}
              </div>
              <div className="font-sans text-sm" style={{ color: '#4A3728' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
