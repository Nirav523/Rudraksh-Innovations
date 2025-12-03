import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  { id: 1, name: 'Sarah Jenkins', role: 'CMO', company: 'TechFlow', content: "Rudraksh Innovations completely revolutionized our online presence. Our engagement is up 300% in just 3 months.", image: 'https://picsum.photos/id/32/100/100' },
  { id: 2, name: 'Mike Ross', role: 'Founder', company: 'Spectra', content: "The AI insights they provide are game-changing. We stopped guessing and started growing.", image: 'https://picsum.photos/id/64/100/100' },
  { id: 3, name: 'Jessica Lee', role: 'Director', company: 'LuxeLiving', content: "Professional, futuristic, and results-driven. The best agency we've ever worked with.", image: 'https://picsum.photos/id/91/100/100' },
  { id: 4, name: 'David Chen', role: 'CEO', company: 'Orbit', content: "Our ROI on paid ads doubled within the first month. The automation tools are incredible.", image: 'https://picsum.photos/id/103/100/100' },
];

const Testimonials: React.FC = () => {
  // Duplicate for scroll
  const scrollItems = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-12 bg-slate-950 relative overflow-hidden">
       {/* Background Elements */}
       <div className="blob w-[300px] h-[300px] bg-violet-500/10 rounded-full top-20 right-[-100px] blur-[80px]" />
       <div className="blob w-[300px] h-[300px] bg-fuchsia-600/10 rounded-full bottom-20 left-[-100px] blur-[80px]" />

      <div className="container mx-auto px-6 mb-16 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4 text-white">Client <span className="text-fuchsia-500">Stories</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto">See how we are transforming businesses with AI-driven marketing.</p>
      </div>
        
      {/* Reverse Scroll Carousel */}
      <div className="relative w-full overflow-hidden py-8">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />
        
        <motion.div 
          className="flex gap-6 px-6"
          animate={{ x: ["-33.33%", "0%"] }} // Reverse direction
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          style={{ width: "max-content" }}
        >
          {scrollItems.map((t, index) => (
            <div
              key={`${t.id}-${index}`}
              className="w-[350px] bg-slate-900/50 p-8 rounded-2xl relative flex-shrink-0 group hover:border-violet-500/50 border border-white/5 shadow-xl shadow-black/20 transition-colors duration-300 backdrop-blur-sm"
            >
              <Quote className="absolute top-6 right-6 text-violet-500/10 w-12 h-12 group-hover:text-violet-500/20 transition-colors" />
              
              <div className="flex gap-1 mb-4">
                 {[1,2,3,4,5].map(s => <Star key={s} size={14} className="fill-fuchsia-500 text-fuchsia-500" />)}
              </div>

              <p className="text-slate-300 mb-6 relative z-10 italic leading-relaxed">"{t.content}"</p>
              
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-violet-500/30 object-cover" />
                <div>
                  <h4 className="font-bold text-white group-hover:text-fuchsia-400 transition-colors">{t.name}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;