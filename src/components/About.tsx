import React from 'react';
import { Utensils, ShieldCheck, ThumbsUp, Leaf } from 'lucide-react';

const features = [
  {
    icon: <Utensils className="h-8 w-8 text-emerald-600" />,
    title: "Precocinado y Listo",
    description: "Solo calienta y sirve. Conveniente y fácil para dueños ocupados."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-emerald-600" />,
    title: "Sellado al Vacío",
    description: "Máxima frescura y nutrición en cada paquete."
  },
  {
    icon: <ThumbsUp className="h-8 w-8 text-emerald-600" />,
    title: "100% Natural",
    description: "Sin conservantes, rellenos o ingredientes artificiales."
  },
  {
    icon: <Leaf className="h-8 w-8 text-emerald-600" />,
    title: "Biológicamente Apropiado",
    description: "Imita lo que tu perro comería en la naturaleza."
  }
];

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">¿Qué es BARF?</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            BARF significa "Alimentación Cruda Biológicamente Apropiada" – un enfoque nutricional que enfatiza ingredientes naturales y crudos para la salud óptima de las mascotas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">¿Por Qué Elegir BARF ME Up?</h3>
            <p className="text-gray-600 mb-6">
              Nuestra dieta premium de alimentos crudos está diseñada para proporcionar a tu perro todos los nutrientes que necesita en su forma más natural. A diferencia del croquetas procesadas, ¡BARF ME Up! contiene ingredientes reales y reconocibles que apoyan la digestión, la salud del pelaje, los niveles de energía y el bienestar general de tu perro.
            </p>
            <p className="text-gray-600 mb-8">
              Cada paquete sellado al vacío contiene un equilibrio perfecto de proteínas, vegetales y superalimentos – precocinados para tu conveniencia mientras se preserva el máximo valor nutricional.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Perro feliz y saludable" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
              style={{
                height: "500px",
                objectPosition: "center"
              }}
            />
            <div className="absolute -bottom-8 -left-8 bg-emerald-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-xl font-semibold">Confían en nosotros</p>
              <p className="text-3xl font-bold">+10,000</p>
              <p className="text-lg">Perros Felices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};