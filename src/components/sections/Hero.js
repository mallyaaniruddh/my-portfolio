import React from 'react';
import { personalData } from '../../data/personal';

const Hero = ({ scrollToSection }) => (
  <section id="home" className="min-h-screen flex items-center justify-center px-6 md:px-12">
    <div className="max-w-4xl">
      <p className="text-purple-400 text-lg mb-6">Hello, I'm</p>
      <h1 className="text-5xl md:text-7xl font-bold text-gray-100 mb-6">
        {personalData.name}.
      </h1>
      <h2 className="text-4xl md:text-6xl font-bold text-gray-400 mb-8">
        {personalData.title}
      </h2>
      <p className="text-gray-300 max-w-2xl text-lg leading-relaxed mb-12">
        I'm a <span className="text-purple-400">{personalData.subtitle}</span> {personalData.description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => scrollToSection('contact')}
          className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded transition-colors"
        >
          Connect on LinkedIn
        </button>
        <button
          onClick={() => scrollToSection('work')}
          className="border border-gray-600 text-gray-300 hover:border-purple-400 hover:text-purple-400 px-8 py-3 rounded transition-colors"
        >
          View Projects
        </button>
      </div>
    </div>
  </section>
);

export default Hero;