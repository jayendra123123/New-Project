import React from 'react';
import { motion } from 'framer-motion';

const categorizedSkills = {
  Frontend: ['JavaScript', 'React', 'HTML', 'CSS', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express.js'],
  Database: ['MongoDB'],
  Programming: ['C++', 'Python', 'Java (Basics)'],
  Tools: ['Git', 'GitHub'],
};

export default function Skills() {
  return (
    <div className="bg-black text-white py-10 px-4 sm:px-8 md:px-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xs sm:text-sm text-gray-500 mb-1">________ SKILLS</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">TECHNICAL SKILLS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {Object.entries(categorizedSkills).map(([category, skills], idx) => (
              <div key={idx} className="bg-[#1a1a1a] p-5 rounded-lg border border-[#fc8019] shadow-md">
                <h3 className="text-lg font-semibold text-white mb-3 border-b border-[#fc8019] pb-1">
                  <span>{category}</span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="bg-[#fc8010] text-black px-4 py-1.5 rounded-full text-sm font-medium shadow"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
