import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About <span className="text-sky-400">Me</span>
        </motion.h2>
        <motion.div 
          className="w-20 h-1 bg-sky-500 mx-auto"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h3 className="text-2xl font-bold text-white mb-6" variants={item}>
            Professional Summary
          </motion.h3>
          
          <motion.p className="text-slate-300 mb-6 leading-relaxed" variants={item}>
            Experienced MEAN Stack Developer with 5.6+ years of total professional experience, including 4.5+ years hands-on in full-stack development, designing and building dynamic, scalable web applications using MongoDB, Express.js, Angular, and Node.js.
          </motion.p>

          <motion.p className="text-slate-300 mb-8 leading-relaxed" variants={item}>
            Skilled in building responsive front-end interfaces with Angular, Next.js, HTML5, CSS3, Bootstrap, and JavaScript, and developing robust RESTful APIs and backend services with Node.js and Express.js. Proficient in MongoDB for schema design, CRUD operations, and performance tuning. Also experienced in AI automation and prompt engineering — integrating LLM APIs and building AI-assisted chatbots and workflows into production applications.
          </motion.p>
          
          <motion.div className="grid grid-cols-2 gap-4" variants={item}>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-sky-500 rounded-full mr-3"></div>
              <span className="text-slate-300">Angular (v9-19)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-sky-500 rounded-full mr-3"></div>
              <span className="text-slate-300">Node.js & Express</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-sky-500 rounded-full mr-3"></div>
              <span className="text-slate-300">MongoDB</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-sky-500 rounded-full mr-3"></div>
              <span className="text-slate-300">Next.js</span>
            </div>
             <div className="flex items-center">
              <div className="w-3 h-3 bg-sky-500 rounded-full mr-3"></div>
              <span className="text-slate-300">AWS-S3</span>
            </div>
             <div className="flex items-center">
              <div className="w-3 h-3 bg-sky-500 rounded-full mr-3"></div>
              <span className="text-slate-300">Git</span>
            </div>
             <div className="flex items-center">
              <div className="w-3 h-3 bg-sky-500 rounded-full mr-3"></div>
              <span className="text-slate-300">AI Automation</span>
            </div>
             <div className="flex items-center">
              <div className="w-3 h-3 bg-sky-500 rounded-full mr-3"></div>
              <span className="text-slate-300">Prompt Engineering</span>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-[#12305f]/50 p-8 rounded-xl border border-sky-400/15"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
          
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xl font-semibold text-sky-400">M.R.S.P.T.U, Bathinda, Punjab</h4>
              <span className="text-sky-400">2016 - 2020</span>
            </div>
            <p className="text-slate-300 font-medium">B.Tech in Computer Science</p>
            <p className="text-slate-400 mt-2">CGPA: 7.8</p>
          </div>
          
          <div className="mt-8">
            <h4 className="text-xl font-semibold text-white mb-4">Achievements</h4>
            <ul className="space-y-3">
              {[
                "Delivered 7+ live products across AI, EdTech, e-commerce and mobility",
                "Built and shipped AI-powered features — LLM integration, prompt engineering and chatbots",
                "Created lead management system increasing conversion by 40%",
                "Mentored a team of 5 developers, improving productivity by 20%",
                "Optimized Angular apps improving performance by 15%"
              ].map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-400 mr-2 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-slate-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}