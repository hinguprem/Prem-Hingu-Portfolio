import { motion } from 'framer-motion';
import { experience, education, certifications } from '../constants/data';
import SectionTitle from './ui/SectionTitle';
import TimelineItem from './ui/TimelineItem';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-glow/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Title + summary */}
          <div>
            <SectionTitle
              eyebrow="Experience"
              title="My Professional Journey"
              subtitle="3 internships across MERN, React, and PHP stacks — each one shaping my skills and work ethic."
            />

            {/* Value props */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {[
                { icon: '🚀', title: 'Production-Ready Delivery', desc: 'Built and shipped BorrowBuddy as a solo developer within a 4-month timeline at Sparks To Ideas' },
                { icon: '🏗️', title: 'REST API Architecture', desc: 'Designed 15+ API endpoints with JWT auth, dual-role logic, and complex booking workflows' },
                { icon: '🤝', title: 'Team Collaboration', desc: 'Worked in 3-member agile teams, contributed to code reviews and optimization at Tech Nishal' },
                { icon: '📈', title: 'Rapid Growth', desc: '3 internships across 3 different tech stacks — from PHP to React to full MERN in under 2 years' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="glass card-hover border border-border-color rounded-xl p-4 flex items-start gap-4"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-heading font-semibold text-text-primary text-sm">{item.title}</h3>
                    <p className="text-text-secondary text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Education Section */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="font-heading text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                <span className="text-accent">🎓</span> Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="glass card-hover border border-border-color rounded-xl p-4">
                    <h4 className="font-heading font-bold text-text-primary text-sm">{edu.degree}</h4>
                    <p className="text-text-secondary text-xs mt-1">{edu.institution}</p>
                    <div className="flex items-center justify-between mt-3 text-[11px] font-medium text-accent">
                      <span>{edu.duration}</span>
                      <span className="px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20">CGPA: {edu.cgpa}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications Section */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="font-heading text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                <span className="text-accent">🏆</span> Certifications
              </h3>
              <div className="glass border border-border-color rounded-xl p-1 text-sm overflow-hidden">
                <ul className="divide-y divide-border-color/50">
                  {certifications.map((cert, idx) => (
                    <li key={idx} className="p-3 hover:bg-white/5 transition-colors duration-200 flex flex-col">
                      <span className="font-heading font-semibold text-text-primary text-[13px]">{cert.title}</span>
                      <div className="flex items-center justify-between mt-1 text-text-secondary text-[11px]">
                        <span>{cert.issuer}</span>
                        <span>{cert.date}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Right: Timeline */}
          <div className="relative">
            {experience.map((item, i) => (
              <TimelineItem
                key={item.id}
                item={item}
                index={i}
                isLast={i === experience.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
