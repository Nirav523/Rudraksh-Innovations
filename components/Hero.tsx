import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { TrendingUp, Play } from 'lucide-react';
import { services } from './Services';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 200, damping: 40 });
  const mouseY = useSpring(y, { stiffness: 200, damping: 40 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative flex items-start lg:items-center pt-24 md:pt-28 pb-12 overflow-hidden bg-slate-950 lg:min-h-screen">
      {/* Background Blobs */}
      <div className="blob w-[600px] h-[600px] bg-violet-600/20 rounded-full top-[-20%] left-[-10%] blur-[120px]" />
      <div className="blob w-[500px] h-[500px] bg-fuchsia-600/20 rounded-full bottom-[-10%] right-[-10%] blur-[120px]" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border border-violet-500/20 bg-slate-900/50">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-fuchsia-500"></span>
            </span>
            <span className="text-sm font-medium text-violet-300">#1 AI-Powered Agency</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 text-white">
            Scale Your Brand <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 neon-text">
              Into The Future
            </span>
          </h1>

          <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
            We engineer viral content and high-ROI ad strategies using Rudraksh Innovations AI, ensuring your business dominates the digital landscape.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="contents">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full font-bold text-white shadow-xl shadow-violet-500/30 flex items-center gap-2"
              >
                <TrendingUp className="w-5 h-5" />
                Grow My Business
              </motion.button>
            </a>
            <a href="#portfolio" className="contents">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-slate-700 rounded-full font-bold text-white backdrop-blur-sm flex items-center gap-2 hover:border-violet-500/50 transition-colors"
              >
                <Play className="w-5 h-5 fill-white" />
                View Case Studies
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* Right Visuals - Holographic Service Matrix */}
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[600px] hidden lg:flex justify-center items-center [perspective:2000px]"
        >
          <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative w-[300px] h-[400px]">
            <motion.div
              className="absolute w-full h-full"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateY: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {services.map((service, i) => {
                const angle = (i / services.length) * 360;
                const radius = 220; // Carousel radius
                return (
                  <motion.div
                    key={service.id}
                    className="absolute top-1/2 left-1/2 w-[200px] h-[250px] -mt-[125px] -ml-[100px] p-6 bg-slate-900/70 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col justify-center items-center text-center shadow-2xl shadow-black/50"
                    style={{
                      transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    }}
                    whileHover={{
                      transform: `rotateY(${angle}deg) translateZ(${radius + 30}px) scale(1.05)`,
                      borderColor: 'rgba(139, 92, 246, 0.5)',
                      boxShadow: '0 10px 30px rgba(139, 92, 246, 0.2)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`p-4 rounded-full mb-4 ${service.color.replace('text-', 'bg-').replace('-500', '-500/10')}`}>
                      <service.icon className={`w-10 h-10 ${service.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-xs text-slate-400">{service.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;