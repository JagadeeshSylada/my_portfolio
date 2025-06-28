'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Blog Platform',
      techStack: 'React, Node.js, Express.js, MongoDB',
      description: [
        'Designed and developed a full-stack blog application with user authentication, post creation, editing, and deletion.',
        'Implemented a rich-text editor, comment system, and secure login using JWT or session-based authentication.',
        'Integrated MongoDB for dynamic content storage and RESTful APIs for seamless frontend-backend communication.'
      ],
      icon: '📝'
    },
    {
      title: 'Fake News Detection System',
      techStack: 'Python, scikit-learn, Pandas, NLTK/spaCy, Flask',
      description: [
        'Developed a machine learning model to classify news articles as fake or real using natural language processing (NLP) techniques.',
        'Preprocessed text data using tokenization, stopword removal, and TF-IDF vectorization for feature extraction.',
        'Trained and evaluated multiple classifiers (Logistic Regression, Naive Bayes, SVM) to achieve high accuracy and F1-score.'
      ],
      icon: '🔍'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-20 bg-black text-white" id="projects">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-8
                         border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300
                         transform hover:scale-105 group"
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </span>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  {project.title}
                </h3>
              </div>
              
              <div className="mb-6">
                <div className="inline-block bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-full px-4 py-2
                              border border-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300">
                  <p className="text-sm text-gray-300">{project.techStack}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {project.description.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-start text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                  >
                    <span className="mr-2 text-blue-400 group-hover:text-blue-300">▹</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;