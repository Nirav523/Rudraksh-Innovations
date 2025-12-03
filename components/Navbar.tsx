import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
              <div className="relative group-hover:rotate-12 transition-transform duration-300 z-10">
                <svg className="w-8 h-8" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="logo">
                  <defs>
                    {/* main gradient for top ribbon */}
                    <linearGradient id="gTop" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#7fe3d6"/>
                      <stop offset="0.55" stopColor="#4bd6d1"/>
                      <stop offset="1" stopColor="#2aa7c9"/>
                    </linearGradient>

                    {/* darker gradient for bottom ribbon */}
                    <linearGradient id="gBot" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#4ba8b6"/>
                      <stop offset="0.5" stopColor="#3b98a8"/>
                      <stop offset="1" stopColor="#2c7a8a"/>
                    </linearGradient>

                    {/* inner bevel highlight */}
                    <linearGradient id="edge" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="rgba(255,255,255,0.48)"/>
                      <stop offset="1" stopColor="rgba(255,255,255,0.06)"/>
                    </linearGradient>

                    <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur in="SourceAlpha" stdDeviation="6" result="blur"/>
                      <feOffset in="blur" dx="0" dy="6" result="offset"/>
                      <feMerge>
                        <feMergeNode in="offset"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  {/* center coordinates: we will build a rotated, isometric ribbon */}
                  <g transform="translate(120,120)">

                    {/* bottom ribbon (slightly behind) */}
                    <g transform="rotate(20)">
                      {/* outer shape (isometric ribbon lower section) */}
                      <path d=" M -80,0 L -30,-48 L 30,-48 L 80,0 L 30,48 L -30,48 Z " fill="url(#gBot)"/>
                      {/* inner cut to give ribbon thickness */}
                      <path d=" M -40,0 L -10,-24 L 10,-24 L 40,0 L 10,24 L -10,24 Z " fill="black" fillOpacity="0.08"/>

                      {/* top edge highlight */}
                      <path d=" M -80,0 L -30,-48 L -10,-24 L -40,0 Z " fill="url(#edge)" opacity="0.28"/>

                      {/* bottom edge shadow */}
                      <path d=" M 80,0 L 30,48 L 10,24 L 40,0 Z " fill="rgba(0,0,0,0.18)"/>
                    </g>

                    {/* top ribbon (in front) */}
                    <g transform="rotate(-20)">
                      <path d=" M -80,0 L -30,-48 L 30,-48 L 80,0 L 30,48 L -30,48 Z " fill="url(#gTop)"/>
                      <path d=" M -40,0 L -10,-24 L 10,-24 L 40,0 L 10,24 L -10,24 Z " fill="black" fillOpacity="0.06"/>

                      {/* bevel highlight */}
                      <path d=" M 30,-48 L 80,0 L 40,0 L 10,-24 Z " fill="url(#edge)" opacity="0.26"/>

                      {/* inner shadow for depth */}
                      <path d=" M -30,48 L -80,0 L -40,0 L -10,24 Z " fill="rgba(0,0,0,0.12)"/>
                    </g>

                    {/* small center diamond/hole */}
                    <g transform="rotate(0)">
                      <path d=" M 0,-12 L 10,0 L 0,12 L -10,0 Z " fill="#00121a" />
                      <path d=" M 0,-9 L 6,0 L 0,9 L -6,0 Z " fill="rgba(255,255,255,0.06)"/>
                    </g>

                    {/* subtle inner outline to emulate edge */}
                    <g>
                      <path d=" M -80,0 L -30,-48 L 30,-48 L 80,0 L 30,48 L -30,48 Z " fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" opacity="0.9"/>
                    </g>

                  </g>
                </svg>
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