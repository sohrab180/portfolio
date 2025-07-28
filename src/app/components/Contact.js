// src/components/Contact.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
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
          confirmButtonColor: '#f59e0b'
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
          Get In <span className="text-amber-400">Touch</span>
        </motion.h2>
        <motion.div className="w-20 h-1 bg-amber-500 mx-auto"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.2, duration: 0.5 }} />
        <motion.p className="text-gray-400 max-w-2xl mx-auto mt-6"
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
            <InfoItem icon={<FaPhone />} title="Phone" value="+91-9199770786" />
            <InfoItem icon={<FaEnvelope />} title="Email" value="alisohrab0555@gmail.com" />
            <InfoItem icon={<FaMapMarkerAlt />} title="Location" value="Gurgaon, Haryana, India" />
          </div>
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
            <div className="flex space-x-4">
              <SocialIcon url="https://www.linkedin.com/in/developersohrabali/" icon={<FaLinkedin />} />
              <SocialIcon url="https://github.com/sohrab180" icon={<FaGithub />} />
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Full Name" />
                <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange}  placeholder="Enter Valid Email" />
              </div>
              <InputField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} pattern="^\+?[0-9\s\-]{7,15}$" placeholder="+91 1234567890" />
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Type here..." required />
              </div>
              <motion.button type="submit"
                className="w-full px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300"
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

function InfoItem({ icon, title, value }) {
  return (
    <div className="flex items-start">
      <div className="bg-gray-800/50 p-3 rounded-full mr-4">{React.cloneElement(icon, { className: "text-amber-500 text-xl" })}</div>
      <div>
        <h4 className="text-lg font-semibold text-white">{title}</h4>
        <p className="text-gray-300">{value}</p>
      </div>
    </div>
  );
}

function SocialIcon({ url, icon }) {
  return (
    <motion.a href={url} target="_blank"
      className="bg-gray-800/50 p-4 rounded-full hover:bg-amber-500 transition-colors"
      whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      {React.cloneElement(icon, { className: "text-xl text-amber-400 hover:text-white" })}
    </motion.a>
  );
}

function InputField({ label, name, type = "text", value, onChange, ...rest }) {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block text-gray-300 mb-2">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
        required
        {...rest}
      />
    </div>
  );
}
