import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-apg-true-black text-apg-silver py-12 px-6 md:px-12 lg:px-24 border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* Columna 1: Marca y Descripción */}
        <div>
          <div className="text-2xl font-black tracking-tighter flex items-center mb-4">
            <span className="text-white">A</span>
            <span className="text-apg-electric-blue">P</span>
            <span className="text-white">G</span>
          </div>
          <p className="text-sm leading-relaxed pr-4">
            Engineering the future of manufacturing through automation, robotics, and intelligent production systems built for performance and reliability.
          </p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#home" className="hover:text-apg-electric-blue transition-colors">Home</a></li>
            <li><a href="#solutions" className="hover:text-apg-electric-blue transition-colors">Solutions & Capabilities</a></li>
            <li><a href="#about" className="hover:text-apg-electric-blue transition-colors">About Us</a></li>
            <li><a href="#privacy" className="hover:text-apg-electric-blue transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Columna 3: Información de Contacto */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-apg-electric-blue shrink-0 mt-0.5" />
              <span>123 Industrial Boulevard<br />Tech Park, Suite 400<br />Generic City, ST 12345</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-apg-electric-blue shrink-0" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-apg-electric-blue shrink-0" />
              <span>sales@apg-manufacturing.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Derechos de Autor */}
      <div className="max-w-6xl mx-auto pt-8 border-t border-gray-800 text-center text-xs tracking-wider">
        &copy; {new Date().getFullYear()} APG Manufacturing Solutions. All rights reserved.
      </div>
    </footer>
  );
};