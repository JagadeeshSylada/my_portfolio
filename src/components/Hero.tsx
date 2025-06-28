'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Array<{ width: number; height: number; left: string; top: string }>>([]);

  useEffect(() => {
    setMounted(true);
    const newParticles = Array(20).fill(null).map(() => ({
      width: Math.random() * 300 + 50,
      height: Math.random() * 300 + 50,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));
    setParticles(newParticles);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black to-gray-900 text-white py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-500/10 rounded-full"
            style={{
              width: particle.width,
              height: particle.height,
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 flex flex-col justify-center items-center h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              JAGADEESH SYLADA
            </h1>
            <h2 className="text-2xl md:text-4xl text-gray-300 mb-8 font-light">
              Full Stack Developer
            </h2>
          </motion.div>

          

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="space-x-4"
          >
            <a
              href="mailto:jagadeeshsylada2004@gmail.com"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-8 rounded-lg
                         hover:from-blue-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="inline-block bg-transparent border-2 border-blue-500 text-white font-bold py-3 px-8 rounded-lg
                         hover:bg-blue-500/10 transform hover:scale-105 transition-all duration-300"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;