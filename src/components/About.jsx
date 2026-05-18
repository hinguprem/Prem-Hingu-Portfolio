import { motion } from 'framer-motion';
import { FiCode, FiTarget, FiTrendingUp, FiBriefcase } from 'react-icons/fi';
import { personalInfo, stats } from '../constants/data';
import SectionTitle from './ui/SectionTitle';
import GlowButton from './ui/GlowButton';

const statIcons = [FiBriefcase, FiCode, FiTarget, FiTrendingUp];

const smoothScrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 76;
  window.scrollTo({ top, behavior: 'smooth' });
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-bg-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-glow/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="About Me"
          title="Building the Web, One Stack at a Time"
          subtitle="Results-driven developer with 3 internships and a passion for clean, scalable code"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Avatar */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl glass-gold border-2 border-accent/30 flex items-center justify-center relative overflow-hidden group">
                <img 
                  src={personalInfo.photo} 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>

              <motion.div
                className="absolute -bottom-6 -right-6 glass-gold border border-accent/30 rounded-2xl px-4 py-3 text-center"
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 3.5 }}
              >
                <p className="font-heading font-black text-2xl gradient-text">3</p>
                <p className="text-text-secondary text-xs">Internships</p>
              </motion.div>

              <motion.div
                className="absolute -top-4 -left-4 glass border border-border-color rounded-xl px-3 py-2 flex items-center gap-2"
                animate={{ y: [4, -4, 4] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs text-text-secondary font-medium">Open to work</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Hey there! I'm{' '}
              <span className="gradient-text">{personalInfo.firstName}</span> 👋
            </h3>
            <p className="text-text-secondary leading-relaxed mb-4">{personalInfo.bio}</p>
            <p className="text-text-secondary leading-relaxed mb-6">{personalInfo.bio2}</p>

            {/* Info rows */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { label: 'Location', value: personalInfo.location },
                { label: 'Email', value: 'hinguprem007@gmail.com' },
                { label: 'Stack', value: 'MERN + Next.js' },
                { label: 'Status', value: 'Open to Hire', highlight: true },
              ].map((item) => (
                <div key={item.label} className="glass border border-border-color rounded-xl px-4 py-3">
                  <p className="text-xs text-text-secondary mb-0.5">{item.label}</p>
                  <p className={`text-sm font-semibold truncate ${item.highlight ? 'text-accent' : 'text-text-primary'}`}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <GlowButton variant="primary" onClick={() => smoothScrollTo('projects')}>
                View My Work
              </GlowButton>
              <GlowButton
                variant="ghost"
                href={personalInfo.resumeFile}
                download="Prem_Hingu_Resume.pdf"
              >
                Download CV
              </GlowButton>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, i) => {
            const Icon = statIcons[i];
            return (
              <motion.div
                key={stat.label}
                className="glass-gold card-hover border border-accent/20 rounded-2xl p-6 text-center"
                whileHover={{ scale: 1.04 }}
              >
                <Icon className="text-accent text-2xl mx-auto mb-2" />
                <p className="font-heading font-black text-3xl gradient-text">{stat.value}</p>
                <p className="text-text-secondary text-sm mt-1">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
