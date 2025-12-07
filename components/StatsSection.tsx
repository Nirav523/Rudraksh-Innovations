import React from 'react';
import { motion } from 'framer-motion';
import { ScanSearch, Flame, Crosshair, TrendingUp, ChevronRight, ArrowDown, Eye, BrainCircuit, Check } from 'lucide-react';

const stages = [
  {
    num: '01',
    title: 'The Deep Scan',
    subtitle: 'Audit & Insight',
    problem: 'Most brands fly blind.',
    solution: "We deploy AI auditors to analyze your competitor's ad spend, audience gaps, and your current brand health. We don't start until we know exactly where the money is hiding.",
    deliverable: '360° Digital Blueprint.',
    visual: 'scan-visual',
    icon: ScanSearch,
  },
  {
    num: '02',
    title: 'Viral Engineering',
    subtitle: 'Content Creation',
    problem: 'Content that gets ignored.',
    solution: 'We use "retention-based" scripting. Our team engineers visuals and hooks designed to trigger platform algorithms. We prioritize high-watch-time Reels and click-heavy ad creatives.',
    deliverable: '20+ AI-Enhanced Assets/Month.',
    visual: 'viral-visual',
    icon: Flame,
  },
  {
    num: '03',
    title: 'Precision Targeting',
    subtitle: 'Distribution',
    problem: 'Wasted budget on wrong leads.',
    solution: 'We launch cross-platform campaigns using hyper-targeting to reach the top 1% of users ready to buy, utilizing Meta Ads and Local SEO dominance.',
    deliverable: 'High-Intent Lead Generation.',
    visual: 'targeting-visual',
    icon: Crosshair,
  },
  {
    num: '04',
    title: 'The Scale Loop',
    subtitle: 'Optimization',
    problem: 'Stagnant growth.',
    solution: 'Our systems monitor campaigns 24/7. We kill losers, double down on winners, and retarget "almost-buyers" via email automation for maximum ROI.',
    deliverable: 'Predictable Revenue Scaling.',
    visual: 'scale-visual',
    icon: TrendingUp,
  },
];

const StatsSection: React.FC = () => {
  return (
    <section id="why-us" className="py-20 md:py-24 bg-slate-950 relative overflow-hidden scroll-mt-32">
      
      {/* Part 1: The Company View (The "Soul") */}
      <div className="relative container mx-auto px-6 text-center mb-20 md:mb-32">
        <div className="absolute inset-0 -z-10 mystic-bg"></div>
        <style>{`.mystic-bg { background-image: radial-gradient(ellipse at center, rgba(139, 92, 246, 0.05), transparent 70%); }`}</style>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            The Rudraksh DNA: <span className="text-violet-500">Soul & Science</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-16">
            We're not just another agency. We are a hybrid, built on ancient principles of focus and powered by next-generation artificial intelligence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 text-left max-w-6xl mx-auto">
          {/* The Soul */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel p-8 rounded-3xl bg-slate-900/50 border border-white/10 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <Eye className="w-10 h-10 text-violet-400" />
              <h3 className="text-3xl font-bold text-white">The Soul: <span className="font-light">Ancient Wisdom</span></h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-violet-300 mb-2 text-sm uppercase tracking-wider">The Power of the Name</h4>
                <p className="text-slate-300 leading-relaxed">"Rudraksh" symbolizes focus, clarity, and protection. In a world saturated with digital noise, we provide the clarity to see what truly matters, focusing your message with laser precision.</p>
              </div>
              <div>
                <h4 className="font-bold text-violet-300 mb-2 text-sm uppercase tracking-wider">Our Core Values</h4>
                <ul className="space-y-1 text-slate-300">
                  <li className="flex items-center gap-2"><Check size={16} className="text-violet-400" /> Radical Transparency</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-violet-400" /> Obsessive ROI</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-violet-400" /> Creative Courage</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* The Science */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-panel p-8 rounded-3xl bg-slate-900/50 border border-white/10 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <BrainCircuit className="w-10 h-10 text-fuchsia-400" />
              <h3 className="text-3xl font-bold text-white">The Science: <span className="font-light">Integrated Digital Mastery</span></h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-fuchsia-300 mb-2 text-sm uppercase tracking-wider">An Innovation & Growth Engine</h4>
                <p className="text-slate-300 leading-relaxed">We are more than a marketing agency. We are architects of digital success. By applying our AI-powered, data-first methodology across social media, web development, and IT consulting, we build cohesive ecosystems that drive measurable growth.</p>
              </div>
              <div>
                <h4 className="font-bold text-fuchsia-300 mb-2 text-sm uppercase tracking-wider">Our Mission & Vision</h4>
                <p className="text-slate-300 leading-relaxed"><strong className="text-white">Mission:</strong> To empower businesses with integrated digital solutions, from intelligent marketing and high-performance web platforms to strategic IT consulting.</p>
                <p className="text-slate-300 leading-relaxed"><strong className="text-white">Vision:</strong> A future where businesses of all sizes leverage cutting-edge technology to achieve sustainable growth and digital dominance.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Part 2: The Marketing Strategy (The "Brain") */}
      <div className="relative container mx-auto px-6 mt-20 md:mt-0">
        <div className="absolute inset-0 -z-10 tech-grid-bg-wrapper">
            <div className="absolute inset-0 tech-grid-bg opacity-20 pointer-events-none"></div>
        </div>
        <style>{`
            .tech-grid-bg {
                background-image: linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px);
                background-size: 40px 40px;
            }
            .protocol-card::before {
                content: '';
                position: absolute;
                inset: 0;
                border-radius: 1.5rem; /* rounded-3xl */
                opacity: 0;
                transition: opacity 0.4s ease-in-out;
                z-index: -1;
            }
            .protocol-card:hover::before { opacity: 0.15; }
            .scan-visual::before {
                background-image: radial-gradient(circle at 20% 20%, #a78bfa 0%, transparent 30%),
                                  linear-gradient(45deg, transparent 48%, #a78bfa 50%, transparent 52%);
                background-size: 200% 200%, 50px 50px;
                animation: scan 8s linear infinite;
            }
            @keyframes scan { to { background-position: -200% -200%, 0 0; } }
            .viral-visual::before {
                background-image: radial-gradient(circle at 50% 100%, #d946ef 0%, transparent 20%);
                background-size: 20px 20px;
                animation: rise 6s linear infinite;
            }
            @keyframes rise { to { background-position: 0 -100px; } }
            .targeting-visual::before {
                background-image: radial-gradient(circle at center, transparent 30%, #a78bfa 31%, transparent 32%),
                                  radial-gradient(circle at center, transparent 60%, #a78bfa 61%, transparent 62%);
            }
            .scale-visual::before {
                background-image: url("data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0 100 L25 75 L50 80 L75 50 L100 55' fill='none' stroke='%23d946ef' stroke-width='2'/%3e%3c/svg%3e");
                background-repeat: repeat-x;
                background-position: 0 100%;
                animation: graph 4s linear infinite;
            }
            @keyframes graph { to { background-position: -100px 100%; } }
        `}</style>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our Growth <span className="text-fuchsia-500">Protocol</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            From Stranger to Loyal Customer: The 4-Stage Strategy.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:items-stretch gap-y-8 lg:gap-x-0">
          {stages.map((stage, index) => (
            <React.Fragment key={stage.num}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`protocol-card relative overflow-hidden bg-slate-900/70 backdrop-blur-sm border border-white/10 rounded-3xl p-6 text-left h-full flex flex-col w-full max-w-sm lg:max-w-none lg:flex-1 group hover:border-violet-500/50 transition-all duration-300 ${stage.visual} hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative flex-shrink-0 w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center border border-white/10 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <stage.icon className="w-8 h-8 text-violet-300 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{stage.title}</h3>
                    <p className="text-sm text-violet-400 font-semibold tracking-wider uppercase">{stage.subtitle}</p>
                  </div>
                </div>
                <div className="flex-grow space-y-3 text-sm text-slate-400">
                  <p><strong className="text-slate-300">Problem:</strong> {stage.problem}</p>
                  <p><strong className="text-slate-300">Solution:</strong> {stage.solution}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <p className="text-xs font-semibold text-fuchsia-400 tracking-wide"><span className="font-bold">Deliverable:</span> {stage.deliverable}</p>
                </div>
              </motion.div>

              {index < stages.length - 1 && (
                <>
                  <div className="hidden lg:flex items-center justify-center flex-shrink-0 px-4">
                    <ChevronRight className="w-8 h-8 text-slate-700" />
                  </div>
                  <div className="lg:hidden flex items-center justify-center flex-shrink-0 py-4">
                    <ArrowDown className="w-8 h-8 text-slate-700" />
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-16 text-center flex flex-wrap justify-center gap-4">
            <a href="#portfolio" className="contents">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-slate-800 border border-slate-700 rounded-full font-bold text-white hover:bg-slate-700 hover:border-violet-500 transition-colors"
              >
                See This Strategy in Action
              </motion.button>
            </a>
            <a href="#contact" className="contents">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full font-bold text-white shadow-lg shadow-violet-500/30 transition-all"
              >
                Apply This Strategy to My Business
              </motion.button>
            </a>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;