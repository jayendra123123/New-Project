import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science',
    institution: 'Vignan Institute of Information Technology',
    year: '2022 - 2026',
  },
  {
    degree: 'Senior Secondary (XII)',
    field: 'Maths, Physics, and Chemistry (MPC)',
    institution: 'Sri Chaitanya Junior College',
    year: '2020 - 2022',
  },
  {
    degree: 'Secondary (X)',
    field: 'General',
    institution: 'Bhashyam High School',
    year: '2018 - 2020',
  },
];

export default function Education() {
  return (
    <div className="bg-black text-white py-10 px-4 sm:px-8 md:px-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-start text-left mb-12"
        >
          <p className="text-xs sm:text-sm text-gray-500 mb-1">________ EDUCATION</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">EDUCATION</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#fc8019]">
            Journey of learning — because Learning never stops...
          </p>
        </motion.div>

        <div className="relative border-l-2 border-[#fc8019] ml-4 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-10 ml-6"
            >
              <div className="absolute w-4 h-4 bg-[#fc8019] rounded-full mt-1.5 -left-2 border border-white"></div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#fc8019]">{edu.degree}</h3>
              <p className="text-sm sm:text-base text-gray-400">{edu.field}</p>
              <p className="text-sm sm:text-base text-gray-400">{edu.institution}</p>
              <p className="text-xs sm:text-sm text-gray-500">{edu.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
