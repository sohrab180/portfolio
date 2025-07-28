// src/app/page.js
"use client";
import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Skills from '@/app/components/Skills';
import Experience from '@/app/components/Experience';
import Projects from '@/app/components/Projects';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const sectionsRef = useRef({});
  const observerRef = useRef(null);

  // Set up intersection observer for active section
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.25
    });

    // Observe all sections
    Object.values(sectionsRef.current).forEach(section => {
      if (section) observerRef.current.observe(section);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Register section elements
  const registerSection = (id, element) => {
    sectionsRef.current[id] = element;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      <Navbar activeSection={activeSection} />
      <main>
        <section 
          id="home" 
          ref={(el) => registerSection('home', el)}
        >
          <Hero />
        </section>
        
        <section 
          id="about" 
          ref={(el) => registerSection('about', el)}
          className="py-16 px-4 sm:px-6 md:px-8"
        >
          <About />
        </section>
        
        <section 
          id="skills" 
          ref={(el) => registerSection('skills', el)}
          className="py-16 px-4 sm:px-6 md:px-8 bg-gray-900/50"
        >
          <Skills />
        </section>
        
      <section 
  id="experience" 
  ref={(el) => registerSection('experience', el)}
  className="min-h-screen py-16 px-4 sm:px-6 md:px-8" // Added min-h-screen
>
  <Experience />
</section>
        
        <section 
          id="projects" 
          ref={(el) => registerSection('projects', el)}
          className="py-16 px-4 sm:px-6 md:px-8 bg-gray-900/50"
        >
          <Projects />
        </section>
        
        <section 
          id="contact" 
          ref={(el) => registerSection('contact', el)}
          className="py-16 px-4 sm:px-6 md:px-8"
        >
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}