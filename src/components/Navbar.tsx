import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Agregamos la 'X'

export const Navbar: React.FC = () => {
  // Estado para controlar el menú móvil. 'isOpen' es el valor, 'setIsOpen' es la función para cambiarlo.
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['HOME', 'SOLUTIONS', 'CAPABILITIES', 'INDUSTRIES', 'ABOUT', 'CONTACT'];
  
  // Función manejadora para invertir el estado actual (si está abierto lo cierra, y viceversa)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className="absolute top-0 w-full z-50 px-6 py-6 md:px-12 lg:px-24 flex justify-between items-center">
      
      {/* LOGO TEMPORAL */}
      {/* Añadimos z-50 relativo aquí para que el logo siempre se vea por encima del fondo oscuro del menú móvil */}
      <div className="relative z-50 flex flex-col">
        <div className="text-3xl font-black tracking-tighter flex items-center">
          <span className="text-apg-silver">A</span>
          <span className="text-apg-electric-blue">P</span>
          <span className="text-apg-silver">G</span>
        </div>
        <span className="text-[0.55rem] tracking-[0.2em] text-white uppercase mt-1">
          Manufacturing Solutions
        </span>
      </div>

      {/* ENLACES DE ESCRITORIO */}
      <div className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <a 
            key={link} 
            href={`#${link.toLowerCase()}`} 
            className="text-xs font-semibold text-apg-silver hover:text-white transition-colors tracking-widest"
          >
            {link}
          </a>
        ))}
      </div>

      {/* BOTÓN HAMBURGUESA / CERRAR (Móvil) */}
      {/* Le añadimos el evento onClick para disparar nuestra función y z-50 para que no quede oculto */}
      <button 
        className="relative z-50 md:hidden text-white cursor-pointer hover:text-apg-electric-blue transition-colors"
        onClick={toggleMenu}
      >
        {/* Renderizado condicional: Si está abierto muestra la X, si no, muestra la Hamburguesa */}
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* MENÚ MÓVIL (Pantalla completa) */}
      {/* Usamos clases dinámicas de Tailwind. Si isOpen es true, se posiciona en 0. Si es false, se desplaza a la derecha (fuera de la pantalla) */}
      <div 
        className={`fixed inset-0 bg-apg-true-black flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col gap-8 text-center">
          {navLinks.map((link) => (
            <li key={`mobile-${link}`}>
              <a 
                href={`#${link.toLowerCase()}`} 
                className="text-2xl font-bold text-white hover:text-apg-electric-blue transition-colors tracking-widest"
                onClick={() => setIsOpen(false)} // BUENA PRÁCTICA: Al hacer clic en un enlace, el menú debe cerrarse automáticamente
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  );}