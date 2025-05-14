'use client';

import { motion } from 'framer-motion';

const About = () => {
  const facts = [
    {
      title: 'Education',
      subtitle: 'Schulich School of Business',
      description: 'Specializing in Digital Innovation'
    },
    {
      title: 'Focus',
      subtitle: 'Tech Consulting',
      description: 'Delivering innovative solutions through digital transformation and strategy'
    },
    {
      title: 'Skills',
      subtitle: 'Full Stack Development',
      description: 'Modern web technologies and business solutions'
    },
    {
      title: 'Interests',
      subtitle: 'Digital Innovation',
      description: 'Exploring emerging technologies and their business applications'
    }
  ];

  return (
    <section id="about" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-8">
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[var(--purple-light)] font-mono text-sm">
                {'<about>'}
              </span>
              <h2 className="text-5xl md:text-6xl font-bold">
                Business & Technology
              </h2>
            </motion.div>

            <motion.p
              className="text-[var(--text-secondary)] text-lg max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              As a student at Schulich School of Business, I combine my passion for Technology 
              with business acumen to create innovative digital solutions. My focus lies in 
              understanding how emerging technologies can drive business transformation and 
              create value in today's digital landscape.
            </motion.p>

            <motion.a
              href="#projects"
              className="inline-block text-[var(--purple-light)] font-mono text-sm hover:opacity-80 transition-opacity"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {'<projects/>'}
            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facts.map((fact, index) => (
              <motion.div
                key={fact.title}
                className="bg-[#1a1f2e] rounded-lg p-6 space-y-3 group hover:bg-[#1E1B2E] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { 
                    duration: 0.3,
                    delay: 0.1
                  }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-[var(--purple-light)] font-mono text-sm opacity-60 group-hover:opacity-100 transition-opacity">
                  {'<' + fact.title.toLowerCase() + '>'}
                </span>
                <div className="space-y-1">
                  <h3 className="text-xl font-medium">
                    {fact.subtitle}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm">
                    {fact.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 