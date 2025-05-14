'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

const Hero = () => {
  const socialLinks = [
    {
      href: 'https://github.com/yourusername',
      icon: FaGithub,
      label: 'GitHub',
    },
    {
      href: 'https://linkedin.com/in/yourusername',
      icon: FaLinkedin,
      label: 'LinkedIn',
    },
    {
      href: 'mailto:your.email@example.com',
      icon: FaEnvelope,
      label: 'Email',
    },
  ];

  return (
    <section id="home" className="min-h-[85vh] flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6 lg:pl-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-3">
              <motion.div
                className="code-text text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {'<introduction>'}
              </motion.div>
              <motion.h1
                className="text-6xl md:text-7xl lg:text-8xl tracking-tight"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: '#B197FC',
                  letterSpacing: '-0.02em',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="flex flex-col leading-[0.9] relative">
                  <span className="flex">
                    <span>&lt;</span>
                    <span className="mx-1">Bilal</span>
                  </span>
                  <span className="flex">
                    <span className="invisible">&lt;</span>
                    <span className="mx-1">Khan</span>
                    <span>/&gt;</span>
                  </span>
                </div>
              </motion.h1>
              <motion.p
                className="text-[var(--text-secondary)] text-xl max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Student @ Schulich School of Business
              </motion.p>
              <motion.div
                className="code-text text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {'</introduction>'}
              </motion.div>
            </div>

            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-secondary)] hover:text-[var(--purple-light)] transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-6 h-6" />
                  <span className="sr-only">{link.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative w-[500px] h-[500px] mx-auto lg:-ml-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div 
              className="absolute inset-0 bg-[#B197FC]/20 rounded-[40%_60%_70%_30%/50%_50%_60%_50%] blur-3xl animate-blob"
              style={{
                animation: 'blob 8s infinite',
              }}
            />
            <div className="relative w-full h-full overflow-hidden"
              style={{
                borderRadius: '40% 60% 70% 30% / 50% 50% 60% 50%',
              }}
            >
              <Image
                src="/images/thumbnail_Image.jpg"
                alt="Bilal Khan"
                width={700}
                height={700}
                className="object-cover w-full h-full scale-110 -translate-x-6"
                style={{ objectPosition: '0% 132%' }}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#B197FC]/10 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10" />
    </section>
  );
};

export default Hero;