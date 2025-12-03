import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail,
  Instagram, 
  Megaphone, 
  Video, 
  Palette, 
  Globe, 
  Users, 
  Search 
} from 'lucide-react';
import { Service } from '../types';

export const services: Service[] = [
  { id: 1, title: 'Social Media Mgmt', description: 'Full-service account handling across all platforms.', icon: Users, color: 'text-violet-500' },
  { id: 2, title: 'Instagram Growth', description: 'Organic strategies to skyrocket your followers.', icon: Instagram, color: 'text-rose-500' },
  { id: 3, title: 'Paid Ads', description: 'High-ROI Meta & Google advertising campaigns.', icon: Megaphone, color: 'text-fuchsia-500' },
  { id: 4, title: 'Reel Production', description: 'Viral-worthy short-form video editing.', icon: Video, color: 'text-yellow-500' },
  { id: 5, title: 'Branding', description: 'Premium identity design and graphics.', icon: Palette, color: 'text-purple-500' },
  { id: 6, title: 'Web Development', description: 'Futuristic, high-converting websites.', icon: Globe, color: 'text-blue-500' },
  { id: 7, title: 'Email Marketing', description: 'Targeted email campaigns to nurture and convert leads.', icon: Mail, color: 'text-pink-500' },
  { id: 8, title: 'SEO & Local SEO', description: 'Dominate search results and get found.', icon: Search, color: 'text-emerald-500' },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-12 relative bg-slate-950 overflow-hidden scroll-mt-32">
      {/* Decor */}
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40, rotateX: 20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 perspective-1000"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400 text-sm font-medium mb-6 backdrop-blur-sm">
            What We Do
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our <span className="text-fuchsia-500">Expertise</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Comprehensive digital solutions engineered for the modern era of marketing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.6, type: "spring" }}
              whileHover={{ y: -10, rotateX: 5, z: 20 }}
              className="group relative h-full transform-gpu preserve-3d"
            >
              <a href="#contact" className="block h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity blur-lg -z-10" />
                <div className="relative h-full bg-slate-900/50 border border-white/5 p-8 rounded-2xl overflow-hidden group-hover:border-violet-500/30 transition-all shadow-lg hover:shadow-2xl hover:shadow-violet-500/10 backdrop-blur-sm">
                  
                  <div className={`w-14 h-14 rounded-xl bg-slate-800/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5 ${service.color}`}>
                    <service.icon size={28} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-violet-400 transition-colors">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 group-hover:text-slate-300">{service.description}</p>
                  
                  <div className="flex items-center gap-2 text-xs font-bold text-violet-400 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                     <span>LEARN MORE</span>
                     <div className="w-4 h-px bg-violet-400"></div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;