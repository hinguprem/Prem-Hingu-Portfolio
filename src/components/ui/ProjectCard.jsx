import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import GlowButton from './GlowButton';

const ProjectCard = ({ project, index, featured = false }) => {
  if (featured) {
    return (
      <motion.div
        className="col-span-full glass card-hover border border-border-color rounded-3xl overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Image / Gradient header */}
        <div className={`w-full h-56 relative overflow-hidden ${!project.image ? `bg-gradient-to-br ${project.gradient}` : ''}`}>
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <>
              <div className="absolute inset-0 dot-grid opacity-30" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full gap-3">
                <div className="text-8xl font-heading font-black gradient-text opacity-20 select-none">
                  {project.title.charAt(0)}
                </div>
              </div>
            </>
          )}
          {/* Overlay badge */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="glass-gold px-4 py-1.5 rounded-full text-accent text-xs font-semibold tracking-widest uppercase">
              ⭐ Featured Project
            </span>
          </div>
        </div>

        <div className="p-8 md:p-10">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-2">
                {project.title}
              </h3>
              <p className="text-text-secondary leading-relaxed max-w-2xl">{project.description}</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              {project.live && (
                <GlowButton href={project.live} target="_blank" rel="noopener noreferrer" variant="primary">
                  <FiExternalLink size={14} /> Live Demo
                </GlowButton>
              )}
              <GlowButton href={project.github} target="_blank" rel="noopener noreferrer" variant="ghost">
                <FiGithub size={14} /> GitHub
              </GlowButton>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.techStack.map((t) => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="glass card-hover border border-border-color rounded-2xl overflow-hidden flex flex-col h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Image / Color bar header */}
      <div className={`w-full h-44 relative overflow-hidden ${!project.image ? `bg-gradient-to-br ${project.gradient}` : ''}`}>
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <>
            <div className="absolute inset-0 dot-grid opacity-20" />
            <span className="absolute inset-0 flex items-center justify-center text-6xl font-heading font-black gradient-text opacity-30 select-none">
              {project.title.charAt(0)}
            </span>
          </>
        )}
        {/* Gradient overlay at bottom for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="mb-1">
          <span className="text-xs text-text-secondary tracking-widest uppercase">{project.category}</span>
        </div>
        <h3 className="font-heading text-lg font-bold text-text-primary mb-2">{project.title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 my-4">
          {project.techStack.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>

        <div className="flex gap-4 pt-2 border-t border-border-color mt-auto">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-accent text-xs font-semibold hover:text-accent-soft transition-colors"
            >
              <FiExternalLink size={13} /> Live Demo
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-text-secondary text-xs font-semibold hover:text-text-primary transition-colors"
          >
            <FiGithub size={13} /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
