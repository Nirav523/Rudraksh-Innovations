import React from 'react';
import { Instagram, Linkedin, Facebook, MessageCircle, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 relative overflow-hidden pt-0 pb-8 border-t border-white/5">
      
      {/* Animated Marquee Border */}
      <div className="relative w-full py-3 bg-violet-900/10 border-b border-white/5 overflow-hidden flex items-center">
         <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 z-10" />
         <div className="whitespace-nowrap flex gap-8 animate-scroll text-xs font-bold tracking-[0.2em] text-violet-500/40 select-none">
            {[1,2,3,4,5,6,7,8,9,10].map(i => (
                <React.Fragment key={i}>
                    <span>RUDRAKSH INNOVATIONS</span>
                    <span>•</span>
                    <span>AI POWERED MARKETING</span>
                    <span>•</span>
                    <span>FUTURE READY</span>
                    <span>•</span>
                </React.Fragment>
            ))}
         </div>
      </div>

      {/* Grid Background Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none -z-0" />

      <div className="container mx-auto px-6 relative z-10 pt-10">
        <div className="grid md:grid-cols-12 gap-8 mb-8">
          
          {/* Brand Column (Span 4) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
                <div className="flex items-center gap-2 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-violet-500 blur-[10px] opacity-30"></div>
                  <div className="relative z-10">
                    <svg className="w-8 h-8" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="logo">
                      <defs>
                        {/* main gradient for top ribbon */}
                        <linearGradient id="gTopFooter" x1="0" x2="1" y1="0" y2="1">
                          <stop offset="0" stopColor="#7fe3d6"/>
                          <stop offset="0.55" stopColor="#4bd6d1"/>
                          <stop offset="1" stopColor="#2aa7c9"/>
                        </linearGradient>

                        {/* darker gradient for bottom ribbon */}
                        <linearGradient id="gBotFooter" x1="0" x2="1" y1="0" y2="1">
                          <stop offset="0" stopColor="#4ba8b6"/>
                          <stop offset="0.5" stopColor="#3b98a8"/>
                          <stop offset="1" stopColor="#2c7a8a"/>
                        </linearGradient>

                        {/* inner bevel highlight */}
                        <linearGradient id="edgeFooter" x1="0" x2="1" y1="0" y2="1">
                          <stop offset="0" stopColor="rgba(255,255,255,0.48)"/>
                          <stop offset="1" stopColor="rgba(255,255,255,0.06)"/>
                        </linearGradient>

                        <filter id="softShadowFooter" x="-50%" y="-50%" width="200%" height="200%">
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
                          <path d=" M -80,0 L -30,-48 L 30,-48 L 80,0 L 30,48 L -30,48 Z " fill="url(#gBotFooter)"/>
                          <path d=" M -40,0 L -10,-24 L 10,-24 L 40,0 L 10,24 L -10,24 Z " fill="black" fillOpacity="0.08"/>
                          <path d=" M -80,0 L -30,-48 L -10,-24 L -40,0 Z " fill="url(#edgeFooter)" opacity="0.28"/>
                          <path d=" M 80,0 L 30,48 L 10,24 L 40,0 Z " fill="rgba(0,0,0,0.18)"/>
                        </g>

                        {/* top ribbon (in front) */}
                        <g transform="rotate(-20)">
                          <path d=" M -80,0 L -30,-48 L 30,-48 L 80,0 L 30,48 L -30,48 Z " fill="url(#gTopFooter)"/>
                          <path d=" M -40,0 L -10,-24 L 10,-24 L 40,0 L 10,24 L -10,24 Z " fill="black" fillOpacity="0.06"/>
                          <path d=" M 30,-48 L 80,0 L 40,0 L 10,-24 Z " fill="url(#edgeFooter)" opacity="0.26"/>
                          <path d=" M -30,48 L -80,0 L -40,0 L -10,24 Z " fill="rgba(0,0,0,0.12)"/>
                        </g>

                        <g transform="rotate(0)">
                          <path d=" M 0,-12 L 10,0 L 0,12 L -10,0 Z " fill="#00121a" />
                          <path d=" M 0,-9 L 6,0 L 0,9 L -6,0 Z " fill="rgba(255,255,255,0.06)"/>
                        </g>

                        <g>
                          <path d=" M -80,0 L -30,-48 L 30,-48 L 80,0 L 30,48 L -30,48 Z " fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" opacity="0.9"/>
                        </g>

                      </g>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-white font-space leading-none tracking-tight">Rudraksh</span>
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-500">Innovations</span>
                </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
                Redefining digital dominance. We merge creative brilliance with algorithmic precision to build brands that lead the future.
                </p>
                
                {/* Future CTA */}
                <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-violet-900/50 via-slate-900 to-slate-900 border border-white/10 max-w-sm shadow-lg">
                    <p className="text-lg font-bold text-white mb-2">Your brand's future starts here.</p>
                    <p className="text-xs text-slate-400 mb-4">Let's discuss how our AI can elevate your strategy.</p>
                    <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-fuchsia-400 hover:text-fuchsia-300 transition-colors group">
                        <span>Book a Free Consultation</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
          </div>
          
          {/* Links Columns (Span 2 each) */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-fuchsia-500 rounded-full"></span> Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-fuchsia-400 transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">Social Growth</a></li>
              <li><a href="#" className="hover:text-fuchsia-400 transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">Paid Ads</a></li>
              <li><a href="#" className="hover:text-fuchsia-400 transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">Content</a></li>
              <li><a href="#" className="hover:text-fuchsia-400 transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">Web Design</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-violet-500 rounded-full"></span> Company
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-violet-400 transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">About</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Social Column (Span 3) */}
          <div className="md:col-span-3">
             <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-blue-500 rounded-full"></span> Connect
            </h4>
            <div className="grid grid-cols-4 gap-3">
               <a href="https://www.instagram.com/rudraksh_innovations_/" target="_blank" rel="noopener noreferrer" className="aspect-square rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center hover:bg-rose-600 hover:border-rose-500 transition-all group shadow-lg hover:shadow-rose-900/20 hover:-translate-y-1">
                  <Instagram className="w-5 h-5 text-slate-400 group-hover:text-white" />
               </a>
               <a href="#" className="aspect-square rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all group shadow-lg hover:shadow-blue-900/20 hover:-translate-y-1">
                  <Facebook className="w-5 h-5 text-slate-400 group-hover:text-white" />
               </a>
               <a href="#" className="aspect-square rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center hover:bg-blue-700 hover:border-blue-600 transition-all group shadow-lg hover:shadow-blue-900/20 hover:-translate-y-1">
                  <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-white" />
               </a>
               <a href="https://wa.me/917874331074" target="_blank" rel="noopener noreferrer" className="aspect-square rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center hover:bg-green-500 hover:border-green-400 transition-all group shadow-lg hover:shadow-green-900/20 hover:-translate-y-1">
                  <MessageCircle className="w-5 h-5 text-slate-400 group-hover:text-white" />
               </a>
            </div>
            <div className="mt-6 p-4 rounded-xl bg-slate-900/50 border border-white/5">
                <p className="text-xs text-slate-500">Need immediate assistance?</p>
                <p className="text-sm font-bold text-white mt-1 font-mono">+91 78743 31074 | +91 81281 55486</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; 2025 Rudraksh Innovations. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
      
      {/* Animation Style */}
      <style>{`
        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-scroll {
            animation: scroll 30s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;