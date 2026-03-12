import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import ShowreelSection from './sections/ShowreelSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className="fixed inset-0 noise-overlay z-50"></div>
      <Navbar onMenuToggle={setIsMobileMenuOpen} />
      <main className={`transition-all duration-700 ${isMobileMenuOpen ? 'blur-md grayscale-[0.2] scale-[0.98]' : 'blur-0 grayscale-0 scale-100'}`}>
        <HeroSection />
        <ProjectsSection />
        <ShowreelSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
