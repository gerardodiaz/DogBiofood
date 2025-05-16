import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const productFeatures = [
  "Ingredientes de calidad premium",
  "Balance nutricional perfecto",
  "Precocinado para tu conveniencia",
  "Sellado al vacío para frescura",
  "Sin conservantes ni rellenos"
];

export const Products = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nuestros Productos</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Elige el tamaño perfecto para tu amigo peludo. Todos los paquetes contienen los mismos ingredientes premium y beneficios nutricionales.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Regular Size Package */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="h-56 bg-emerald-500 flex items-center justify-center p-4">
              <img 
                src="https://images.pexels.com/photos/6541321/pexels-photo-6541321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Paquete tamaño regular" 
                className="h-full w-auto object-contain mix-blend-multiply"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">Tamaño Regular</h3>
                  <p className="text-gray-600">Perfecto para perros grandes</p>
                </div>
                <div className="bg-emerald-100 text-emerald-700 font-bold py-1 px-3 rounded-full text-xl">
                  $19.99
                </div>
              </div>
              
              <ul className="mb-6 space-y-2">
                {productFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-600 font-medium">Paquete de 600g</span>
                </li>
              </ul>
              
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-4 rounded-full transition-all duration-300">
                Agregar al Carrito
              </button>
            </div>
          </div>
          
          {/* Small Size Package */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="h-56 bg-emerald-100 flex items-center justify-center p-4">
              <img 
                src="https://images.pexels.com/photos/6541321/pexels-photo-6541321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Paquete tamaño pequeño" 
                className="h-full w-auto object-contain mix-blend-multiply transform scale-75"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">Tamaño Pequeño</h3>
                  <p className="text-gray-600">Ideal para perros pequeños</p>
                </div>
                <div className="bg-emerald-100 text-emerald-700 font-bold py-1 px-3 rounded-full text-xl">
                  $9.99
                </div>
              </div>
              
              <ul className="mb-6 space-y-2">
                {productFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-600 font-medium">Paquete de 300g</span>
                </li>
              </ul>
              
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-4 rounded-full transition-all duration-300">
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto bg-emerald-50 border border-emerald-200 rounded-lg p-6 text-center">
          <h4 className="text-xl font-semibold text-emerald-700 mb-2">¿No estás seguro qué tamaño elegir?</h4>
          <p className="text-gray-600 mb-4">
            Como guía general, el tamaño regular se recomienda para perros de más de 11 kg, mientras que el tamaño pequeño es perfecto para perros de menos de 11 kg.
          </p>
          <a href="#contact" className="inline-block text-emerald-600 hover:text-emerald-800 font-medium underline">
            Contáctanos para recomendaciones específicas
          </a>
        </div>
      </div>
    </section>
  );
};