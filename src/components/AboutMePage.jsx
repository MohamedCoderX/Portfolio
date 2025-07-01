'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGithub,
} from 'react-icons/fa';
import { SiMongodb, SiPostman } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'Java', icon: <FaJava className="text-red-500" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
];

const tools = [
  { name: 'Git', icon: <FaGithub className="text-white" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
];

const internships = [
  {
    role: 'Software Developer Intern',
    company: 'Zezah',
    year: 2025,
  },
  {
    role: 'React Developer Intern',
    company: 'Nexitence Technology',
    year: 2025,
  },
];

export default function AboutMePage() {
  return (
    <div className=" bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 py-16 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto space-y-10"
      >
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">
            👨‍💻 About Me
          </h1>
          <p className="text-lg leading-relaxed text-gray-300">
            I'm <span className="font-semibold text-white">Mohamed Ibrahim</span>, a passionate web developer
            from India with a strong interest in building sleek, modern websites and web apps. I specialize
            in <strong>JavaScript</strong>, <strong>React</strong>, <strong>MongoDB</strong>, and love exploring frontend
            technologies. Currently pursuing <strong>B.E. CSE</strong> (graduating 2026), CGPA: <strong>7.6</strong>. I’m keen
            on delivering clean UI and user-friendly experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-sm text-gray-400">
            <div><span className="font-medium text-white">Born In:</span> India</div>
            <div><span className="font-medium text-white">Experience:</span> Fresher</div>
            <div><span className="font-medium text-white">DOB:</span> 11 Nov 2004</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-4 text-white">🛠 Skills</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center text-sm hover:scale-105 transition"
                >
                  <div className="text-3xl">{skill.icon}</div>
                  <div className="text-gray-300 mt-1">{skill.name}</div>
                </div>
              ))}
            </div>
            <h3 className="text-lg font-medium mt-6 mb-2 text-white">🔧 Tools</h3>
            <div className="flex gap-6 flex-wrap">
              {tools.map((tool) => (
                <div key={tool.name} className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-xl">{tool.icon}</span> {tool.name}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-4 text-white">💼 Internships</h2>
            <ul className="space-y-4">
              {internships.map((item, idx) => (
                <li key={idx} className="bg-white/10 p-4 rounded-xl hover:bg-white/20 transition">
                  <div className="text-white font-medium">{item.role}</div>
                  <div className="text-gray-400 text-sm">{item.company} — {item.year}</div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
