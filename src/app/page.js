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
import Chatbot from '@/app/components/Chatbot';

const SECTION_BASE = 'py-20 px-4 sm:px-6 md:px-8 border-t border-sky-400/10';
const SECTION_LIGHT = `${SECTION_BASE} bg-[#102a52]`;
const SECTION_DARK = `${SECTION_BASE} bg-[#0b1e3d]`;

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
    <div className="min-h-screen bg-[#0b1e3d] text-slate-300">
      <Navbar activeSection={activeSection} />
      <main>
        <section
          id="home"
          ref={(el) => registerSection('home', el)}
        >
          <Hero />
        </section>

        {/* Sections alternate between two navy tones (with a hairline sky
            divider) so each one reads as a distinct band rather than one
            continuous background. */}
        <section
          id="about"
          ref={(el) => registerSection('about', el)}
          className={SECTION_LIGHT}
        >
          <About />
        </section>

        <section
          id="skills"
          ref={(el) => registerSection('skills', el)}
          className={SECTION_DARK}
        >
          <Skills />
        </section>

        <section
          id="experience"
          ref={(el) => registerSection('experience', el)}
          className={SECTION_LIGHT}
        >
          <Experience />
        </section>

        <section
          id="projects"
          ref={(el) => registerSection('projects', el)}
          className={SECTION_DARK}
        >
          <Projects />
        </section>

        <section
          id="contact"
          ref={(el) => registerSection('contact', el)}
          className={SECTION_LIGHT}
        >
          <Contact />
        </section>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}