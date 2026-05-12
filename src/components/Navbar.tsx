import React from 'react';
import { Menu } from 'lucide-react'; // Usamos este icono para el menú de celular

export const Navbar: React.FC = () => {
  const navLinks = ['HOME', 'SOLUTIONS', 'CAPABILITIES', 'INDUSTRIES', 'ABOUT', 'CONTACT'];

  return (
    // position absolute y z-50 asegulan que el navbar flote sobre la imagen del Hero
    <nav className="absolute top-0 w-full z-50 px-6 py-6 md:px-12 lg:px-24 flex justify-between items-center">
      
      {/* LOGO TEMPORAL (Hecho con texto) */}
      <div className="flex flex-col">
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

      {/* MENÚ HAMBURGUESA (Móvil) */}
      <div className="md:hidden text-white cursor-pointer hover:text-apg-electric-blue transition-colors">
        <Menu size={28} />
      </div>

    </nav>
  );
};