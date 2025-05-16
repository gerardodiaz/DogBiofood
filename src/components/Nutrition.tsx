import React, { useState } from 'react';
import { Dog } from 'lucide-react';

const nutritionData = {
  regular: {
    servingSize: "Paquete de 600g",
    calories: 850,
    protein: 45,
    fat: 25,
    carbs: 15,
    fiber: 5,
    moisture: 68,
    vitamins: [
      { name: "Vitamina A", amount: "10,000 UI" },
      { name: "Vitamina D", amount: "800 UI" },
      { name: "Vitamina E", amount: "100 UI" },
      { name: "Vitamina B12", amount: "50 mcg" },
    ],
    minerals: [
      { name: "Calcio", amount: "1,000 mg" },
      { name: "Fósforo", amount: "800 mg" },
      { name: "Hierro", amount: "18 mg" },
      { name: "Zinc", amount: "15 mg" },
    ]
  },
  small: {
    servingSize: "Paquete de 300g",
    calories: 425,
    protein: 22.5,
    fat: 12.5,
    carbs: 7.5,
    fiber: 2.5,
    moisture: 34,
    vitamins: [
      { name: "Vitamina A", amount: "5,000 UI" },
      { name: "Vitamina D", amount: "400 UI" },
      { name: "Vitamina E", amount: "50 UI" },
      { name: "Vitamina B12", amount: "25 mcg" },
    ],
    minerals: [
      { name: "Calcio", amount: "500 mg" },
      { name: "Fósforo", amount: "400 mg" },
      { name: "Hierro", amount: "9 mg" },
      { name: "Zinc", amount: "7.5 mg" },
    ]
  }
};

export const Nutrition = () => {
  const [activeTab, setActiveTab] = useState('regular');
  
  return (
    <section id="nutrition" className="py-16 md:py-24 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Información Nutricional</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            BARF ME Up! proporciona nutrición completa en cada porción. Compara nuestros paquetes para encontrar el ajuste perfecto para tu perro.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto mb-16">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('regular')}
              className={`flex-1 py-4 px-4 text-center font-medium text-lg ${
                activeTab === 'regular' 
                  ? 'bg-emerald-500 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Tamaño Regular (600g)
            </button>
            <button
              onClick={() => setActiveTab('small')}
              className={`flex-1 py-4 px-4 text-center font-medium text-lg ${
                activeTab === 'small' 
                  ? 'bg-emerald-500 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Tamaño Pequeño (300g)
            </button>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Información Nutricional
              </h3>
              <div className="flex items-center gap-2">
                <Dog className="h-6 w-6 text-emerald-600" />
                <span className="text-emerald-600 font-medium">{activeTab === 'regular' ? 'Para perros grandes' : 'Para perros pequeños'}</span>
              </div>
            </div>
            
            <div className="border-b border-gray-200 pb-2 mb-4">
              <p className="text-gray-600">Tamaño de la Porción: {nutritionData[activeTab].servingSize}</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4 mb-4">
              <div className="flex justify-between items-center mb-1">
                <p className="font-bold text-gray-800">Calorías</p>
                <p className="font-bold text-gray-800">{nutritionData[activeTab].calories}</p>
              </div>
            </div>

            <div className="border-b border-gray-200 pb-4 mb-4 space-y-3">
              {[
                { name: "Proteína", value: nutritionData[activeTab].protein, unit: "g" },
                { name: "Grasa", value: nutritionData[activeTab].fat, unit: "g" },
                { name: "Carbohidratos", value: nutritionData[activeTab].carbs, unit: "g" },
                { name: "Fibra", value: nutritionData[activeTab].fiber, unit: "g" },
                { name: "Humedad", value: nutritionData[activeTab].moisture, unit: "%" }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <p className="text-gray-700">{item.name}</p>
                  <p className="font-medium text-gray-800">{item.value}{item.unit}</p>
                </div>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-8">
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Vitaminas</h4>
                <div className="space-y-2">
                  {nutritionData[activeTab].vitamins.map((vitamin, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <p className="text-gray-600">{vitamin.name}</p>
                      <p className="text-gray-700">{vitamin.amount}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Minerales</h4>
                <div className="space-y-2">
                  {nutritionData[activeTab].minerals.map((mineral, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <p className="text-gray-600">{mineral.name}</p>
                      <p className="text-gray-700">{mineral.amount}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Guía de Alimentación</h3>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              <div className="p-6 text-center">
                <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <img 
                    src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Perro pequeño" 
                    className="w-10 h-10 object-cover rounded-full"
                  />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Perros Pequeños (2-7 kg)</h4>
                <p className="text-gray-600">1 paquete pequeño por día, dividido en 2 comidas</p>
              </div>
              
              <div className="p-6 text-center">
                <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <img 
                    src="https://images.pexels.com/photos/3196887/pexels-photo-3196887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Perro mediano" 
                    className="w-10 h-10 object-cover rounded-full"
                  />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Perros Medianos (7-16 kg)</h4>
                <p className="text-gray-600">1 paquete regular por día, dividido en 2 comidas</p>
              </div>
              
              <div className="p-6 text-center">
                <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <img 
                    src="https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Perro grande" 
                    className="w-10 h-10 object-cover rounded-full"
                  />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Perros Grandes (+16 kg)</h4>
                <p className="text-gray-600">1-2 paquetes regulares por día, divididos en 2 comidas</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 text-center">
              <p className="text-gray-600 text-sm">
                Ajusta las cantidades según la edad, nivel de actividad y metabolismo de tu perro. Realiza la transición gradualmente durante 7-10 días.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};