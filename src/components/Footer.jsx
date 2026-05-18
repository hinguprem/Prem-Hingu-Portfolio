import { FiGithub, FiLinkedin, FiMail, FiHeart, FiInstagram } from 'react-icons/fi';
import { personalInfo, navLinks } from '../constants/data';

const smoothScrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 76;
  window.scrollTo({ top, behavior: 'smooth' });
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary border-t border-border-color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
                <span className="font-heading font-black text-bg-primary text-sm">PH</span>
              </div>
              <span className="font-heading font-bold text-text-primary">
                {personalInfo.firstName} <span className="text-accent">{personalInfo.lastName}</span>
              </span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-text-primary text-sm mb-4 uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <button
                    onClick={() => smoothScrollTo(link.to)}
                    className="text-text-secondary text-sm hover:text-accent transition-colors cursor-pointer focus:outline-none text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-heading font-semibold text-text-primary text-sm mb-4 uppercase tracking-widest">
              Connect
            </h4>
            <div className="flex flex-col gap-2 mb-4">
              <a href={personalInfo.gmailLink} target="_blank" rel="noopener noreferrer" className="text-text-secondary text-sm hover:text-accent transition-colors flex items-center gap-2">
                <FiMail size={14} /> {personalInfo.email}
              </a>
            </div>
            <div className="flex gap-3">
              {[
                { icon: <FiGithub size={18} />, href: personalInfo.github, label: 'GitHub' },
                { icon: <FiLinkedin size={18} />, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: <FiMail size={18} />, href: personalInfo.gmailLink, label: 'Email' },
                { icon: <FiInstagram size={18} />, href: personalInfo.instagram, label: 'Instagram' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 glass border border-border-color rounded-lg flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/40 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border-color flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-secondary text-xs">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-text-secondary text-xs flex items-center gap-1.5">
            Built with <FiHeart className="text-accent" size={12} /> using React.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
