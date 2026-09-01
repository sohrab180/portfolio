/* eslint-disable @next/next/no-img-element */
// src/app/components/Navbar.js
"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ activeSection = 'home' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setIsMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md py-3 shadow-lg border-b border-gray-100' 
        : 'bg-white py-4 shadow-sm border-b border-gray-100'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="/img/logo.png" alt="Logo" className="h-13 w-22" />
          
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`} 
              className={`px-3 py-2 sm:px-4 sm:py-2.5 transition-all duration-300 font-medium relative rounded-lg
                ${activeSection === item.id 
                  ? 'text-sky-600 bg-sky-50' 
                  : 'text-gray-600 hover:text-sky-600 hover:bg-sky-50/60'}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span 
                  className="absolute bottom-0 left-1/4 w-1/2 h-0.5 bg-sky-500"
                  initial={{ width: 0 }}
                  animate={{ width: '50%' }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </a>
          ))}
          
          <a 
            href="/resume/Sohrab_Ali_Ansari.pdf" 
            target="_blank"
            className="ml-3 px-4 py-2.5 bg-sky-500 text-white font-bold rounded-lg hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 text-sm sm:text-base"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Resume
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-sky-50 transition-colors duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl py-5 px-6 border-t border-gray-100"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a 
                  key={item.id}
                  href={`#${item.id}`} 
                  className={`py-2.5 px-4 transition-colors duration-300 font-medium rounded-lg
                    ${activeSection === item.id 
                      ? 'text-sky-600 bg-sky-50' 
                      : 'text-gray-600 hover:text-sky-600 hover:bg-sky-50/60'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                >
                  {item.label}
                </a>
              ))}
              
              <a 
                href="/resume/Sohrab_Ali_Ansari.pdf"  
                target="_blank"
                className="mt-2 w-full px-4 py-2.5 bg-sky-500 text-white font-bold rounded-lg hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300 text-center flex items-center justify-center gap-2 text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}