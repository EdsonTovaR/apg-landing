import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full h-screen min-h-[600px] flex items-center">
      
      {/* IMAGEN DE FONDO (Placeholder de Unsplash) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://imgs.search.brave.com/I9KWl3iWf3GBHh-Ny4vrShHWVHb9w7oSj6R74MwEdwY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAz/NjE3MTQ3Ny9lcy9m/b3RvL2JyYXpvcy1y/b2IlQzMlQjN0aWNv/cy1lbi1mJUMzJUEx/YnJpY2EuanBnP2I9/MSZzPTYxMng2MTIm/dz0wJms9MjAmYz01/N1A5R29VSjUxWDBj/NC1uRU8tMWZaanZW/a08ySXJrZG43WG5o/b2g0bTQwPQ')" 
        }}
      />

      {/* OVERLAY OSCURO (Gradiente para oscurecer la izquierda y que el texto se lea bien) */}
      <div className="absolute inset-0 bg-gradient-to-r from-apg-true-black/95 via-apg-dark-gray/80 to-transparent" />

      {/* CONTENIDO (Textos y Botón) */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-4xl mt-16">
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight leading-[1.1] mb-6">
          Advanced Automation.<br />
          Intelligent Solutions.<br />
          <span className="text-apg-electric-blue">Better Production.</span>
        </h1>
        
        <p className="text-apg-silver text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          Robotic integration, custom systems, and smart manufacturing solutions built for your success.
        </p>
        
        <button className="bg-apg-electric-blue text-white px-8 py-3.5 font-bold uppercase tracking-widest text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-apg-electric-blue/20">
          Learn More
        </button>

      </div>
    </section>
  );
};