import { Compass, Cpu, PenTool, ShieldCheck, Settings, TrendingUp } from 'lucide-react';
import { ServiceCard } from './components/ServiceCard';
import { AnimatedSection } from './components/AnimatedSection';
import { Navbar } from './components/Navbar'; 
import { Hero } from './components/Hero';    
import { Stats } from './components/Stats';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { servicesData } from './data/services';

const iconMap: Record<number, React.ReactNode> = {
  1: <Compass size={32} strokeWidth={1.5} />,
  2: <Cpu size={32} strokeWidth={1.5} />,
  3: <PenTool size={32} strokeWidth={1.5} />,
  4: <ShieldCheck size={32} strokeWidth={1.5} />,
  5: <Settings size={32} strokeWidth={1.5} />,
  6: <TrendingUp size={32} strokeWidth={1.5} />,
};

function App() {
  return (
    <div className="min-h-screen bg-apg-dark-gray font-sans">
      
      {/* 1. Barra de Navegación */}
      <Navbar />

      {/* 2. Sección Principal (Hero) */}
      <Hero />

      {/* 2.5 Indicadores de Confianza */}
      <AnimatedSection>
        <Stats />
      </AnimatedSection>

      {/* 3. Sección de Servicios */}
      <main id="solutions" className="py-24 px-6 md:px-12 lg:px-24">
        
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-apg-electric-blue tracking-widest uppercase text-sm font-bold mb-4">
              What We Do
            </h2>
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-apg-electric-blue to-transparent opacity-50 mb-12"></div>
          </div>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {/* Fíjate cómo agregamos el 'index' en el map */}
          {servicesData.map((service, index) => (
            // Cada tarjeta se envuelve y el delay aumenta según su posición (index * 0.1)
            <AnimatedSection key={service.id} delay={index * 0.1}>
              <ServiceCard 
                title={service.title} 
                items={service.items}
                icon={iconMap[service.id]} 
              />
            </AnimatedSection>
          ))}
        </div>
      </main>

      {/* 3. Sección de Servicios (Esta parte ya la tienes, la dejo como referencia) */}
      <main className="py-24 px-6 md:px-12 lg:px-24">
         {/* ... (Tu código actual del grid de servicios) ... */}
      </main>

      {/* 4. Formulario de Contacto */}
      <AnimatedSection>
      <Contact />
      </AnimatedSection>

      {/* 5. Footer Corporativo */}
      <Footer />

    </div> // Cierre del contenedor principal
  );
}

export default App;