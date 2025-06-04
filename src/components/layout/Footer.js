import React from 'react';
import { personalData } from '../../data/personal';

const Footer = () => (
  <footer className="py-8 px-6 md:px-12 text-center">
    <div className="text-gray-400 text-sm">
      <p>&copy; {new Date().getFullYear()} {personalData.name}. Building the future of human-computer collaboration.</p>
    </div>
  </footer>
);

export default Footer;