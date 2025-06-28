'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Profile = () => {
  return (
    <section className="py-20 bg-black" id="profile">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            About Me
          </h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8
                       border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Full-stack Web Developer and AI/ML practitioner skilled in React, Node.js, and Python. 
              Experienced in developing dynamic web apps and deploying machine learning models.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Proficient in TensorFlow, scikit-learn, and integrating AI into web platforms.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Driven by problem-solving, clean code, and building scalable digital solutions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;