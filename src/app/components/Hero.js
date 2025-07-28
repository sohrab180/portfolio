// src/app/components/Hero.js
"use client";
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Hero() {
  const codeContainerRef = useRef(null);
  
  // Create floating code snippets animation
  useEffect(() => {
    // Only run on larger screens
    if (window.innerWidth < 768) return;
    
    const createFloatingCode = () => {
      if (!codeContainerRef.current) return;
      
      // Clear existing elements
      codeContainerRef.current.innerHTML = '';
      
      // Create code snippets
      const codeSnippets = [
        'function createPortfolio() {',
        'const developer = new Developer();',
        'developer.skills = ["Angular", "Node.js", "MongoDB"];',
        'return developer.build();',
        '}',
        '<div className="container">',
        'const app = express();',
        'app.get("/api", (req, res) => {',
        'res.json({ success: true });',
        '});',
        'app.listen(3000);',
        'import React from "react";',
        'export default function Hero() {',
        'return <section>Content</section>',
        '}',
        'db.users.find({ experience: { $gt: 4 } })',
        'const server = http.createServer();',
        'server.on("request", handleRequest);'
      ];
      
      // Create floating code elements
      for (let i = 0; i < 15; i++) {
        const code = document.createElement('div');
        code.className = 'floating-code';
        code.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        code.style.left = `${Math.random() * 100}%`;
        code.style.top = `${Math.random() * 100}%`;
        code.style.opacity = Math.random() * 0.3 + 0.1;
        code.style.fontSize = `${Math.random() * 10 + 8}px`;
        code.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
        codeContainerRef.current.appendChild(code);
      }
    };
    
    createFloatingCode();
    
    // Make code snippets move slightly on mousemove
    const handleMouseMove = (e) => {
      const floatingCodes = document.querySelectorAll('.floating-code');
      if (!floatingCodes.length) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      floatingCodes.forEach((code) => {
        const moveX = (x - 0.5) * 15;
        const moveY = (y - 0.5) * 15;
        const currentScale = parseFloat(code.style.transform.split('scale(')[1] || 1);
        code.style.transform = `translate(${moveX}px, ${moveY}px) scale(${currentScale})`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-between pt-16 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950">
      {/* Developer code background */}
      <div 
        ref={codeContainerRef}
        className="code-background absolute inset-0 overflow-hidden z-0 hidden md:block"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-950/90 z-1" />
      
      {/* Decorative elements - only on larger screens */}
      <motion.div 
        className="absolute top-0 right-0 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-teal-500/10 rounded-full -mt-24 sm:-mt-30 md:-mt-36 -mr-24 sm:-mr-30 md:-mr-36 hidden md:block"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.2, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 left-0 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-amber-500/15 rounded-full -mb-20 sm:-mb-24 md:-mb-28 -ml-20 sm:-ml-24 md:-ml-28 hidden md:block"
        animate={{
          y: [0, -10, 0],
          x: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute top-1/3 left-1/4 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-teal-500/10 rounded-full hidden md:block"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Left Content */}
      <motion.div 
        className="flex-1 max-w-xl space-y-6 md:space-y-7 text-center md:text-left z-10 mt-12 md:mt-0"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-sm sm:text-base uppercase tracking-wider font-medium text-teal-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Senior Full Stack Developer
        </motion.h2>
        
        <motion.h1 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="block">Sohrab Ali Ansari</span>
          <motion.span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-teal-400"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundSize: '200% 200%',
              display: 'inline-block',
            }}
          >
            Crafting Digital Solutions
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-gray-300 text-base sm:text-lg max-w-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          MEAN Stack Specialist with 4+ years of experience building scalable web applications and enterprise solutions.
        </motion.p>
        
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
           {
  icon: <FaPhone className="text-amber-400" />,
  text: <a href="tel:+919199770786" className="hover:underline text-white">+91-9199770786</a>
},
{
    icon: <FaEnvelope className="text-amber-400" />,
    text: <a href="mailto:alisohrab0555@gmail.com" className="hover:underline text-white">alisohrab0555@gmail.com</a>
  },
            { icon: <FaMapMarkerAlt className="text-amber-400" />, text: 'Gurgaon, Haryana' },
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="flex items-center gap-2 bg-gray-800/40 p-2 sm:p-3 rounded-lg"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            >
              {item.icon}
              <span className="text-xs sm:text-sm">{item.text}</span>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-4 flex justify-center md:justify-start gap-3">
          <motion.a 
            href="https://www.linkedin.com/in/developersohrabali/" 
            target="_blank"
            className="p-2 sm:p-3 bg-gray-800 rounded-full hover:bg-amber-500 transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-lg sm:text-xl text-amber-400 hover:text-white" />
          </motion.a>
          <motion.a 
            href="https://github.com/sohrab180" 
            target="_blank"
            className="p-2 sm:p-3 bg-gray-800 rounded-full hover:bg-amber-500 transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="GitHub"
          >
            <FaGithub className="text-lg sm:text-xl text-amber-400 hover:text-white" />
          </motion.a>
        </div>
        
        <motion.div 
          className="flex flex-wrap gap-3 justify-center md:justify-start mt-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.a 
            href="#projects" 
            className="px-5 py-2 sm:px-6 sm:py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 text-sm sm:text-base"
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 8px 20px -5px rgba(245, 158, 11, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            View Projects
          </motion.a>
          
          <motion.a 
            href="#contact" 
            className="px-5 py-2 sm:px-6 sm:py-2.5 border-2 border-teal-500 text-teal-400 rounded-lg hover:bg-teal-500/10 transition-colors duration-300 flex items-center gap-2 text-sm sm:text-base"
            whileHover={{ 
              scale: 1.03,
              backgroundColor: "rgba(45, 212, 191, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Contact Me
          </motion.a>
        </motion.div>
        
        <motion.div 
          className="pt-6 flex flex-wrap gap-3 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {[
            { value: "4+", label: "Years Experience" },
            { value: "15+", label: "Projects" },
            { value: "95%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center bg-gray-800/40 p-3 rounded-xl border border-gray-700 backdrop-blur-sm min-w-[100px] sm:min-w-[110px]"
              whileHover={{ y: -3, backgroundColor: 'rgba(30, 41, 59, 0.5)' }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-xl sm:text-2xl font-bold text-amber-400">{stat.value}</div>
              <div className="text-gray-400 text-xs sm:text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Content - Profile Image */}
      <motion.div 
        className="flex-1 flex justify-center items-center z-10 mt-8 sm:mt-10 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
      >
        <div className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px]">
          <motion.div 
            className="w-full h-full rounded-full overflow-hidden shadow-xl border-4 border-amber-500/30 relative"
            whileHover={{ 
              rotate: [0, 2, -2, 0],
              transition: { duration: 0.5 }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-teal-500/20 rounded-full" />
            <img 
              src="/img/sohrab.png" 
              alt="Sohrab Ali Ansari"
              className="w-full h-full object-cover rounded-full relative z-10"
              onError={(e) => {
                e.target.onerror = null;
                e.target.parentNode.innerHTML = '<div class="w-full h-full bg-gray-200 border-2 border-dashed rounded-full flex items-center justify-center text-gray-500">Profile Image</div>';
              }}
            />
          </motion.div>
          
          <motion.div 
            className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-gray-900 p-2 sm:p-3 rounded-full shadow-lg border-2 border-amber-500"
            animate={{
              y: [0, -5, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center">
              <span className="text-gray-900 text-sm sm:text-base font-bold">4+</span>
            </div>
          </motion.div>
          
          {/* Animated tech badges floating around the profile - only on larger screens */}
          {["Angular","Next.js", "Node.js", "MongoDB"].map((tech, index) => (
            <motion.div
              key={index}
              className="absolute text-[10px] sm:text-xs font-bold px-2 py-1 bg-gray-800 text-amber-300 rounded-full border border-amber-500/50 backdrop-blur-sm hidden sm:block"
              style={{
                left: `${Math.cos(index * 1.57) * 75}px`,
                top: `${Math.sin(index * 1.57) * 75}px`,
              }}
              animate={{
                y: [0, -8, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3 + index,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2
              }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}