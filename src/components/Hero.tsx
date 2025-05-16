import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="hero" className="relative pt-20 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/1933464/pexels-photo-1933464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          filter: "brightness(0.7)",
          backgroundPosition: "center 40%"
        }}
      ></div>
      <div className="relative min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              La Comida Cruda <span className="text-emerald-400">Más Saludable</span><br />
              Para Tu Mejor Amigo
            </h1>
            <p className="text-xl text-white mb-8 md:max-w-xl">
              Alimentación Cruda Biológicamente Apropiada precocinada, nutricionalmente completa y lista para servir. Elaborada con ingredientes naturales premium.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#products" className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
                Comprar Ahora
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#about" className="bg-white hover:bg-gray-100 text-emerald-700 font-medium py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center shadow-lg">
                Saber Más
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};