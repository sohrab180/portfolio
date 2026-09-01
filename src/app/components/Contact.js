"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

// wa.me needs the number in full international form, digits only.
const WHATSAPP_URL =
  'https://wa.me/919199770786?text=' +
  encodeURIComponent("Hi Sohrab, I found your portfolio and I'd like to connect.");
import Swal from 'sweetalert2'; // ✅ Add this

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "c45e608e-d42d-4b76-8279-2378e1fe44e9", // 🔑 Replace with actual key
          ...formData
        })
      });

      const result = await res.json();

      if (result.success) {
        setFormData({ name: '', email: '', phone: '', message: '' }); // ✅ Reset
        Swal.fire({                                    // ✅ Success Message
          icon: 'success',
          title: 'Message Sent!',
          text: "Thanks for reaching out. I'll get back to you soon.",
          confirmButtonColor: '#06b6d4'
        });
      } else {
        Swal.fire({ icon: 'error', title: 'Oops!', text: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({ icon: 'error', title: 'Error', text: 'Could not send message.' });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="container mx-auto">
      {/* Contact Heading */}
      <div className="text-center mb-16">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          Get In <span className="text-cyan-400">Touch</span>
        </motion.h2>
        <motion.div className="w-20 h-1 bg-cyan-500 mx-auto"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.2, duration: 0.5 }} />
        <motion.p className="text-slate-400 max-w-2xl mx-auto mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}>
          Have a project in mind or want to discuss opportunities? Feel free to reach out!
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
          <div className="space-y-6">
            <InfoItem icon={<FaPhone />} title="Phone" value="+91-9199770786" href="tel:+919199770786" />
            <InfoItem icon={<FaEnvelope />} title="Email" value="sohrabali180@gmail.com" href="mailto:sohrabali180@gmail.com" />
            <InfoItem icon={<FaWhatsapp />} title="WhatsApp" value="Chat on WhatsApp" href={WHATSAPP_URL} external accent />
            <InfoItem icon={<FaMapMarkerAlt />} title="Location" value="Gurgaon, Haryana, India" />
          </div>
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
            <div className="flex space-x-4">
              <SocialIcon url="https://www.linkedin.com/in/sohrabalitech/" icon={<FaLinkedin />} />
              <SocialIcon url="https://github.com/sohrab180" icon={<FaGithub />} />
              <SocialIcon url={WHATSAPP_URL} icon={<FaWhatsapp />} accent />
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <div className="bg-[#12305f]/50 p-8 rounded-xl border border-cyan-400/15">
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Full Name" />
                <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange}  placeholder="Enter Valid Email" />
              </div>
              <InputField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} pattern="^\+?[0-9\s\-]{7,15}$" placeholder="+91 1234567890" />
              <div className="mb-6">
                <label htmlFor="message" className="block text-slate-300 mb-2">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5"
                  className="w-full bg-[#0e2450]/60 border border-cyan-400/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Type here..." required />
              </div>
              <motion.button type="submit"
                className="w-full px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ➕ Reusable Components

function InfoItem({ icon, title, value, href, external, accent }) {
  const tone = accent ? 'text-emerald-400' : 'text-cyan-500';
  const hover = accent ? 'hover:text-emerald-400' : 'hover:text-cyan-400';

  return (
    <div className="flex items-start">
      <div className="bg-[#12305f]/50 p-3 rounded-full mr-4">
        {React.cloneElement(icon, { className: `${tone} text-xl` })}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white">{title}</h4>
        {href ? (
          <a
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className={`text-slate-300 cursor-pointer transition-colors ${hover}`}
          >
            {value}
          </a>
        ) : (
          <p className="text-slate-300">{value}</p>
        )}
      </div>
    </div>
  );
}

function SocialIcon({ url, icon, accent }) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-4 rounded-full cursor-pointer transition-colors ${
        accent ? 'bg-emerald-400/10 border border-emerald-400/30 hover:bg-emerald-400/20' : 'bg-[#12305f]/50 hover:bg-cyan-500'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {React.cloneElement(icon, {
        className: `text-xl ${accent ? 'text-emerald-300' : 'text-cyan-400 hover:text-white'}`,
      })}
    </motion.a>
  );
}

function InputField({ label, name, type = "text", value, onChange, ...rest }) {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block text-slate-300 mb-2">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-[#0e2450]/60 border border-cyan-400/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
        required
        {...rest}
      />
    </div>
  );
}
