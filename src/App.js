import React, { useState, useEffect } from 'react';

// Layout Components
import Header from './components/layout/Header';
import SocialSidebar from './components/layout/SocialSidebar';
import ContactInfo from './components/layout/ContactInfo';
import Footer from './components/layout/Footer';

// Section Components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Work from './components/sections/Work';
import Contact from './components/sections/Contact';

// Navigation utility
import { scrollToSection } from './utils/navigation';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleScrollToSection = (id) => {
    scrollToSection(id);
    setActiveSection(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'work', 'contact'];
      let currentActive = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActive = section;
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header activeSection={activeSection} scrollToSection={handleScrollToSection} />
      <SocialSidebar />
      <ContactInfo />
      
      <main>
        <Hero scrollToSection={handleScrollToSection} />
        <About />
        <Experience />
        <Work />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;