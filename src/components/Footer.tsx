import React from 'react';
import { Dog, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Dog className="h-8 w-8 text-emerald-400" />
              <span className="font-bold text-xl">¡BARF ME Up!</span>
            </div>
            <p className="text-gray-400 mb-4">
              Proporcionando la nutrición más saludable y natural para tus amigos peludos desde 2020.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {[
                { name: "Nosotros", href: "#about" },
                { name: "Productos", href: "#products" },
                { name: "Ingredientes", href: "#ingredients" },
                { name: "Nutrición", href: "#nutrition" },
                { name: "Preguntas", href: "#faq" }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contáctanos</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-400">info@barfmeup.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">Calle Mascota Feliz 123<br />Ciudad Perro, CP 12345</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Boletín Informativo</h3>
            <p className="text-gray-400 mb-4">
              Suscríbete a nuestro boletín para consejos de nutrición y ofertas especiales.
            </p>
            <form className="mb-4">
              <div className="flex mb-2">
                <input 
                  type="email" 
                  placeholder="Tu email" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg flex-grow focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button 
                  type="submit" 
                  className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-r-lg transition-colors duration-300"
                >
                  Suscribirse
                </button>
              </div>
              <p className="text-xs text-gray-500">
                Respetamos tu privacidad. Cancela en cualquier momento.
              </p>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ¡BARF ME Up! Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};