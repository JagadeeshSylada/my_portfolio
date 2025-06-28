'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      category: 'Programming Languages',
      items: ['Python', 'Java', 'JavaScript/TypeScript'],
      icon: '💻'
    },
    {
      category: 'Web Development',
      items: ['React.js', 'Node.js', 'Express.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
      icon: '🌐'
    },
    {
      category: 'Databases',
      items: ['MySQL', 'MongoDB'],
      icon: '🗄️'
    },
    {
      category: 'Data Science & AI',
      items: ['NumPy', 'Pandas', 'TensorFlow', 'scikit-learn', 'Machine Learning'],
      icon: '🤖'
    },
    {
      category: 'Tools & Technologies',
      items: ['Git', 'RESTful APIs', 'Agile Methodology', 'VS Code'],
      icon: '🛠️'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white" id="skills">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
        >
          Technical Skills
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {skills.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50
                         hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-2">{skillGroup.icon}</span>
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  {skillGroup.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-full text-sm
                               border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;