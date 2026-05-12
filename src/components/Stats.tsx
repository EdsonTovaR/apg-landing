import React from 'react';
import { Calendar, Cpu, Headset, ShieldCheck } from 'lucide-react';

export const Stats: React.FC = () => {
  // Arreglo con datos genéricos fáciles de reemplazar
  const statsData = [
    {
      id: 1,
      icon: <Calendar size={24} />,
      value: "15+",
      label: "Years Experience"
    },
    {
      id: 2,
      icon: <Cpu size={24} />,
      value: "250+",
      label: "Systems Integrated"
    },
    {
      id: 3,
      icon: <Headset size={24} />,
      value: "24/7",
      label: "Technical Support"
    },
    {
      id: 4,
      icon: <ShieldCheck size={24} />,
      value: "100%",
      label: "Quality Guarantee"
    }
  ];

  return (
    // Un fondo un poco más oscuro que el Hero para hacer contraste
    <section className="bg-apg-true-black py-12 px-6 md:px-12 border-b border-gray-800 relative z-20">
      <div className="max-w-6xl mx-auto">
        {/* En móvil: 2 columnas. En tablet/desktop: 4 columnas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-gray-800">
          
          {statsData.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center text-center px-4">
              <div className="text-apg-electric-blue mb-3">
                {stat.icon}
              </div>
              <h4 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-1">
                {stat.value}
              </h4>
              <p className="text-xs md:text-sm font-bold text-apg-silver uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};