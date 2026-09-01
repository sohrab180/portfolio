import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: "Resumeocean",
      description: "AI-powered platform for creating professional, ATS-friendly resumes",
      url: "https://www.resumeocean.com",
      github: "",
      technologies: ["Next.js", "Node.js", "MongoDB", "AWS-S3"],
      features: [
        "AI-driven resume builder",
        "ATS optimization",
        "Resume scoring and feedback",
        "Google Login and mobile OTP authentication"
      ]
    },
    {
      title: "Prayug",
      description: "Career-focused training portal offering internships and courses",
      url: "https://www.prayug.com",
      github: "",
      technologies: ["Next.js","Angular", "Node.js", "MongoDB", "Express"],
      features: [
        "Course listing and enrollment system",
        "Student and instructor dashboards",
        "Progress tracking and certifications",
        "Domain-based course categorization"
      ]
    },
    {
      title: "Anushram",
      description: "AI-powered platform offering Ph.D. support including thesis and research guidance",
      url: "https://www.anushram.com",
      github: "",
      technologies: ["Angular","Next.js", "Node.js", "MongoDB", "AWS-S3"],
      features: [
        "Research engine for scientific insights",
        "Document submission and tracking",
        "Expert consultation booking",
        "Collaborative research modules"
      ]
    },
    {
      title: "PearlCraft",
      description: "E-commerce platform for pearl jewelry",
      url: "http://mypearlcraft.com",
      github: "",
      technologies: ["PHP", "Tailwind CSS", "Node.js", "MongoDB"],
      features: [
        "Product catalog with filters",
        "Shopping cart and checkout",
        "User authentication",
        "Payment gateway integration"
      ]
    },
    {
      title: "MyTripTaxi",
      description: "Cab booking service platform",
      url: "http://mytriptaxi.com",
      github: "",
      technologies: ["PHP", "Tailwind CSS", "Node.js", "MongoDB"],
      features: [
        "Real-time cab booking",
        "Fare estimation",
        "Driver tracking",
        "Multiple payment options"
      ]
    },
    {
      title: "Rodway",
      description: "Cab booking service platform",
      url: "https://rodway.in",
      github: "",
      technologies: ["PHP","Tailwind CSS", "Node.js", "Express", "MongoDB"],
      features: [
        "Ride scheduling",
        "Multiple vehicle options",
        "Route optimization",
        "Rating and review system"
      ]
    },
    {
      title: "Patna Taxi",
      description: "Cab booking service platform for the Patna region",
      url: "https://patnataxi.com",
      github: "",
      technologies: ["PHP", "Node.js", "Express", "MongoDB"],
      features: [
        "Ride scheduling",
        "Multiple vehicle options",
        "Route optimization",
        "Rating and review system"
      ]
    }
  ];

  return (
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-sky-400">Projects</span>
        </motion.h2>
        <motion.div 
          className="w-20 h-1 bg-sky-500 mx-auto"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#12305f]/50 rounded-xl overflow-hidden border border-sky-400/15 hover:border-sky-500/50 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <div className="flex space-x-2">
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-400">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-400">
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-slate-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-[#0e2450]/60 text-sky-300 text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-sky-400 mb-2">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-4 h-4 text-emerald-400 mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}