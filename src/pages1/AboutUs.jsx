import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/1.jpeg'; // replace with your image path

export const AboutUs = () => {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-4xl backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Profile Image */}
        <div className="md:w-1/3 flex items-center justify-center p-8 bg-gradient-to-tr from-purple-400 to-indigo-600">
          <img
            src={profilePic}
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-white shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="md:w-2/3 p-8 bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Hey, I'm Your Man !
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            I'm a passionate developer and designer with a love for creating
            beautiful, user-friendly experiences on the web. With expertise in
            React, Tailwind CSS, and modern JavaScript, I build applications
            that are as functional as they are visually engaging.
          </p>

          {/* Skills */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Skills & Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express', 'MongoDB'].map(skill => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Get in Touch
            </h2>
            <p className="text-gray-700">
              Feel free to reach out via email or connect on LinkedIn!
            </p>
            <a
              href="mailto:youremail@example.com"
              className="inline-block mt-4 px-6 py-2 bg-purple-600 text-white rounded-xl shadow-lg hover:bg-purple-700 transition-colors duration-200"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
