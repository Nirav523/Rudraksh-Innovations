import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useAnimation } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  category: string;
  img: string;
}

const projects: Project[] = [
  { id: 1, title: 'New Animated Ideas', category: 'Animated', img: '/images/woman.jpg' },
  { id: 2, title: 'Diwali Special', category: 'Festival', img: '/images/Diwali.jpg' },
  { id: 3, title: 'Knowledge Trends', category: 'Informative', img: '/images/manager.jpg' },
  { id: 4, title: 'Product Launch', category: 'Product', img: '/images/product_1.jpg' },
  { id: 5, title: 'Christmas Campaign', category: 'Festival', img: '/images/Christmas.jpg' },
  { id: 6, title: 'Informative AI', category: 'Informative', img: '/images/jaipur.jpg' },
  { id: 7, title: 'Food & Beverage Ad', category: 'Product', img: '/images/food.jpg' },
  { id: 8, title: 'Animated Designs', category: 'Animated', img: '/images/hiring.jpg' },
  { id: 9, title: 'New Product', category: 'Product', img: '/images/bag.jpg' },
  { id: 10, title: 'New Year Special', category: 'festival', img: '/images/new-year.jpg' },
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
  const infiniteProjects = [...projects, ...projects];
  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const controls = useAnimation();

  const startAnimation = () => {
    if (!carouselRef.current) return;

    const oneSetWidth = carouselRef.current.scrollWidth / 2;
    const currentX = x.get();
    const duration = 30; // Duration for a full loop

    // To maintain consistent speed, calculate remaining duration
    const remainingDistance = -oneSetWidth - (currentX % oneSetWidth);
    const remainingDuration = (remainingDistance / -oneSetWidth) * duration;

    controls.start({
      x: -oneSetWidth,
      transition: {
        ease: 'linear',
        duration: remainingDuration,
        onComplete: () => {
          x.set(0);
          startAnimation(); // Manually loop
        },
      },
    });
  };

  useEffect(() => {
    // Delay to ensure dimensions are calculated before starting
    const timeout = setTimeout(startAnimation, 200);

    return () => {
      clearTimeout(timeout);
      controls.stop();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only once on mount

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
      <motion.div 
        ref={carouselRef} 
        className="relative w-full overflow-x-hidden py-10 cursor-grab"
        onHoverStart={() => controls.stop()}
        onHoverEnd={startAnimation}
      >
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />

        <motion.div
          className="flex active:cursor-grabbing pl-6"
          drag="x"
          dragConstraints={{ right: 0, left: -(carouselRef.current ? carouselRef.current.scrollWidth - carouselRef.current.offsetWidth : 0) }}
          style={{ x }}
          animate={controls}
        >
          {infiniteProjects.map((project, index) => (
            <div key={`${project.id}-${index}`} className="perspective-1000">
              <ProjectCard project={project} />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Portfolio;