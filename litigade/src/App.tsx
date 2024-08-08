// src/App.tsx
import React from 'react';
import HeroSection from './components/HeroSection';
import Features6 from './components/features/Features6';
import Features11 from './components/features/Features11';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Consultation from './components/Consultation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <Features6 />
        <Features11 />
        <Testimonials />
        <Team />
        <Contact />
        <Consultation />
        <Footer />
      </main>
    </div>
  );
}

export default App;
