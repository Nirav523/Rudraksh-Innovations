import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const Counter = ({ from, to }: { from: number; to: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true });
  
  useEffect(() => {
    if (!inView) return;
    
    const node = nodeRef.current;
    const controls = {
      value: from,
      stop: false
    };

    const duration = 2000; // ms
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      if (controls.stop) return;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      
      const currentVal = Math.floor(from + (to - from) * ease);
      
      if (node) {
        node.textContent = currentVal.toString();
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
    return () => { controls.stop = true; };
  }, [from, to, inView]);

  return <span ref={nodeRef} />;
};

const StatsSection: React.FC = () => {
  return (
    <section id="why-us" className="py-12 bg-slate-950 relative overflow-hidden scroll-mt-32">
      <div className="container mx-auto px-6">
        
        {/* Centered Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Why <span className="text-violet-500">Rudraksh?</span></h2>
          <p className="text-slate-400 mb-12 text-lg leading-relaxed">
            We don't just post content; we engineer growth. Our AI-driven algorithms paired with world-class creative talent ensure your brand doesn't just survive, but thrives in the competitive digital landscape.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left mb-16 max-w-2xl mx-auto">
            {['Data-Driven Strategy', '24/7 AI Analytics', 'Viral Content Engineering', 'Dedicated Success Manager'].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="text-violet-500 w-6 h-6 flex-shrink-0" />
                <span className="text-lg text-slate-300">{item}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="glass-panel p-6 rounded-2xl text-center transform hover:-translate-y-2 transition-transform duration-300 bg-slate-900/50 border border-white/5">
               <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-600 mb-2">
                 <Counter from={0} to={500} />+
               </div>
               <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Clients Scaled</div>
             </div>
             <div className="glass-panel p-6 rounded-2xl text-center transform hover:-translate-y-2 transition-transform duration-300 bg-slate-900/50 border border-white/5">
               <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-600 mb-2">
                 <Counter from={0} to={98} />%
               </div>
               <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Retention Rate</div>
             </div>
             <div className="glass-panel p-6 rounded-2xl text-center transform hover:-translate-y-2 transition-transform duration-300 bg-slate-900/50 border border-white/5">
               <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-600 mb-2">
                 <Counter from={0} to={10} />M+
               </div>
               <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Leads Generated</div>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default StatsSection;