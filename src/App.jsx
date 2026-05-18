import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

/* ─── Loading Screen ─── */
const LoadingScreen = ({ onDone }) => {
  useEffect(() => {
    const t = setTimeout(onDone, 2200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 bg-bg-primary flex flex-col items-center justify-center z-[9999]"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated logo */}
      <motion.div
        className="relative"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'backOut' }}
      >
        <div className="w-20 h-20 rounded-2xl bg-accent flex items-center justify-center animate-glow">
          <span className="font-heading font-black text-3xl text-bg-primary">PH</span>
        </div>
        {/* Spinning ring */}
        <svg
          className="absolute -inset-3 animate-spin-slow"
          viewBox="0 0 88 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="44" cy="44" r="42" stroke="#EAB308" strokeWidth="1.5" strokeDasharray="6 10" />
        </svg>
      </motion.div>

      <motion.p
        className="mt-8 font-heading text-text-secondary text-sm tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Loading portfolio...
      </motion.p>

      {/* Progress bar */}
      <div className="mt-4 w-40 h-0.5 bg-border-color rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-accent to-accent-soft rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  );
};

/* ─── App ─── */
const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-bg-primary min-h-screen"
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
};

export default App;
