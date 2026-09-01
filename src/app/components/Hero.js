// src/app/components/Hero.js
"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

// wa.me needs the number in full international form, digits only.
const WHATSAPP_URL =
  'https://wa.me/919199770786?text=' +
  encodeURIComponent("Hi Sohrab, I found your portfolio and I'd like to connect.");

const TECH_BADGES = ['Angular', 'Next.js', 'Node.js', 'MongoDB', 'AI Automation'];

const ROLES = [
  'Senior Full Stack Developer',
  'MEAN Stack Specialist',
  'AI Automation Engineer',
  'Next.js & Angular Developer',
];

const STATS = [
  { value: '5.6+', label: 'Years Experience' },
  { value: '4.5+', label: 'Years Full Stack' },
  { value: '15+', label: 'Projects' },
  { value: '95%', label: 'Client Satisfaction' },
];

export default function Hero() {
  const codeContainerRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);

  // Cycle the role line so the hero states more than one specialisation
  // without needing four lines of static text.
  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 2600);
    return () => clearInterval(id);
  }, []);

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
        'db.users.find({ experience: { $gt: 5 } })',
        'const server = http.createServer();',
        'server.on("request", handleRequest);',
      ];

      // Create floating code elements. Sizes are deliberately large — this is
      // meant to read as a code "texture" behind the content, not fine print.
      for (let i = 0; i < 18; i++) {
        const code = document.createElement('div');
        code.className = 'floating-code';
        code.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        code.style.left = `${Math.random() * 100}%`;
        code.style.top = `${Math.random() * 100}%`;
        code.style.opacity = Math.random() * 0.16 + 0.07;
        code.style.fontSize = `${Math.random() * 16 + 15}px`;
        code.style.transform = `scale(${Math.random() * 0.4 + 0.8})`;
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
        const moveX = (x - 0.5) * 40;
        const moveY = (y - 0.5) * 40;
        const currentScale = parseFloat(code.style.transform.split('scale(')[1] || 1);
        code.style.transform = `translate(${moveX}px, ${moveY}px) scale(${currentScale})`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0b1e3d]">
      {/* Deep navy base + directional glow */}
      <div className="absolute inset-0 bg-[linear-gradient(160deg,#102a52_0%,#0b1e3d_45%,#071426_100%)]" />

      {/* Soft radial highlights that keep the navy from reading flat */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_15%_20%,rgba(34, 211, 238,0.10),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(45%_45%_at_85%_75%,rgba(103, 232, 249,0.10),transparent_70%)]" />

      {/* Blueprint grid — fades out toward the edges (see globals.css) */}
      <div className="hero-grid absolute inset-0 hidden md:block" />

      {/* Developer code background */}
      <div
        ref={codeContainerRef}
        className="code-background absolute inset-0 overflow-hidden z-0 hidden md:block"
      />

      {/* Scrim: keeps the headline/paragraph readable over the code snippets
          while leaving them visible on the right, behind the portrait. */}
      <div className="absolute inset-0 hidden md:block bg-[linear-gradient(90deg,#0b1e3d_0%,rgba(11,30,61,0.92)_30%,rgba(11,30,61,0.55)_55%,transparent_80%)]" />

      {/* No bottom fade here on purpose: the hero ends on its darkest navy and
          the About band starts on the lighter one, so the change of section
          reads clearly instead of blending away. */}

      {/* Floating glow orbs — large, slow-moving washes of colour that give the
          navy some depth and motion. Sized in viewport units so they scale up
          with the screen instead of staying small on wide monitors. */}
      <motion.div
        className="absolute top-0 right-0 w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full bg-cyan-500/15 blur-[110px] -mt-[18vw] -mr-[18vw] hidden md:block"
        animate={{ scale: [1, 1.15, 1], opacity: [0.55, 0.9, 0.55] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[60vw] h-[60vw] max-w-[780px] max-h-[780px] rounded-full bg-cyan-400/12 blur-[110px] -mb-[20vw] -ml-[16vw] hidden md:block"
        animate={{ y: [0, -40, 0], x: [0, -18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 left-1/3 w-[45vw] h-[45vw] max-w-[620px] max-h-[620px] rounded-full bg-emerald-500/10 blur-[130px] hidden lg:block"
        animate={{ x: [0, 60, 0], y: [0, -30, 0], opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 w-full container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="order-2 md:order-1 text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Availability pill — green, so "open to work" reads instantly
                and matches the same status badge in the footer. */}
            <motion.div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-medium"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.5 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to new opportunities
            </motion.div>

            <motion.h2
              className="mt-5 flex h-6 items-center justify-center md:justify-start text-sm sm:text-base uppercase tracking-[0.2em] font-semibold text-cyan-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="whitespace-nowrap"
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.h2>

            <motion.h1
              className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.12] tracking-tight"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="block">Sohrab Ali Ansari</span>
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
                style={{ backgroundSize: '200% 200%', display: 'inline-block' }}
              >
                Crafting Digital Solutions
              </motion.span>
            </motion.h1>

            <motion.p
              className="mt-5 text-slate-300 text-base sm:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              MEAN Stack Specialist with 5.6+ years of experience building scalable web applications,
              enterprise solutions and AI-powered features.
            </motion.p>

            {/* Contact chips */}
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                {
                  icon: <FaPhone className="text-cyan-400 shrink-0" />,
                  text: (
                    <a href="tel:+919199770786" className="cursor-pointer hover:text-cyan-300 transition-colors">
                      +91-9199770786
                    </a>
                  ),
                },
                {
                  icon: <FaEnvelope className="text-cyan-400 shrink-0" />,
                  text: (
                    <a
                      href="mailto:sohrabali180@gmail.com"
                      className="cursor-pointer hover:text-cyan-300 transition-colors break-all"
                    >
                      sohrabali180@gmail.com
                    </a>
                  ),
                },
                {
                  icon: <FaWhatsapp className="text-emerald-400 shrink-0" />,
                  text: (
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer hover:text-emerald-300 transition-colors"
                    >
                      WhatsApp
                    </a>
                  ),
                },
                {
                  icon: <FaMapMarkerAlt className="text-cyan-400 shrink-0" />,
                  text: <span>Gurgaon, Haryana</span>,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2.5 rounded-xl border border-cyan-400/15 bg-[#12305f]/50 px-3 py-2.5 text-xs text-slate-200 backdrop-blur-sm transition-colors hover:border-cyan-400/35 hover:bg-[#16386e]/60"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  {item.icon}
                  <span className="min-w-0">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs + socials */}
            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3 justify-center md:justify-start"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/20 flex items-center gap-2 text-sm sm:text-base"
                whileHover={{ scale: 1.03, boxShadow: '0 12px 28px -8px rgba(34, 211, 238,0.45)' }}
                whileTap={{ scale: 0.96 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                View Projects
              </motion.a>

              <motion.a
                href="#contact"
                className="px-6 py-3 border border-cyan-400/50 text-cyan-300 rounded-xl flex items-center gap-2 text-sm sm:text-base transition-colors hover:bg-cyan-400/10 hover:border-cyan-400"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Contact Me
              </motion.a>

              <div className="flex items-center gap-2 md:ml-2">
                <motion.a
                  href="https://www.linkedin.com/in/sohrabalitech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-cyan-400/15 bg-[#12305f]/50 text-cyan-400 transition-colors hover:bg-cyan-400 hover:text-[#0b1e3d]"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-lg" />
                </motion.a>
                <motion.a
                  href="https://github.com/sohrab180"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-cyan-400/15 bg-[#12305f]/50 text-cyan-400 transition-colors hover:bg-cyan-400 hover:text-[#0b1e3d]"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="GitHub"
                >
                  <FaGithub className="text-lg" />
                </motion.a>
                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer p-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 transition-colors hover:bg-emerald-400/20"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Message on WhatsApp"
                >
                  <FaWhatsapp className="text-lg" />
                </motion.a>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {STATS.map((stat, index) => (
                <motion.div
                  key={index}
                  className="rounded-xl border border-cyan-400/15 bg-[#12305f]/40 px-3 py-4 text-center backdrop-blur-sm"
                  whileHover={{ y: -4, borderColor: 'rgba(34, 211, 238,0.4)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="text-xl sm:text-2xl font-bold text-cyan-400">{stat.value}</div>
                  <div className="mt-1 text-[11px] sm:text-xs text-slate-400 leading-snug">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image.
              The pull-up only applies once the layout is two-column: on mobile
              this block is the FIRST item, so a negative top margin there drags
              the portrait up behind the fixed navbar — hence mt-0 until md. */}
          <motion.div
            className="order-1 md:order-2 flex justify-center items-center mt-0 md:-mt-24 lg:-mt-44 xl:-mt-64"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.6, type: 'spring' }}
          >
            <div className="relative w-[210px] h-[210px] sm:w-[265px] sm:h-[265px] md:w-[310px] md:h-[310px]">
              {/* Glow behind the portrait */}
              <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(34, 211, 238,0.25),transparent_65%)] blur-2xl" />

              {/* Conic sweep — a rotating gradient ring that reads as a light
                  travelling around the portrait. */}
              <motion.div
                className="absolute -inset-1.5 rounded-full opacity-70"
                style={{
                  background:
                    'conic-gradient(from 0deg, transparent 0deg, rgba(34, 211, 238,0.85) 70deg, rgba(52,211,153,0.55) 140deg, transparent 210deg)',
                  WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))',
                  mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />

              {/* Slowly rotating accent ring */}
              <motion.div
                className="absolute -inset-5 rounded-full border border-dashed border-cyan-400/25"
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
              />

              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-400/40 shadow-2xl shadow-cyan-900/50"
                whileHover={{ rotate: [0, 2, -2, 0], transition: { duration: 0.5 } }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/20 to-cyan-500/20" />
                <Image
                  src="/img/sohrab.png"
                  alt="Sohrab Ali Ansari — Full Stack Developer"
                  width={500}
                  height={500}
                  priority
                  className="w-full h-full object-cover relative z-10"
                />
              </motion.div>

              {/* Experience badge */}
              <motion.div
                className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 z-20 rounded-full border-2 border-cyan-400 bg-[#0b1e3d] p-2 sm:p-2.5 shadow-lg"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500">
                  <span className="text-sm sm:text-base font-bold text-[#0b1e3d]">5.6+</span>
                </div>
              </motion.div>

              {/* Tech badges orbiting the portrait.
                  Positioned in percentages of the container so the ring scales
                  with the responsive image size; the animation lives on an
                  inner element so framer-motion's transform doesn't fight the
                  centering translate. */}
              {TECH_BADGES.map((tech, index) => {
                // Ring is offset by 9° so the badges straddle the 45° corner
                // where the "5.6+" badge sits, giving the widest clearance
                // 5 evenly-spaced badges allow (36° either side).
                const angle = ((index * (360 / TECH_BADGES.length) + 9) * Math.PI) / 180;
                // Percentages are summed here rather than left to calc(): the
                // browser normalises `calc(50% + 26.3314%)` down to
                // `calc(76.3314%)` in the SSR markup, which then no longer
                // string-matches what React renders on the client (hydration
                // mismatch). Rounding keeps both sides byte-identical.
                const left = (50 + Math.cos(angle) * 58).toFixed(3);
                const top = (50 + Math.sin(angle) * 58).toFixed(3);
                return (
                  <div
                    key={tech}
                    className="absolute z-20 hidden sm:block -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${left}%`, top: `${top}%` }}
                  >
                    <motion.div
                      className="whitespace-nowrap rounded-full border border-cyan-400/40 bg-[#0e2450]/90 px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-cyan-300 shadow-lg backdrop-blur-sm"
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 3 + index * 0.4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.2,
                      }}
                    >
                      {tech}
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

     
    </section>
  );
}
