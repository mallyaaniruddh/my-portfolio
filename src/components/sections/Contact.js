import React from 'react';
import { contactData } from '../../data/contact';

const Contact = () => (
  <section id="contact" className="py-20 px-6 md:px-12">
    <div className="max-w-3xl mx-auto text-center">
      <div className="flex items-center justify-center mb-8">
        <span className="text-purple-400 text-xl mr-4">04.</span>
        <h2 className="text-2xl text-purple-400">What's Next?</h2>
      </div>
      
      <h3 className="text-4xl md:text-6xl font-bold text-gray-100 mb-8">Get In Touch</h3>
      
      <p className="text-gray-300 max-w-lg mx-auto mb-8 leading-relaxed">
        {contactData.description}
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h4 className="text-xl font-bold mb-4 text-purple-400">What I'm Looking For</h4>
          <ul className="space-y-2 text-gray-300 text-left">
            {contactData.interests.map((interest, index) => (
              <li key={index} className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                {interest}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h4 className="text-xl font-bold mb-4 text-purple-400">Availability</h4>
          <ul className="space-y-2 text-gray-300 text-left">
            <li>• Full-time: {contactData.availability.fullTime}</li>
            <li>• Part-time: {contactData.availability.partTime}</li>
            <li>• Location: {contactData.availability.location}</li>
            <li>• Remote: {contactData.availability.remote}</li>
          </ul>
        </div>
      </div>
      
      <div className="space-y-4 max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-purple-400 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-purple-400 focus:outline-none"
        />
        <textarea
          placeholder="What challenge are we solving together?"
          rows="6"
          className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-purple-400 focus:outline-none resize-none"
        ></textarea>
      </div>
      
      <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded transition-colors">
        Send Message
      </button>
    </div>
  </section>
);

export default Contact;