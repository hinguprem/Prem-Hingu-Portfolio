import { motion } from 'framer-motion';
import {
  SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss,
  SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb,
  SiGit, SiGithub, SiPostman, SiNextdotjs, SiMysql,
  SiSocketdotio, SiCloudinary, SiVercel,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { FiCode, FiLock } from 'react-icons/fi';

const iconMap = {
  react: <SiReact className="text-sky-400" />,
  js: <SiJavascript className="text-yellow-400" />,
  ts: <SiTypescript className="text-blue-400" />,
  html: <SiHtml5 className="text-orange-500" />,
  css: <SiCss className="text-blue-500" />,
  tailwind: <SiTailwindcss className="text-cyan-400" />,
  node: <SiNodedotjs className="text-green-500" />,
  express: <SiExpress className="text-gray-300" />,
  mongo: <SiMongodb className="text-green-400" />,
  git: <SiGit className="text-orange-500" />,
  github: <SiGithub className="text-text-primary" />,
  vscode: <FiCode className="text-blue-400" />,
  postman: <SiPostman className="text-orange-500" />,
  api: <TbApi className="text-accent" />,
  next: <SiNextdotjs className="text-white" />,
  mysql: <SiMysql className="text-blue-400" />,
  socket: <SiSocketdotio className="text-white" />,
  cloud: <SiCloudinary className="text-sky-400" />,
  vercel: <SiVercel className="text-white" />,
  jwt: <FiLock className="text-accent" />,
};

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      className="glass card-hover rounded-2xl p-5 border border-border-color group cursor-default"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      {/* Icon + Name */}
      <div className="flex items-center gap-3 mb-4">
        <div className="text-3xl flex-shrink-0">
          {iconMap[skill.icon] || <TbApi className="text-accent" />}
        </div>
        <span className="font-heading font-semibold text-text-primary text-sm leading-tight">
          {skill.name}
        </span>
      </div>

      {/* Progress bar */}
      <div className="relative">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-text-secondary">Proficiency</span>
          <span className="text-xs font-semibold text-accent">{skill.level}%</span>
        </div>
        <div className="w-full h-1.5 bg-bg-primary rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-accent to-accent-soft"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.06 + 0.3, ease: 'easeOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
