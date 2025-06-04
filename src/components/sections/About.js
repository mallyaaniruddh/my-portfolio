import React from 'react';
import { aboutData } from '../../data/about';

const About = () => (
  <section id="about" className="py-20 px-6 md:px-12">
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center mb-12">
        <span className="text-purple-400 text-xl mr-4">01.</span>
        <h2 className="text-3xl font-bold text-gray-100">About Me</h2>
        <div className="flex-1 h-px bg-gray-700 ml-8"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <div className="text-gray-300 leading-relaxed space-y-4 mb-8">
            {aboutData.description.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          <div className="mb-8">
            <p className="text-gray-300 mb-4">Education:</p>
            <div className="space-y-2">
              {aboutData.education.map((edu, index) => (
                <div key={index} className="flex items-center text-gray-400 text-sm">
                  <span className="text-purple-400 mr-3">▹</span>
                  {edu}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-8">
            <p className="text-gray-300 mb-4">Technologies I work with:</p>
            <div className="grid grid-cols-2 gap-2">
              {aboutData.technologies.map((tech, index) => (
                <div key={index} className="flex items-center text-gray-400 text-sm">
                  <span className="text-purple-400 mr-3">▹</span>
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-gray-300 mb-4">Current research focus:</p>
            <div className="flex flex-wrap gap-2">
              {aboutData.currentFocus.map((focus, index) => (
                <span key={index} className="bg-purple-500 bg-opacity-20 text-purple-300 text-sm px-3 py-1 rounded-full">
                  🔬 {focus}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="relative">
            <img
              src={aboutData.image}
              alt="Profile"
              className="w-80 h-96 object-cover rounded filter grayscale hover:grayscale-0 transition-all duration-300"
            />
            <div className="absolute inset-0 border-2 border-purple-400 rounded translate-x-4 translate-y-4 -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;