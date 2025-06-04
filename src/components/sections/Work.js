import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projectsData } from '../../data/projects';

const FeaturedProject = ({ project }) => (
  <div className="bg-gray-800 rounded-lg p-8 mb-20">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-2">
        <span className="text-purple-400">✨</span>
        <h3 className="text-xl font-bold text-gray-100">Featured Project</h3>
      </div>
      <div className="text-gray-400 text-sm">Research</div>
    </div>
    
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
          <span className="text-gray-400 text-sm">Status: {project.lastCommit}</span>
          <a href={project.liveUrl} className="text-purple-400 hover:text-purple-300 text-sm">
            Research Preview
          </a>
        </div>
        
        <h4 className="text-2xl font-bold text-gray-100 mb-4">{project.title}</h4>
        <p className="text-gray-300 mb-6">{project.description}</p>
        
        <div className="bg-gray-700 p-4 rounded mb-6">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-purple-400">🤖</span>
            <span className="text-purple-400 text-sm font-medium">AI Research Insight</span>
          </div>
          <p className="text-gray-300 text-sm italic">{project.aiInsight}</p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a
            href={project.liveUrl}
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded transition-colors"
          >
            View Research →
          </a>
          <a
            href={project.githubUrl}
            className="border border-gray-600 text-gray-300 hover:border-purple-400 hover:text-purple-400 px-6 py-2 rounded transition-colors flex items-center"
          >
            <Github size={16} className="mr-2" />
            GitHub →
          </a>
        </div>
      </div>
      
      <div className="bg-gray-900 rounded-lg p-6">
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-400 text-sm">Research Interface</span>
        </div>
        <div className="text-center py-12">
          <h3 className="text-2xl font-bold text-green-400 mb-4">LLM Requirements</h3>
          <p className="text-gray-500">Converting user feedback to structured requirements...</p>
        </div>
      </div>
    </div>
  </div>
);

const ProjectCard = ({ project }) => (
  <div className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
    <div className="flex items-center justify-between mb-4">
      <Github className="text-gray-400" size={24} />
      <div className="flex space-x-3">
        <a href={project.githubUrl} className="text-gray-400 hover:text-purple-400">
          <Github size={20} />
        </a>
        <a href={project.liveUrl} className="text-gray-400 hover:text-purple-400">
          <ExternalLink size={20} />
        </a>
      </div>
    </div>
    
    <h3 className="text-xl font-bold text-gray-100 mb-3">{project.title}</h3>
    <p className="text-gray-300 text-sm mb-6 leading-relaxed">{project.description}</p>
    
    <div className="flex flex-wrap gap-2">
      {project.technologies.map((tech, index) => (
        <span key={index} className="text-gray-400 text-xs">
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const Work = () => (
  <section id="work" className="py-20 px-6 md:px-12">
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center mb-12">
        <span className="text-purple-400 text-xl mr-4">03.</span>
        <h2 className="text-3xl font-bold text-gray-100">Some Things I've Built</h2>
        <div className="flex-1 h-px bg-gray-700 ml-8"></div>
      </div>
      
      {/* Featured Project */}
      <FeaturedProject project={projectsData.featured} />
      
      {/* Project Grid */}
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-gray-100">Other Notable Projects</h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.all.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default Work;