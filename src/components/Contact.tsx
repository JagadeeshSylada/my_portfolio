'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
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
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          >
            Get In Touch
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 mb-12"
          >
            I&apos;m always open to new opportunities and collaborations.
            Let&apos;s create something amazing together!
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-center items-center gap-6"
          >
            <motion.a
              href="mailto:jagadeeshsylada2004@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center space-x-3 bg-gradient-to-r from-blue-600/10 to-purple-600/10
                         hover:from-blue-600/20 hover:to-purple-600/20 border border-blue-500/20
                         hover:border-blue-500/50 rounded-lg px-6 py-4 transition-all duration-300"
            >
              <svg
                className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                jagadeeshsylada2004@gmail.com
              </span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/sylada-jagadeesh-8b3855367/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center space-x-3 bg-gradient-to-r from-blue-600/10 to-purple-600/10
                         hover:from-blue-600/20 hover:to-purple-600/20 border border-blue-500/20
                         hover:border-blue-500/50 rounded-lg px-6 py-4 transition-all duration-300"
            >
              <svg
                className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                LinkedIn Profile
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;