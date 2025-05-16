import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "¿Cuáles son los beneficios de una dieta BARF?",
    answer: "Una dieta BARF (Alimentación Cruda Biológicamente Apropiada) ofrece numerosos beneficios para los perros, incluyendo piel y pelaje más saludables, mejor salud dental, mayor energía, mejor digestión, reducción de alergias y un bienestar general mejorado. Está diseñada para imitar la dieta ancestral natural de los perros."
  },
  {
    question: "¿Cómo transiciono a mi perro a la comida BARF ME Up!?",
    answer: "Realiza la transición lentamente durante 7-10 días. Comienza mezclando una pequeña cantidad de BARF ME Up! con la comida actual de tu perro, aumentando gradualmente la proporción hasta completar la transición. Este enfoque gradual ayuda a evitar molestias digestivas."
  },
  {
    question: "¿Necesito agregar suplementos a la dieta BARF ME Up!?",
    answer: "BARF ME Up! es nutricionalmente completo y balanceado, por lo que generalmente no son necesarios suplementos adicionales. Sin embargo, algunos perros con condiciones de salud específicas pueden beneficiarse de ciertos suplementos. Siempre consulta con tu veterinario para obtener consejos personalizados."
  },
  {
    question: "¿Cómo debo almacenar los paquetes BARF ME Up!?",
    answer: "Mantén los paquetes sin abrir refrigerados o congelados. Los paquetes congelados pueden almacenarse hasta por 6 meses. Una vez descongelados, los paquetes refrigerados deben usarse dentro de 3 días. Siempre sigue las instrucciones de almacenamiento en el empaque."
  },
  {
    question: "¿Es BARF ME Up! adecuado para cachorros?",
    answer: "Sí, BARF ME Up! puede darse a cachorros mayores de 12 semanas. Para cachorros jóvenes, recomendamos dividir la porción diaria en 3-4 comidas pequeñas para apoyar su sistema digestivo en desarrollo."
  },
  {
    question: "¿Cómo preparo BARF ME Up! para servir?",
    answer: "Simplemente descongela el paquete en el refrigerador durante la noche. Cuando esté listo para servir, calienta ligeramente la comida para llevarla a temperatura ambiente (no caliente). Esto mejora el aroma y la palatabilidad para tu perro."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  
  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Preguntas Frecuentes</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            ¿Tienes preguntas sobre BARF ME Up! o la alimentación cruda? Encuentra respuestas a preguntas comunes a continuación.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left p-5 flex justify-between items-center rounded-lg ${
                  openIndex === index 
                    ? 'bg-emerald-50 shadow-md' 
                    : 'bg-gray-50 hover:bg-gray-100'
                } transition-all duration-300`}
              >
                <span className="font-semibold text-lg text-gray-800">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-emerald-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-600" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 bg-white border border-t-0 border-gray-200 rounded-b-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            ¿No encuentras tu pregunta aquí?
          </p>
          <a href="#contact" className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-300">
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
};