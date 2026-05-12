import React, { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  items: string[];
  icon: ReactNode; // Agregamos el ícono como nodo de React
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, items, icon }) => {
  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-xl font-bold text-white uppercase tracking-wider flex items-center gap-3">
        {/* Aquí renderizamos el ícono dinámico */}
        <div className="text-apg-electric-blue">
          {icon}
        </div>
        {title}
      </h3>

      <ul className="space-y-2 pl-11">
        {items.map((item, index) => (
          <li key={index} className="text-apg-silver flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-apg-electric-blue shrink-0"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};