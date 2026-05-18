import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin,
  FiSend, FiMessageSquare,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { personalInfo } from '../constants/data';
import SectionTitle from './ui/SectionTitle';

  const Contact = () => {
  const contactItems = [
    {
      icon: <FiMail size={18} />,
      label: 'Email',
      value: personalInfo.email,
      href: personalInfo.gmailLink, // opens Gmail compose
      external: true,
    },
    {
      icon: <FiPhone size={18} />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      external: false,
    },
    {
      icon: <FiMapPin size={18} />,
      label: 'Location',
      value: personalInfo.location,
      href: null,
    },
  ];

  const socialLinks = [
    { icon: <FiGithub size={20} />, href: personalInfo.github, label: 'GitHub', color: 'hover:text-text-primary' },
    { icon: <FiLinkedin size={20} />, href: personalInfo.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: <FaWhatsapp size={20} />, href: `https://wa.me/${personalInfo.whatsapp}`, label: 'WhatsApp', color: 'hover:text-green-400' },
    { icon: <FiMail size={20} />, href: personalInfo.gmailLink, label: 'Email', color: 'hover:text-accent' },
  ];

  const inputClass =
    'w-full bg-bg-primary border border-border-color rounded-xl px-4 py-3 text-text-primary text-sm placeholder-text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-200';

  return (
    <section id="contact" className="section-padding bg-bg-secondary relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-96 h-64 bg-glow/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Contact"
          title="Let's Work Together"
          subtitle="Have a project in mind or an opportunity to discuss? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-gold border border-accent/20 rounded-3xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <FiMessageSquare className="text-accent" size={24} />
                <h3 className="font-heading text-xl font-bold text-text-primary">Get In Touch</h3>
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                Whether you have a job opportunity, freelance project, or just want to say hi — my
                inbox is always open. I typically respond within 24 hours.
              </p>

              {/* Contact items */}
              <div className="space-y-4 mb-8">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.external ? '_blank' : undefined}
                          rel={item.external ? 'noopener noreferrer' : undefined}
                          className="text-sm font-medium text-text-primary hover:text-accent transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-text-primary">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div>
                <p className="text-xs text-text-secondary mb-3 font-semibold uppercase tracking-widest">Connect With Me</p>
                <div className="flex gap-3">
                  {socialLinks.map((s) => (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className={`w-11 h-11 glass border border-border-color rounded-xl flex items-center justify-center text-text-secondary ${s.color} hover:border-accent/30 transition-all duration-200`}
                      whileHover={{ scale: 1.12, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {s.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="mt-8 p-4 rounded-2xl bg-green-500/5 border border-green-500/20 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                <p className="text-sm text-text-secondary">
                  <span className="text-green-400 font-semibold">Currently available</span> for full-time
                  positions, internships, and freelance projects.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="glass border border-border-color rounded-3xl p-8 h-full flex flex-col"
            >
              {/* Web3Forms Config */}
              <input type="hidden" name="access_key" value="92ca22f3-7eee-49cc-a939-b3df2545779a" />
              <input type="hidden" name="subject" value="New Message from Portfolio" />
              <input type="hidden" name="redirect" value="https://web3forms.com/success" />

              <h3 className="font-heading text-xl font-bold text-text-primary mb-6">Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-xs text-text-secondary font-medium mb-1.5 block" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-xs text-text-secondary font-medium mb-1.5 block" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="text-xs text-text-secondary font-medium mb-1.5 block" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Job Opportunity / Project Collaboration"
                  className={inputClass}
                />
              </div>

              <div className="mb-6 flex-1">
                <label className="text-xs text-text-secondary font-medium mb-1.5 block" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <motion.button
                type="submit"
                id="contact-submit-btn"
                className="w-full bg-accent text-bg-primary font-heading font-bold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-accent-soft hover:shadow-[0_0_25px_rgba(234,179,8,0.4)] transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiSend size={15} /> Send Message
              </motion.button>

              <p className="text-xs text-text-secondary text-center mt-3">
                Or reach me directly at{' '}
                <a href={personalInfo.gmailLink} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  {personalInfo.email}
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
