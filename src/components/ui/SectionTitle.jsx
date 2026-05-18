import { motion } from 'framer-motion';

const SectionTitle = ({ eyebrow, title, subtitle, centered = false }) => {
  return (
    <motion.div
      className={`mb-16 ${centered ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-accent font-heading font-semibold text-sm tracking-widest uppercase mb-3">
          <span className="w-8 h-px bg-accent" />
          {eyebrow}
          <span className="w-8 h-px bg-accent" />
        </span>
      )}
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
