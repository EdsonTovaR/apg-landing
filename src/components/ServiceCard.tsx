import React, { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react'; // Un indicador visual para saber que se puede abrir

interface ServiceCardProps {
  title: string;
  items: string[];
  icon: ReactNode;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, items, icon }) => {
  // Estado local para saber si esta tarjeta específica está abierta o cerrada
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout // Esta es la magia de Framer Motion: anima automáticamente los cambios de altura
      onClick={() => setIsOpen(!isOpen)}
      // Le damos estilo de "burbuja" o tarjeta clickeable. Cambia ligeramente de color al pasar el mouse o al abrirse.
      className={`cursor-pointer rounded-2xl p-8 border transition-colors duration-300 ${
        isOpen 
          ? 'bg-apg-true-black border-apg-electric-blue/50 shadow-lg shadow-apg-electric-blue/10' 
          : 'bg-apg-true-black/50 border-gray-800 hover:border-gray-600'
      }`}
    >
      {/* Contenedor Superior (Ícono y Título) */}
      <motion.div layout className="flex flex-col items-center text-center gap-4">
        
        {/* El ícono se hace más grande cuando está cerrado, y un poco más pequeño al abrirse */}
        <motion.div
          layout
          className={`text-apg-electric-blue transition-transform duration-300 ${
            isOpen ? 'scale-100' : 'scale-150 mb-4'
          }`}
        >
          {icon}
        </motion.div>

        <motion.h3 layout className="text-lg md:text-xl font-bold text-white uppercase tracking-wider">
          {title}
        </motion.h3>

        {/* Flechita que gira 180 grados al abrirse */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-apg-silver mt-2"
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>

      {/* Contenedor Inferior (La lista que se despliega) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {/* Línea divisoria */}
            <div className="h-px w-full bg-gray-800 my-6"></div>
            
            <ul className="space-y-3 px-4">
              {items.map((item, index) => (
                <li key={index} className="text-apg-silver flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-apg-electric-blue shrink-0 mt-2"></span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      
    </motion.div>
  );
};