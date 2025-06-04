import React from 'react';
import { personalData } from '../../data/personal';

const ContactInfo = () => (
  <div className="fixed right-6 bottom-0 z-40 hidden lg:block">
    <div className="flex flex-col items-center">
      <div className="writing-mode-vertical text-gray-400 mb-6" style={{writingMode: 'vertical-rl'}}>
        {personalData.social.email}
      </div>
      <div className="w-px h-24 bg-gray-600"></div>
    </div>
  </div>
);

export default ContactInfo;