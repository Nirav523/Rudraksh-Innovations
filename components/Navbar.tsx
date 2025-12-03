import React, { useState, useEffect } from 'react';
import { Menu, X, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <>
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? 'w-[90%] md:w-auto min-w-[320px] md:min-w-[700px] bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/20'
            : 'w-[95%] md:w-auto min-w-[320px] md:min-w-[700px] bg-white/5 border border-white/10 backdrop-blur-sm'
        } rounded-full py-3 px-6`}
      >
        <div className="flex justify-between items-center gap-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-violet-500 blur-[10px] opacity-30 group-hover:opacity-60 transition-opacity"></div>
              <div className="bg-gradient-to-tr from-violet-500 to-fuchsia-500 p-1.5 rounded-xl group-hover:rotate-12 transition-transform duration-300 relative z-10">
                <Layers className="text-white w-5 h-5" />
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold text-white font-space tracking-tight">
                Rudraksh
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-500">
                Innovations
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-violet-400 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block shrink-0">
            <a
              href="#contact"
              className="px-5 py-2 rounded-full bg-white hover:bg-slate-200 text-slate-900 font-medium text-xs border border-transparent transition-all hover:scale-105 active:scale-95 shadow-lg shadow-white/10"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95, x: '-50%' }}
            animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }}
            exit={{ opacity: 0, y: -20, scale: 0.95, x: '-50%' }}
            className="fixed top-24 left-1/2 w-[90%] bg-slate-900 border border-white/10 rounded-2xl z-40 overflow-hidden shadow-2xl shadow-black/50 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 hover:text-violet-400 font-medium text-lg py-2 border-b border-white/5 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-6 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold shadow-lg shadow-violet-500/20"
              >
                Book Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;