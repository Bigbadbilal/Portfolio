'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to: 'bilalkh@schulich.yorku.ca'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-2 mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[var(--purple-light)] font-mono text-sm">
            {'<contact>'}
          </span>
          <h2 className="text-5xl md:text-6xl font-bold">
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1a1f2e] border border-gray-700 rounded-lg focus:outline-none focus:border-[var(--purple-light)] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1a1f2e] border border-gray-700 rounded-lg focus:outline-none focus:border-[var(--purple-light)] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1a1f2e] border border-gray-700 rounded-lg focus:outline-none focus:border-[var(--purple-light)] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-[#1a1f2e] border border-gray-700 rounded-lg focus:outline-none focus:border-[var(--purple-light)] transition-colors resize-none"
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-3 bg-[var(--purple-light)] text-white rounded-lg font-medium hover:bg-opacity-90 transition-colors disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
              
              {submitStatus === 'success' && (
                <p className="text-green-500 mt-4">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 mt-4">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="lg:pl-12 space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Let's Connect</h3>
              <p className="text-[var(--text-secondary)]">
                Feel free to reach out for collaborations, opportunities, or just to say hello! 
                I&apos;ll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:bilalkh@schulich.yorku.ca"
                className="flex items-center space-x-4 text-[var(--text-secondary)] hover:text-[var(--purple-light)] transition-colors group"
              >
                <div className="p-3 bg-[#1a1f2e] rounded-lg group-hover:bg-[var(--purple-light)]/10 transition-colors">
                  <FaEnvelope className="w-6 h-6" />
                </div>
                <span>bilalkh@schulich.yorku.ca</span>
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-[var(--text-secondary)] hover:text-[var(--purple-light)] transition-colors group"
              >
                <div className="p-3 bg-[#1a1f2e] rounded-lg group-hover:bg-[var(--purple-light)]/10 transition-colors">
                  <FaLinkedin className="w-6 h-6" />
                </div>
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-[var(--text-secondary)] hover:text-[var(--purple-light)] transition-colors group"
              >
                <div className="p-3 bg-[#1a1f2e] rounded-lg group-hover:bg-[var(--purple-light)]/10 transition-colors">
                  <FaGithub className="w-6 h-6" />
                </div>
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 