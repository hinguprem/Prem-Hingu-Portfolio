import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const TimelineItem = ({ item, index, isLast }) => {
  return (
    <motion.div
      className="relative pl-10 pb-12"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-[10px] top-8 bottom-0 w-px bg-gradient-to-b from-accent to-transparent" />
      )}

      {/* Dot */}
      <div className="absolute left-0 top-1 w-5 h-5 rounded-full border-2 border-accent bg-bg-primary flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
      </div>

      {/* Card */}
      <div className="glass card-hover border border-border-color rounded-2xl p-6 ml-2">
        {/* Badge */}
        <span className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full mb-3 ${
          item.type === 'Internship'
            ? 'bg-accent/10 text-accent border border-accent/20'
            : 'bg-bg-tertiary text-text-secondary border border-border-color'
        }`}>
          <FiBriefcase size={11} />
          {item.type}
        </span>

        <h3 className="font-heading text-xl font-bold text-text-primary mb-0.5">{item.role}</h3>
        <p className="text-accent font-semibold text-sm mb-3">{item.company}</p>

        <div className="flex flex-wrap gap-4 text-text-secondary text-xs mb-4">
          <span className="flex items-center gap-1.5">
            <FiCalendar size={12} /> {item.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <FiMapPin size={12} /> {item.location}
          </span>
        </div>

        <ul className="space-y-2 mb-4">
          {item.description.map((point, i) => (
            <li key={i} className="flex items-start gap-2 text-text-secondary text-sm leading-relaxed">
              <span className="text-accent mt-1 flex-shrink-0">▸</span>
              {point}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border-color">
          {item.techStack.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
