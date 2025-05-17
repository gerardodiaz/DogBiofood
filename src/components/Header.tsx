import React, { useState, useEffect } from 'react';
import { Dog, ShoppingCart } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white py-2 shadow-md' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <Dog className="h-8 w-8 text-emerald-600" />
          <span className={`font-bold text-xl md:text-2xl transition-colors duration-300 ${
            isScrolled ? 'text-emerald-700' : 'text-white'
          }`}>
            BARF ME Up!
          </span>
        </a>
        <nav className="flex items-center">
          <ul className="hidden md:flex space-x-8 items-center">
            {[
              ['Productos', 'products']
            ].map(([label, id]) => (
              <li key={id}>
                <a 
                  href={`#${id}`} 
                  className={`font-medium hover:text-emerald-500 transition-colors duration-300 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a 
                href="#products" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-full transition-all duration-300 flex items-center gap-2"
              >
                <ShoppingCart className="h-4 w-4" />
                Ordenar por Whatsapp
              </a>
            </li>
          </ul>
          <button className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};
