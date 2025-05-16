import React, { useState } from 'react';

const ingredients = [
  {
    type: "Proteínas",
    items: [
      { name: "Res", image: "https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg" },
      { name: "Pollo", image: "https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg" },
      { name: "Salmón", image: "https://images.pexels.com/photos/3296392/pexels-photo-3296392.jpeg" },
      { name: "Tuétano", image: "https://images.pexels.com/photos/7347301/pexels-photo-7347301.jpeg" },
    ]
  },
  {
    type: "Vegetales",
    items: [
      { name: "Chícharos", image: "https://images.pexels.com/photos/255469/pexels-photo-255469.jpeg" },
      { name: "Zanahorias", image: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg" },
      { name: "Betabel", image: "https://images.pexels.com/photos/1618885/pexels-photo-1618885.jpeg" },
      { name: "Brócoli", image: "https://images.pexels.com/photos/47347/broccoli-vegetable-food-healthy-47347.jpeg" },
    ]
  },
  {
    type: "Frutas y Superalimentos",
    items: [
      { name: "Manzanas", image: "https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg" },
      { name: "Camote", image: "https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg" },
      { name: "Espirulina", image: "https://images.pexels.com/photos/6060852/pexels-photo-6060852.jpeg" },
    ]
  }
];

export const Ingredients = () => {
  const [selectedType, setSelectedType] = useState("Proteínas");
  
  return (
    <section id="ingredients" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ingredientes Premium</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Seleccionamos cuidadosamente cada ingrediente por sus beneficios nutricionales y calidad. Nuestra fórmula BARF contiene solo ingredientes reales y reconocibles.
          </p>
        </div>
        
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {ingredients.map(category => (
            <button
              key={category.type}
              onClick={() => setSelectedType(category.type)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedType === category.type
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.type}
            </button>
          ))}
        </div>
        
        {ingredients.map(category => (
          <div
            key={category.type}
            className={`transition-opacity duration-500 ${
              selectedType === category.type ? 'opacity-100' : 'hidden opacity-0'
            }`}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.items.map((item, index) => (
                <div
                  key={item.name}
                  className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                  style={{
                    opacity: 0,
                    animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`,
                  }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">¿Por Qué Estos Ingredientes?</h3>
          <p className="text-gray-600 mb-4">
            Cada ingrediente en nuestra fórmula BARF ME Up! está cuidadosamente seleccionado para proporcionar una nutrición balanceada que imita lo que los perros comerían naturalmente en la naturaleza. Combinamos proteínas premium para aminoácidos esenciales, vegetales para fibra y vitaminas, y superalimentos para apoyar la salud general.
          </p>
          <p className="text-gray-600">
            Nuestra mezcla está específicamente formulada para promover:
          </p>
          <ul className="grid md:grid-cols-2 gap-2 mt-4">
            {[
              "Pelaje y piel saludables",
              "Sistema inmune fuerte",
              "Salud digestiva óptima",
              "Control de peso saludable",
              "Mayores niveles de energía",
              "Mejor salud dental",
              "Salud de articulaciones y huesos",
              "Reducción de alergias"
            ].map((benefit, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="h-2 w-2 bg-emerald-500 rounded-full"></span>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};