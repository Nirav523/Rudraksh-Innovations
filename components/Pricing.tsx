import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '₹ 6999',
    features: ['16 Social Posts/mo', 'Community Management', 'Monthly Report', '1 Reel'],
    recommended: false,
  },
  {
    name: 'Growth',
    price: '₹ 10,499',
    features: ['20 Social Posts/mo', '2 Reels/Shorts', 'Community Management', 'Paid Ad Management', 'Monthly Reports'],
    recommended: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Unlimited Posts', 'Daily Reels', 'Dedicated Team', '24/7 Support', 'Full Branding', 'Adv. Analytics'],
    recommended: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-12 bg-slate-950 relative perspective-1000 overflow-hidden scroll-mt-32">
      <div className="blob w-[800px] h-[800px] bg-violet-500/10 rounded-full bottom-[-400px] left-1/2 -translate-x-1/2 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Transparent <span className="text-fuchsia-500">Pricing</span></h2>
          <p className="text-slate-400 text-lg">Choose the package that fits your scaling needs.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, rotateX: 30, y: 100 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.8, type: "spring", bounce: 0.3 }}
              className={`relative p-8 rounded-3xl backdrop-blur-xl border transition-all duration-300 group ${
                plan.recommended 
                  ? 'bg-slate-900 border-violet-500 shadow-2xl shadow-violet-500/20 md:scale-110 z-10' 
                  : 'bg-slate-900/50 border-white/5 hover:border-violet-500/30 hover:shadow-xl shadow-lg shadow-black/30'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-2 shadow-lg">
                  <Sparkles size={12} fill="currentColor" /> Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-medium text-slate-300 mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-white tracking-tight">{plan.price}</span>
                  <span className="text-slate-500">/mo</span>
                </div>
              </div>

              <div className={`h-px w-full mb-8 ${plan.recommended ? 'bg-violet-500/30' : 'bg-white/10'}`}></div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <div className={`mt-0.5 p-0.5 rounded-full ${plan.recommended ? 'bg-violet-500 text-white' : 'bg-slate-800 text-slate-400'}`}>
                       <Check className="w-3 h-3" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a
                href="#contact"
                className={`block text-center w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                  plan.recommended
                    ? 'bg-violet-500 text-white hover:bg-violet-400 hover:scale-105 shadow-xl shadow-violet-500/20'
                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                }`}
              >
                Choose Plan
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;