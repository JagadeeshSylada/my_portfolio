'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      institution: 'Sri Chaitanya Junior College',
      degree: 'Board of Intermediate',
      location: 'Vizianagaram',
      period: '2020-2022'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white" id="education">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
        >
          Education
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 mb-12"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
              <div className="absolute left-[-5px] top-0 w-3 h-3 rounded-full bg-blue-500" />
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-700/50">
                <h3 className="text-2xl font-bold mb-2">{edu.institution}</h3>
                <p className="text-blue-400 mb-2">{edu.degree}</p>
                <div className="flex items-center text-gray-400">
                  <span>{edu.location}</span>
                  <span className="mx-2">•</span>
                  <span>{edu.period}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;