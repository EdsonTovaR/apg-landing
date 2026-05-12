import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-apg-true-black">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-apg-electric-blue tracking-widest uppercase text-sm font-bold mb-4">
          Get In Touch
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tight">
          Discuss Your Next Project
        </h3>
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-apg-electric-blue to-transparent opacity-50"></div>
      </div>

      <div className="max-w-2xl mx-auto">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Campo: Nombre */}
            <div>
              <label className="block text-xs font-bold text-apg-silver mb-2 uppercase tracking-wider">Full Name</label>
              <input 
                type="text" 
                className="w-full bg-apg-dark-gray border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-apg-electric-blue focus:ring-1 focus:ring-apg-electric-blue transition-all" 
                placeholder="John Doe" 
              />
            </div>
            
            {/* Campo: Empresa */}
            <div>
              <label className="block text-xs font-bold text-apg-silver mb-2 uppercase tracking-wider">Company</label>
              <input 
                type="text" 
                className="w-full bg-apg-dark-gray border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-apg-electric-blue focus:ring-1 focus:ring-apg-electric-blue transition-all" 
                placeholder="Manufacturing Inc." 
              />
            </div>
          </div>

          {/* Campo: Correo */}
          <div>
            <label className="block text-xs font-bold text-apg-silver mb-2 uppercase tracking-wider">Corporate Email</label>
            <input 
              type="email" 
              className="w-full bg-apg-dark-gray border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-apg-electric-blue focus:ring-1 focus:ring-apg-electric-blue transition-all" 
              placeholder="john@company.com" 
            />
          </div>

          {/* Campo: Mensaje */}
          <div>
            <label className="block text-xs font-bold text-apg-silver mb-2 uppercase tracking-wider">Project Requirements</label>
            <textarea 
              rows={4} 
              className="w-full bg-apg-dark-gray border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-apg-electric-blue focus:ring-1 focus:ring-apg-electric-blue transition-all resize-none" 
              placeholder="Please describe your automation or integration needs..."
            ></textarea>
          </div>

          {/* Botón Enviar */}
          <button 
            type="submit" 
            className="w-full bg-apg-electric-blue text-white font-bold py-4 rounded-md hover:bg-blue-700 transition-colors uppercase tracking-widest text-sm mt-4 shadow-lg shadow-apg-electric-blue/20"
          >
            Request Consultation
          </button>
        </form>
      </div>
    </section>
  );
};