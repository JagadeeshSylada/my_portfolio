'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section className="py-20 bg-gray-900 text-white" id="experience">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Professional Experience
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-gray-800 rounded-lg p-6 mb-8"
        >
          <h3 className="text-2xl font-bold mb-2">Full Stack Developer</h3>
          <p className="text-gray-400 mb-4">Expected Graduation: May 2025</p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Assisted in developing and maintaining responsive web applications using HTML, CSS, JavaScript, React, and Node.js.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Worked on RESTful APIs, database integration with MongoDB/MySQL, and implemented authentication features.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Collaborated with senior developers in an Agile environment to debug, test, and deploy scalable web solutions.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Gained hands-on experience in version control (Git), API consumption, and UI/UX optimization.</span>
            </li>
          </ul>
        </motion.div>


      </div>
    </section>
  );
};

export default Experience;