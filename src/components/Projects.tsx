'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with Next.js, TypeScript, and Framer Motion. Features Spotify integration and animated components.',
    image: '/projects/portfolio.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://your-portfolio-url.com',
  },
  {
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce platform with user authentication, product management, and payment integration.',
    image: '/projects/ecommerce.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/yourusername/ecommerce',
  },
  {
    title: 'Data Analytics Dashboard',
    description: 'Interactive dashboard for visualizing business metrics and analytics data.',
    image: '/projects/dashboard.jpg',
    technologies: ['Python', 'React', 'D3.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/yourusername/analytics-dashboard',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-2 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[var(--purple-light)] font-mono text-sm">
            {'<projects>'}
          </span>
          <h2 className="text-5xl md:text-6xl font-bold">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-[#1a1f2e] rounded-lg overflow-hidden group hover:bg-[#1E1B2E] transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                transition: { 
                  duration: 0.3,
                  delay: 0.1
                }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--purple-light)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-[var(--text-primary)] mb-2">
                  {project.title}
                </h3>
                <p className="text-[var(--text-secondary)] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[var(--purple-light)]/10 text-[var(--purple-light)] rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[var(--text-secondary)] hover:text-[var(--purple-light)] transition-colors"
                  >
                    <FaGithub className="w-5 h-5 mr-2" />
                    <span>Code</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[var(--text-secondary)] hover:text-[var(--purple-light)] transition-colors"
                    >
                      <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 