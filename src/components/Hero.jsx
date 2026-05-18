import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
  FiArrowDown, FiDownload, FiGithub, FiLinkedin, FiMail,
} from 'react-icons/fi';
import { SiReact, SiNodedotjs, SiMongodb, SiNextdotjs } from 'react-icons/si';
import { personalInfo } from '../constants/data';
import GlowButton from './ui/GlowButton';

const smoothScrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 76;
  window.scrollTo({ top, behavior: 'smooth' });
};

const floatingBadges = [
  { icon: <SiReact className="text-sky-400" />, label: 'React.js', style: 'float-1', pos: 'top-24 left-8 md:left-20 lg:left-40' },
  { icon: <SiNodedotjs className="text-green-500" />, label: 'Node.js', style: 'float-2', pos: 'top-40 right-8 md:right-20 lg:right-40' },
  { icon: <SiMongodb className="text-green-400" />, label: 'MongoDB', style: 'float-3', pos: 'bottom-40 left-8 md:left-20 lg:left-32' },
  { icon: <SiNextdotjs className="text-white" />, label: 'Next.js', style: 'float-4', pos: 'bottom-32 right-8 md:right-20 lg:right-36' },
];

const Hero = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouse = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', handleMouse, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden dot-grid"
    >
      {/* Cursor glow */}
      <div ref={cursorRef} className="cursor-glow" />

      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-glow/6 rounded-full blur-3xl pointer-events-none" />

      {/* Floating tech badges */}
      {floatingBadges.map((badge, i) => (
        <motion.div
          key={badge.label}
          className={`absolute hidden lg:flex items-center gap-2 glass-gold px-4 py-2 rounded-xl text-sm font-semibold text-text-primary ${badge.pos} ${badge.style}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 + i * 0.15, duration: 0.5 }}
        >
          <span className="text-xl">{badge.icon}</span>
          {badge.label}
        </motion.div>
      ))}

      {/* Center content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">

        {/* Available badge */}
        <motion.div
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-semibold text-text-secondary mb-8 border border-border-color"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          {personalInfo.availableForWork ? 'Available for opportunities' : 'Currently busy'}
        </motion.div>

        {/* Name */}
        <motion.h1
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
        >
          <span className="text-text-primary">{personalInfo.firstName} </span>
          <span className="gradient-text gold-glow-text">{personalInfo.lastName}</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold text-text-secondary mb-6 min-h-[2rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          I build{' '}
          <span className="text-accent">
            <TypeAnimation
              sequence={[
                'Full Stack Applications',
                2000,
                'React.js Frontends',
                2000,
                'Node.js Backends',
                2000,
                'MERN Stack Solutions',
                2000,
                'Next.js Projects',
                2000,
                'Scalable REST APIs',
                2000,
              ]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
            />
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p
          className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
        >
          {personalInfo.bio}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <GlowButton variant="primary" onClick={() => smoothScrollTo('projects')}>
            View Projects <FiArrowDown size={15} />
          </GlowButton>
          <GlowButton variant="ghost" onClick={() => smoothScrollTo('contact')}>
            Contact Me <FiMail size={15} />
          </GlowButton>
          <GlowButton
            variant="outline"
            href={personalInfo.resumeFile}
            download="Prem_Hingu_Resume.pdf"
          >
            <FiDownload size={14} /> Download Resume
          </GlowButton>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex items-center justify-center gap-5 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          {[
            { icon: <FiGithub size={20} />, href: personalInfo.github, label: 'GitHub' },
            { icon: <FiLinkedin size={20} />, href: personalInfo.linkedin, label: 'LinkedIn' },
            { icon: <FiMail size={20} />, href: personalInfo.gmailLink, label: 'Email' },
          ].map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-xl glass border border-border-color flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/40 transition-all duration-200"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {s.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-secondary text-xs cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={() => smoothScrollTo('about')}
      >
        <span>Scroll Down</span>
        <motion.div className="w-5 h-8 border border-border-color rounded-full flex items-start justify-center pt-1.5">
          <motion.div
            className="w-1 h-2 bg-accent rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
