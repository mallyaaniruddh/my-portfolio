import React from 'react';
import { personalData } from '../../data/personal';

const NavItem = ({ number, text, sectionId, activeSection, onClick }) => {
  const isActive = activeSection === sectionId;
  return (
    <button
      onClick={() => onClick(sectionId)}
      className={`text-sm transition-colors ${
        isActive ? 'text-purple-400' : 'text-gray-300 hover:text-purple-400'
      }`}
    >
      <span className="text-purple-400 mr-1">{number}.</span>
      {text}
    </button>
  );
};

const Header = ({ activeSection, scrollToSection }) => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-95 backdrop-blur-sm py-6 px-6 md:px-12">
    <div className="flex justify-between items-center max-w-6xl mx-auto">
      <div className="text-2xl font-bold text-purple-400">AM</div>
      <nav className="hidden md:flex space-x-8">
        <NavItem number="01" text="About" sectionId="about" activeSection={activeSection} onClick={scrollToSection} />
        <NavItem number="02" text="Experience" sectionId="experience" activeSection={activeSection} onClick={scrollToSection} />
        <NavItem number="03" text="Work" sectionId="work" activeSection={activeSection} onClick={scrollToSection} />
        <NavItem number="04" text="Contact" sectionId="contact" activeSection={activeSection} onClick={scrollToSection} />
      </nav>
      <a 
        href={personalData.resumeUrl}
        className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900 px-4 py-2 rounded transition-colors"
      >
        Resume
      </a>
    </div>
  </header>
);

export default Header;