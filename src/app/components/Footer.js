"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowUp, FaWhatsapp } from 'react-icons/fa';

// wa.me needs the number in full international form, digits only.
const WHATSAPP_URL =
  'https://wa.me/919199770786?text=' +
  encodeURIComponent("Hi Sohrab, I found your portfolio and I'd like to connect.");

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/sohrab180',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sohrabalitech/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
];

const quickLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const expertise = ['Angular', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS', 'AI Automation'];

const contactDetails = [
  { icon: <FaEnvelope />, text: 'sohrabali180@gmail.com', href: 'mailto:sohrabali180@gmail.com' },
  { icon: <FaPhone />, text: '+91-9199770786', href: 'tel:+919199770786' },
  { icon: <FaWhatsapp />, text: 'Chat on WhatsApp', href: WHATSAPP_URL, external: true },
  { icon: <FaMapMarkerAlt />, text: 'Gurgaon, Haryana, India', href: null },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#071426] border-t border-cyan-400/10 overflow-hidden">
      {/* Ambient glows, one cyan one emerald, to lift the flat dark panel */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative container mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            {/* The logo artwork is dark navy, so it needs a light plate to be
                legible against the dark footer. */}
            <div className="inline-block rounded-xl bg-white px-4 py-3 shadow-lg">
              <Image src="/img/logo.png" alt="Sohrab Ali Ansari" width={132} height={78} className="h-12 w-auto" />
            </div>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed max-w-xs">
              Full Stack Developer specializing in the MEAN stack, Next.js and AI automation — building scalable
              products end to end.
            </p>

            {/* Availability status — green reads as "open / online" at a glance */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for work
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            aria-label="Footer"
          >
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Quick Links</h3>
            <span className="mt-2 block h-0.5 w-8 rounded-full bg-emerald-400" />
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    className="group inline-flex cursor-pointer items-center gap-2 text-sm text-slate-400 transition-colors hover:text-cyan-400"
                  >
                    <span className="h-1 w-1 rounded-full bg-slate-600 transition-colors group-hover:bg-emerald-400" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Expertise</h3>
            <span className="mt-2 block h-0.5 w-8 rounded-full bg-emerald-400" />
            <ul className="mt-4 flex flex-wrap gap-2">
              {expertise.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-cyan-400/15 bg-[#12305f]/50 px-2.5 py-1 text-xs text-slate-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Get in Touch</h3>
            <span className="mt-2 block h-0.5 w-8 rounded-full bg-emerald-400" />
            <ul className="mt-4 space-y-3">
              {contactDetails.map((item) => (
                <li key={item.text} className="flex items-start gap-2.5 text-sm text-slate-400">
                  <span className={`mt-0.5 shrink-0 ${item.external ? 'text-emerald-400' : 'text-cyan-400'}`}>
                    {item.icon}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className={`cursor-pointer break-all transition-colors ${
                        item.external ? 'hover:text-emerald-400' : 'hover:text-cyan-400'
                      }`}
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer rounded-lg border border-cyan-400/15 bg-[#12305f]/50 p-2.5 text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-400"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}

              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer rounded-lg border border-emerald-400/30 bg-emerald-400/10 p-2.5 text-emerald-300 transition-colors hover:bg-emerald-400/20"
                aria-label="Message on WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col-reverse items-center gap-4 border-t border-cyan-400/10 pt-6 sm:flex-row sm:justify-between">
          <p className="text-slate-400 text-xs text-center sm:text-left">
            © {currentYear} Sohrab Ali Ansari. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <p className="text-slate-500 text-xs">Built with Next.js &amp; Tailwind CSS</p>
            <motion.button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg border border-emerald-400/30 bg-emerald-400/10 p-2 text-emerald-300 transition-colors hover:bg-emerald-400/20"
              aria-label="Back to top"
            >
              <FaArrowUp className="h-3.5 w-3.5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
