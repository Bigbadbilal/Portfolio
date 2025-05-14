'use client';

import { motion } from 'framer-motion';
import { SiReact, SiTypescript, SiNodedotjs, SiPython, SiPostgresql, SiAmazon, SiFigma, SiGit } from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ElementType;
  level: string;
  description: string;
}

const skills: Skill[] = [
  {
    name: 'React',
    icon: SiReact,
    level: 'Advanced',
    description: 'Building modern web applications with React and Next.js'
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    level: 'Advanced',
    description: 'Type-safe development with TypeScript'
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    level: 'Intermediate',
    description: 'Server-side development and API integration'
  },
  {
    name: 'Python',
    icon: SiPython,
    level: 'Advanced',
    description: 'Data analysis and backend development'
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    level: 'Intermediate',
    description: 'Database design and optimization'
  },
  {
    name: 'AWS',
    icon: SiAmazon,
    level: 'Intermediate',
    description: 'Cloud infrastructure and deployment'
  },
  {
    name: 'UI/UX',
    icon: SiFigma,
    level: 'Advanced',
    description: 'Creating beautiful and intuitive interfaces'
  },
  {
    name: 'Git',
    icon: SiGit,
    level: 'Advanced',
    description: 'Version control and collaboration'
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="section-dots" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-700/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { 
                  duration: 0.3,
                  delay: 0.1
                }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <skill.icon className="w-8 h-8 text-blue-400" />
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-500/10 text-blue-400">
                    {skill.level}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 