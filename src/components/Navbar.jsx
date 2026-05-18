import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { navLinks, personalInfo } from '../constants/data';

// Custom smooth scroll function — much smoother than react-scroll defaults
const smoothScrollTo = (sectionId, offset = -76) => {
  const el = document.getElementById(sectionId);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top, behavior: 'smooth' });
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Initialize theme based on localStorage or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark) || !savedTheme; // Force default to dark if no preference

    if (isDark) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  // Scroll spy — track which section is in viewport
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section detection
      const sections = navLinks.map((l) => document.getElementById(l.to)).filter(Boolean);
      let current = 'hero';
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100) current = section.id;
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (to) => {
    setMenuOpen(false);
    smoothScrollTo(to);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bg-secondary/80 backdrop-blur-xl border-b border-border-color shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <button
            onClick={() => handleNavClick('hero')}
            className="cursor-pointer focus:outline-none"
            aria-label="Go to top"
          >
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
                <span className="font-heading font-black text-bg-primary text-sm">PH</span>
              </div>
              <span className="font-heading font-bold text-text-primary hidden sm:block">
                {personalInfo.firstName}
                <span className="text-accent"> {personalInfo.lastName}</span>
              </span>
            </motion.div>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.to}
                id={`nav-${link.to}`}
                onClick={() => handleNavClick(link.to)}
                className={`relative cursor-pointer px-4 py-2 text-sm font-medium transition-colors duration-200 group focus:outline-none ${
                  activeSection === link.to ? 'text-accent' : 'text-text-secondary hover:text-accent'
                }`}
              >
                {link.label}
                {/* Animated underline */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-accent rounded-full transition-all duration-300 ease-in-out ${
                    activeSection === link.to ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}

            <button
              onClick={toggleTheme}
              className="ml-2 mr-2 p-2.5 rounded-xl bg-bg-tertiary text-text-primary hover:text-accent hover:bg-accent/10 transition-colors border border-border-color/50"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            <motion.a
              href={personalInfo.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-accent text-bg-primary font-heading font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-accent-soft transition-all duration-200 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume ↗
            </motion.a>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-bg-tertiary text-text-primary hover:text-accent transition-colors border border-border-color/50"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            {/* Mobile hamburger */}
            <button
            id="mobile-menu-btn"
            className="md:hidden text-text-primary hover:text-accent transition-colors p-2 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-bg-secondary/95 backdrop-blur-xl border-b border-border-color"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.to}
                  onClick={() => handleNavClick(link.to)}
                  className={`text-left cursor-pointer px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 focus:outline-none ${
                    activeSection === link.to
                      ? 'text-accent bg-accent/5 border border-accent/20'
                      : 'text-text-secondary hover:text-accent hover:bg-accent/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href={personalInfo.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-center bg-accent text-bg-primary font-heading font-semibold text-sm px-5 py-3 rounded-xl hover:bg-accent-soft transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Resume ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
