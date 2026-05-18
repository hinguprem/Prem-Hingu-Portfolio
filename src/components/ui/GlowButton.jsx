import { motion } from 'framer-motion';

const GlowButton = ({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  download,
  target,
  rel,
  type = 'button',
  disabled = false,
}) => {
  const base =
    'relative inline-flex items-center gap-2 font-heading font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden';

  const variants = {
    primary:
      'bg-accent text-bg-primary hover:bg-accent-soft hover:scale-105 gold-glow hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]',
    ghost:
      'border-2 border-accent text-accent hover:bg-accent hover:text-bg-primary hover:scale-105',
    outline:
      'border border-border-color text-text-secondary hover:border-accent hover:text-accent',
    text: 'text-text-secondary hover:text-accent p-0 gap-1',
  };

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        className={`${base} ${variants[variant]} ${className}`}
        download={download}
        target={target}
        rel={rel}
        whileHover={{ scale: variant === 'primary' || variant === 'ghost' ? 1.05 : 1.02 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      disabled={disabled}
      whileHover={{ scale: variant === 'primary' || variant === 'ghost' ? 1.05 : 1.02 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
};

export default GlowButton;
