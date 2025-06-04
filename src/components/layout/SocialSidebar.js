import React from 'react';
import { Github, Linkedin, Instagram, Globe } from 'lucide-react';
import { personalData } from '../../data/personal';

const SocialSidebar = () => (
  <div className="fixed left-6 bottom-0 z-40 hidden lg:block">
    <div className="flex flex-col items-center space-y-6">
      <a href={personalData.social.github} className="text-gray-400 hover:text-purple-400 transition-colors">
        <Github size={20} />
      </a>
      <a href={personalData.social.linkedin} className="text-gray-400 hover:text-purple-400 transition-colors">
        <Linkedin size={20} />
      </a>
      <a href={personalData.social.instagram} className="text-gray-400 hover:text-purple-400 transition-colors">
        <Instagram size={20} />
      </a>
      <a href={personalData.social.website} className="text-gray-400 hover:text-purple-400 transition-colors">
        <Globe size={20} />
      </a>
      <div className="w-px h-24 bg-gray-600"></div>
    </div>
  </div>
);

export default SocialSidebar;