import React, { useState } from 'react';
import { experienceData } from '../../data/experience';

const Experience = () => {
  const [activeJob, setActiveJob] = useState(0);

  return (
    <section id="experience" className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-12">
          <span className="text-purple-400 text-xl mr-4">02.</span>
          <h2 className="text-3xl font-bold text-gray-100">Where I've Worked</h2>
          <div className="flex-1 h-px bg-gray-700 ml-8"></div>
        </div>
        
        <div className="flex flex-col md:flex-row">
          {/* Company tabs */}
          <div className="flex md:flex-col mb-8 md:mb-0 md:mr-8">
            {experienceData.map((job, index) => (
              <button
                key={index}
                onClick={() => setActiveJob(index)}
                className={`text-left p-4 border-l-2 md:border-l-2 md:border-b-0 border-b-2 transition-colors ${
                  activeJob === index
                    ? 'border-purple-400 text-purple-400 bg-purple-400 bg-opacity-10'
                    : 'border-gray-600 text-gray-400 hover:bg-gray-800'
                }`}
              >
                <div className="font-medium">{job.company}</div>
                <div className="text-sm opacity-75">{job.period}</div>
              </button>
            ))}
          </div>
          
          {/* Job details */}
          <div className="flex-1">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gray-100">
                {experienceData[activeJob].title}{' '}
                <span className="text-purple-400">@ {experienceData[activeJob].company}</span>
              </h3>
              <p className="text-gray-400 mb-2">{experienceData[activeJob].period}</p>
              <p className="text-gray-400 text-sm">{experienceData[activeJob].location}</p>
            </div>
            
            <ul className="space-y-4 mb-6">
              {experienceData[activeJob].description.map((item, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <span className="text-purple-400 mr-3 mt-2">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2">
              {experienceData[activeJob].technologies.map((tech, index) => (
                <span key={index} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;