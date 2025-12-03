import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  category: string;
  img: string;
}

const projects: Project[] = [
  { id: 1, title: 'Rudraksh: Cyber Motion', category: 'Animated', img: 'https://placehold.co/600x800/1e1b4b/9333ea?text=Rudraksh\\nCyber+Motion' },
  { id: 2, title: 'Rudraksh: Diwali Special', category: 'Festival', img: 'https://placehold.co/600x800/78350f/fbbf24?text=Rudraksh\\nDiwali+Special' },
  { id: 3, title: 'Rudraksh: SEO Secrets', category: 'Informative', img: 'https://placehold.co/600x800/164e63/67e8f9?text=Rudraksh\\nSEO+Secrets' },
  { id: 4, title: 'Rudraksh: Product Launch', category: 'Product', img: 'https://placehold.co/600x800/1e40af/60a5fa?text=Rudraksh\\nProduct+Launch' },
  { id: 5, title: 'Rudraksh: Christmas Campaign', category: 'Festival', img: 'https://placehold.co/600x800/7f1d1d/fca5a5?text=Rudraksh\\nChristmas' },
  { id: 6, title: 'Rudraksh: AI Trends 2025', category: 'Informative', img: 'https://placehold.co/600x800/064e3b/6ee7b7?text=Rudraksh\\nAI+Trends' },
  { id: 7, title: 'Rudraksh: Food & Beverage Ad', category: 'Product', img: 'https://placehold.co/600x800/854d0e/fde047?text=Rudraksh\\nFood+Ad' },
  { id: 8, title: 'Rudraksh: Neon Vibes', category: 'Animated', img: 'https://placehold.co/600x800/4c0519/f472b6?text=Rudraksh\\nNeon+Vibes' },
  { id: 9, title: 'Rudraksh: Summer Sale', category: 'Product', img: 'https://placehold.co/600x800/065f46/6ee7b7?text=Rudraksh\\nSummer+Sale' },
  { id: 10, title: 'Rudraksh: Luxury Branding', category: 'Product', img: 'https://placehold.co/600x800/171717/d4d4d4?text=Rudraksh\\nLuxury+Branding' },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for 3D Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation for the tilt
  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  // Transform mouse position to rotation degrees
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const xPct = (e.clientX - rect.left) / width - 0.5;
    const yPct = (e.clientY - rect.top) / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative flex-shrink-0 w-[300px] md:w-[400px] h-[500px] md:h-[600px] rounded-[2rem] bg-slate-900 border border-white/10 overflow-hidden group mx-4 shadow-2xl shadow-black/50"
    >
      {/* Glow Border */}
      <div className="absolute inset-0 rounded-[2rem] ring-1 ring-white/10 group-hover:ring-violet-500/50 transition-all duration-500 z-20 pointer-events-none" />

      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full transform-gpu" style={{ transform: "translateZ(0px)" }}>
        <img 
          src={project.img} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
      </div>

      {/* Floating 3D Content */}
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="absolute bottom-0 left-0 p-8 w-full z-10"
      >
        <span className="inline-block px-3 py-1 mb-2 text-[10px] font-bold tracking-wider text-white uppercase bg-violet-600/80 backdrop-blur-md rounded-full shadow-lg">
          {project.category}
        </span>
        <h3 className="text-3xl font-bold text-white leading-tight drop-shadow-md">
          {project.title}
        </h3>
      </div>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
  // Duplicate projects for infinite loop
  const infiniteProjects = [...projects, ...projects, ...projects];

  return (
    <section id="portfolio" className="py-12 bg-slate-950 relative overflow-hidden scroll-mt-32">
      {/* Dynamic Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[500px] bg-violet-500/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
           <motion.div 
              initial={{ width: 0 }} 
              whileInView={{ width: "100px" }} 
              className="h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mb-6"
            />
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">Gallery</span>
            </h2>
        </div>
        <div className="md:hidden">
           <p className="text-slate-400">Swipe to explore →</p>
        </div>
      </div>

      {/* Horizontal Scrolling Area */}
      <div className="relative w-full overflow-x-hidden py-10">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />

        <motion.div
          className="flex cursor-grab active:cursor-grabbing pl-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          {infiniteProjects.map((project, index) => (
            <div key={`${project.id}-${index}`} className="perspective-1000">
              <ProjectCard project={project} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;