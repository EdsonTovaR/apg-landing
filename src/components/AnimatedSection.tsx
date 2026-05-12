import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number; // Permite que algunos elementos tarden un poco más en aparecer
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      // 1. Estado inicial: Totalmente transparente y 50px más abajo de su posición final
      initial={{ opacity: 0, y: 50 }} 
      
      // 2. Estado final (cuando está en pantalla): Totalmente visible y en su posición original (y: 0)
      whileInView={{ opacity: 1, y: 0 }} 
      
      // 3. Configuración: 'once: true' hace que la animación ocurra solo la primera vez que haces scroll.
      // margin: "-50px" hace que la animación se dispare cuando el elemento entra 50px dentro de la pantalla.
      viewport={{ once: true, margin: "-50px" }} 
      
      // 4. Transición: 0.6 segundos de duración, con el retraso opcional y un efecto de frenado suave al llegar.
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};