import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, personalInfo } from '../constants/data';
import SectionTitle from './ui/SectionTitle';
import ProjectCard from './ui/ProjectCard';

const filters = ['All', 'Full Stack', 'Frontend'];

const Projects = () => {
  const [active, setActive] = useState('All');

  const featured = projects.find((p) => p.featured);
  const regular = projects.filter((p) => !p.featured);
  const filtered =
    active === 'All'
      ? regular
      : regular.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding bg-bg-secondary relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-glow/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Projects"
          title="Things I've Built"
          subtitle="Production-ready projects showcasing my MERN stack expertise, problem-solving ability, and attention to detail"
        />

        {/* Featured project */}
        {featured && active === 'All' && (
          <div className="mb-8">
            <ProjectCard project={featured} featured />
          </div>
        )}

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap gap-3 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {filters.map((f) => (
            <button
              key={f}
              id={`project-filter-${f.toLowerCase().replace(' ', '-')}`}
              onClick={() => setActive(f)}
              className={`px-4 py-1.5 rounded-lg font-heading font-medium text-sm transition-all duration-200 ${
                active === f
                  ? 'bg-accent text-bg-primary'
                  : 'glass border border-border-color text-text-secondary hover:text-accent hover:border-accent/40'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-text-secondary mb-4">
            See all my work and contributions on GitHub →
          </p>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-accent text-accent font-heading font-semibold text-sm px-6 py-3 rounded-xl hover:bg-accent hover:text-bg-primary transition-all duration-200"
          >
            View All on GitHub ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
