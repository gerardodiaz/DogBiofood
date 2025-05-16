import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { Ingredients } from './components/Ingredients';
import { Nutrition } from './components/Nutrition';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Ingredients />
        <Nutrition />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;