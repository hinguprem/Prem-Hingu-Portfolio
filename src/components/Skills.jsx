import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../constants/data';
import SectionTitle from './ui/SectionTitle';
import SkillCard from './ui/SkillCard';

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];

const Skills = () => {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All' ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="section-padding bg-bg-primary relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-glow/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionTitle
            eyebrow="Skills"
            title="My Tech Arsenal"
            subtitle="Technologies I use to build modern, scalable, and production-ready web applications"
            centered
          />
        </div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              id={`skills-filter-${cat.toLowerCase()}`}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-xl font-heading font-semibold text-sm transition-all duration-200 ${
                active === cat
                  ? 'bg-accent text-bg-primary shadow-[0_0_15px_rgba(234,179,8,0.3)]'
                  : 'glass border border-border-color text-text-secondary hover:text-accent hover:border-accent/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filtered.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        {/* Bottom banner */}
        <motion.div
          className="mt-16 glass-gold border border-accent/20 rounded-3xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-heading text-xl font-bold text-text-primary mb-2">
            Always Learning, Always Growing 🚀
          </h3>
          <p className="text-text-secondary text-sm max-w-xl mx-auto">
            The tech world evolves fast. Currently deepening expertise in TypeScript, system design,
            and cloud deployment patterns to deliver even more robust solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {['TypeScript', 'Next.js', 'Docker', 'AWS', 'GraphQL', 'Redis'].map((tech) => (
              <span key={tech} className="tech-tag text-xs">
                {tech} (Exploring)
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
