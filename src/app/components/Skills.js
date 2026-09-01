import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const skillsData = {
    frontend: [
      { name: 'Angular (v9-19)', level: 95 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript', level: 92 },
      { name: 'HTML5/CSS3', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Bootstrap', level: 88 },
    ],
    backend: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 88 },
      { name: 'RESTful APIs', level: 92 },
      { name: 'Microservices', level: 85 },
      { name: 'API Integration', level: 90 },
      { name: 'JWT Authentication', level: 87 },
      { name: 'Payment Gateways', level: 82 },
    ],
    database: [
      { name: 'MongoDB', level: 90 },
      { name: 'Schema Design', level: 88 },
      { name: 'CRUD Operations', level: 92 },
      { name: 'Performance Tuning', level: 85 },
      { name: 'Aggregation', level: 83 },
      { name: 'Indexing', level: 80 },
      { name: 'Data Modeling', level: 85 },
    ],
    devops: [
      { name: 'AWS (S3, IAM)', level: 80 },
      { name: 'Git/GitHub', level: 92 },
      { name: 'CI/CD', level: 78 },
      { name: 'Docker', level: 75 },
      { name: 'Performance Optimization', level: 88 },
      { name: 'Testing', level: 85 },
      { name: 'Deployment', level: 90 },
    ],
    ai: [
      { name: 'AI Automation', level: 85 },
      { name: 'Prompt Engineering', level: 88 },
      { name: 'LLM API Integration (OpenAI/Gemini)', level: 82 },
      { name: 'AI Chatbot Development', level: 85 },
      { name: 'Workflow Automation', level: 80 },
      { name: 'RAG / Context-Aware Responses', level: 75 },
    ]
  };

  // The <section>, its id and its background live in page.js — this used to
  // render a second element with id="skills", so the document had two nodes
  // sharing that id and anchor/scroll-spy lookups hit the wrong one.
  return (
    <div ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
          >
            Technical <span className="text-sky-400">Skills</span>
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-sky-500 to-sky-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={controls}
            variants={{
              hidden: { width: 0 },
              visible: { width: 80 }
            }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
          <motion.p 
            className="mt-6 text-slate-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            With 5.6+ years of development experience, I&apos;ve mastered technologies that enable me to build complete, scalable web applications.
          </motion.p>
        </div>
        
        {/* Skills Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {Object.keys(skillsData).map((category) => (
            <motion.button
              key={category}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                category === 'ai' ? '' : 'capitalize'
              } ${
                activeTab === category
                  ? 'bg-gradient-to-r from-sky-500 to-sky-600 text-white'
                  : 'bg-[#12305f] text-slate-300 hover:bg-[#16386e]'
              }`}
              onClick={() => setActiveTab(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === 'ai' ? 'AI' : category}
            </motion.button>
          ))}
        </div>
        
        {/* Skills Content */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          animate={controls}
        >
          <div className="space-y-6">
            {skillsData[activeTab].slice(0, Math.ceil(skillsData[activeTab].length / 2)).map((skill, index) => (
              <motion.div key={index} variants={item}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-slate-300">{skill.name}</span>
                  <span className="text-sky-500 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-[#12305f] rounded-full h-2.5">
                  <motion.div 
                    className="bg-gradient-to-r from-sky-500 to-sky-600 h-2.5 rounded-full" 
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="space-y-6">
            {skillsData[activeTab].slice(Math.ceil(skillsData[activeTab].length / 2)).map((skill, index) => (
              <motion.div key={index} variants={item}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-slate-300">{skill.name}</span>
                  <span className="text-sky-500 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-[#12305f] rounded-full h-2.5">
                  <motion.div 
                    className="bg-gradient-to-r from-sky-500 to-sky-600 h-2.5 rounded-full" 
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 + (index + Math.ceil(skillsData[activeTab].length / 2)) * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Development Approach */}
        <motion.div 
          className="mt-12 bg-gradient-to-br from-[#12305f] to-[#0b1e3d] p-6 rounded-xl border border-sky-500/20 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Development Approach
          </h3>
          <p className="text-slate-300 mb-4">
            I specialize in creating full-stack applications using the MEAN stack, focusing on clean architecture, 
            reusable components, and efficient APIs. My development process emphasizes performance optimization, 
            accessibility compliance, and responsive design.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Component-Based Architecture', 'RESTful APIs', 'JWT Authentication', 'AWS Integration', 'CI/CD', 'Responsive Design', 'Performance Optimization', 'Cross-Browser Compatibility', 'AI Automation', 'Prompt Engineering'].map((item, index) => (
              <motion.span 
                key={index}
                className="px-3 py-1.5 bg-sky-900/30 text-sky-300 rounded-full text-sm"
                initial={{ opacity: 0 }}
                animate={controls}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                }}
                transition={{ delay: 0.6 + index * 0.05 }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}