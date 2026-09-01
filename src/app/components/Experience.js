import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Stuvalley Technology Pvt. Ltd",
      location: "Gurgaon, Haryana",
      period: "May 2022 – Present",
      achievements: [
        "Directed development of multiple flagship products — Resumeocean, Prayug and Anushram — using Angular 19, Next.js, Node.js and AWS",
        "Built AI-powered features end to end: LLM API integration, prompt engineering for reliable structured output, and an AI chatbot handling visitor queries in real time",
        "Created responsive front-end architectures with Tailwind CSS, Bootstrap 5, and PrimeNG",
        "Developed efficient back-end services with Node.js, Express.js and MongoDB, including schema design, aggregation and query optimisation",
        "Implemented CI/CD pipelines and deployed scalable solutions on AWS (S3, IAM) cloud infrastructure",
        "Mentored junior developers, increasing team productivity by 20%"
      ],
      technologies: ["Angular 19", "Next.js", "Node.js", "Express", "MongoDB", "AWS", "Tailwind CSS", "PrimeNG", "AI Automation", "Prompt Engineering"],
      impact: [
        { value: "40%", metric: "Performance", tooltip: "Improved application performance by 40% through optimization" },
        { value: "25%", metric: "Engagement", tooltip: "Increased user engagement by 25% with enhanced UI/UX" },
        { value: "20%", metric: "Efficiency", tooltip: "Boosted team efficiency by 20% through process improvements" }
      ]
    },
    {
      title: "Frontend Developer",
      company: "Sampark Softwares Pvt. Ltd",
      location: "Gurgaon, Haryana",
      period: "Feb 2021 – Apr 2022",
      achievements: [
        "Executed front-end development initiatives improving user engagement by 25%",
        "Applied responsive design principles boosting accessibility and engagement by 20%",
        "Increased usability and user satisfaction ratings by 15%",
        "Ensured cross-browser compatibility achieving 30% increase in accessibility"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Angular", "Bootstrap"],
      impact: [
        { value: "25%", metric: "Engagement", tooltip: "Enhanced user engagement by 25% with interactive features" },
        { value: "20%", metric: "Accessibility", tooltip: "Improved accessibility compliance by 20%" },
        { value: "30%", metric: "Compatibility", tooltip: "Achieved 30% better cross-browser compatibility" }
      ]
    }
  ];

  // See the note in Skills.js — page.js owns the <section id="experience">;
  // this stays a plain positioned div so the decorative blurs still clip.
  return (
    <div className="relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-cyan-400/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4 cursor-default"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">Experience</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 mx-auto rounded-full cursor-default"
            initial={{ width: 0 }}
            animate={controls}
            variants={{
              hidden: { width: 0 },
              visible: { width: 96 }
            }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
          <motion.p 
            className="mt-6 text-slate-300 max-w-2xl mx-auto text-lg cursor-default"
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            With 5.6+ years of professional experience, I&apos;ve delivered high-performance solutions 
            for leading technology companies using modern stacks like AWS, Next.js, and Tailwind CSS.
          </motion.p>
        </div>
        
        {/* Experience selector tabs */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-[#12305f]/50 backdrop-blur-sm p-1 rounded-xl border border-cyan-400/15 shadow-lg cursor-pointer">
            {experiences.map((exp, index) => (
              <motion.button
                key={index}
                className={`px-6 py-3 text-sm md:text-base rounded-lg transition-all duration-300 ${
                  activeTab === index 
                    ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold shadow-lg' 
                    : 'text-slate-300 hover:text-white hover:bg-[#16386e]/60'
                }`}
                onClick={() => setActiveTab(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {exp.company}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        {/* Experience content */}
        <motion.div 
          className="relative max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          animate={controls}
        >
          <motion.div 
            className="relative"
            variants={item}
          >
            <div className="w-full">
              <div className="bg-gradient-to-br from-[#12305f]/70 to-[#0b1e3d]/70 p-6 md:p-8 rounded-2xl border border-cyan-500/20 shadow-2xl backdrop-blur-sm relative overflow-hidden transition-all duration-500 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(34, 211, 238,0.15)] group cursor-default">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-20 group-hover:opacity-30 transition-opacity"></div>
                
                {/* Tech stack floating icons */}
                {activeTab === 0 && (
                  <div className="absolute top-4 right-4 flex space-x-2 cursor-default">
                    <div className="w-8 h-8 bg-cyan-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-cyan-500/20">
                      <span className="text-xs font-bold text-cyan-400">AWS</span>
                    </div>
                    <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/20">
                      <span className="text-xs font-bold text-blue-400">NXT</span>
                    </div>
                    <div className="w-8 h-8 bg-cyan-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-cyan-500/20">
                      <span className="text-xs font-bold text-cyan-400">CSS</span>
                    </div>
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <div className="flex items-center gap-2 cursor-default">
                        <h3 className="text-2xl md:text-3xl font-bold text-white">{experiences[activeTab].title}</h3>
                        {activeTab === 0 && (
                          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                            MODERN STACK
                          </span>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-2 my-3 cursor-default">
                        <h4 className="text-xl font-medium text-cyan-400">{experiences[activeTab].company}</h4>
                        <span className="text-slate-400 text-sm hidden md:inline">|</span>
                        <span className="text-slate-400 text-sm md:text-base block">{experiences[activeTab].location}</span>
                      </div>
                      
                      <span className="bg-cyan-900/40 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block mt-1 cursor-default">
                        {experiences[activeTab].period}
                      </span>
                    </div>
                    
    {/* Impact metrics with individual hover tooltips */}
<div className="flex gap-3 flex-wrap">
  {experiences[activeTab].impact.map((stat, idx) => (
    <div 
      key={idx} 
      className="flex flex-col items-center justify-center bg-cyan-900/20 p-3 rounded-xl border border-cyan-500/10 min-w-[80px] hover:bg-cyan-900/30 transition-colors relative cursor-pointer mb-10"
    >
      <span className="text-xl font-bold text-cyan-400">
        <CountUp
          end={parseInt(stat.value)}
          duration={2}
          suffix="%"
        />
      </span>
      <span className="text-xs text-cyan-300/80 mt-1 text-center">{stat.metric}</span>
      
      {/* Progress bar */}
      <div className="w-full mt-2 bg-[#0e2450] rounded-full h-1.5">
        <div 
          className="bg-gradient-to-r from-cyan-500 to-cyan-600 h-1.5 rounded-full" 
          style={{ width: stat.value }}
        ></div>
      </div>
      
      {/* Tooltip - only shows when this specific card is hovered */}
      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 hover:opacity-100 transition-opacity duration-200 bg-[#12305f] p-3 rounded-lg border border-cyan-500/30 text-xs w-48 z-30 shadow-lg">
        <div className="text-cyan-400 font-medium">{stat.tooltip}</div>
      </div>
    </div>
  ))}
</div>
                  </div>
                  
                  <div className="space-y-4 mt-6 cursor-default">
                    <h4 className="text-lg font-semibold text-cyan-200 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Key Achievements:
                    </h4>
                    <ul className="space-y-3">
                      {experiences[activeTab].achievements.map((achievement, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start pl-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * idx }}
                        >
                          <svg className="w-5 h-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="text-slate-300">{achievement}</p>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8 cursor-default">
                    <h4 className="text-lg font-semibold text-cyan-200 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {experiences[activeTab].technologies.map((tech, techIndex) => {
                        // Special styling for key technologies
                        const isHighlighted = activeTab === 0 &&
                          ["AWS", "Next.js", "Tailwind CSS", "AI Automation"].includes(tech);
                        
                        return (
                          <motion.span 
                            key={techIndex} 
                            className={`px-4 py-2 rounded-xl text-sm font-medium border transition-colors cursor-default ${
                              isHighlighted 
                                ? 'bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 text-cyan-300 border-cyan-500/40 shadow-[0_0_10px_rgba(34, 211, 238,0.2)]' 
                                : 'bg-cyan-900/30 text-cyan-300 border-cyan-500/20'
                            }`}
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: isHighlighted 
                                ? "rgba(8, 145, 178, 0.4)" 
                                : "rgba(8, 145, 178, 0.4)",
                              transition: { duration: 0.2 } 
                            }}
                          >
                            {tech}
                          </motion.span>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Career summary with modern tech focus */}
        <motion.div 
          className="mt-16 bg-gradient-to-br from-cyan-900/20 to-cyan-800/20 p-8 rounded-2xl border border-cyan-500/20 backdrop-blur-sm max-w-4xl mx-auto shadow-xl cursor-default"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-3">
                <span className="text-cyan-400">5.6+</span> Years of Development Excellence
              </h3>
              <p className="text-slate-300">
                Including 4.5+ years specializing in full-stack development with AWS cloud solutions,
                Next.js frameworks, and Tailwind CSS — plus growing expertise in AI automation and
                prompt engineering for building AI-powered features and chatbots.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["AWS", "Next.js", "Tailwind CSS", "Angular", "Node.js", "MongoDB", "AI Automation", "Prompt Engineering"].map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-cyan-900/30 text-cyan-300 rounded-full text-xs font-medium border border-cyan-500/20 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-auto grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "15+", label: "Projects Delivered" },
                { value: "7+", label: "Live Products" },
                { value: "2", label: "Companies" },
                { value: "20+", label: "Tech Skills" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center bg-cyan-900/30 p-4 rounded-xl border border-cyan-500/20 hover:bg-cyan-900/40 transition-all duration-300 group hover:shadow-[0_0_15px_rgba(34, 211, 238,0.2)] cursor-pointer"
                >
                  <div className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-slate-300 text-sm mt-1 group-hover:text-cyan-200/80 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}