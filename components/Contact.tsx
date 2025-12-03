import React, { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, ChevronDown } from 'lucide-react';
import { services } from './Services';

const Contact: React.FC = () => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // On successful submission, reload the page
        window.location.reload();
      } else {
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please check your connection.");
    }
  };
  return (
    <section id="contact" className="py-12 bg-slate-950 relative overflow-hidden scroll-mt-32">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Start Your <span className="text-fuchsia-500">Journey</span></h2>
          <p className="text-slate-400 text-lg">Ready to dominate your niche? Fill out the form below and our team will craft your strategy.</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, rotateX: 20, y: 60 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-slate-900/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl shadow-black/50 relative overflow-hidden group">
            
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

            <form
              action="https://formspree.io/f/mzzngvaj" // Replace with your Formspree endpoint
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6 relative z-10"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-slate-400 font-medium ml-1">First Name</label>
                  <input name="firstName" required type="text" placeholder="John" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-5 py-4 focus:border-violet-500 focus:bg-slate-800 outline-none text-white transition-all shadow-inner placeholder:text-slate-600" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-slate-400 font-medium ml-1">Last Name</label>
                  <input name="lastName" required type="text" placeholder="Doe" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-5 py-4 focus:border-violet-500 focus:bg-slate-800 outline-none text-white transition-all shadow-inner placeholder:text-slate-600" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-slate-400 font-medium ml-1">Email Address</label>
                <input name="email" required type="email" placeholder="john@company.com" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-5 py-4 focus:border-violet-500 focus:bg-slate-800 outline-none text-white transition-all shadow-inner placeholder:text-slate-600" />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-400 font-medium ml-1">Service Interest</label>
                <div className="relative">
                  <select name="service" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-5 py-4 focus:border-violet-500 focus:bg-slate-800 outline-none text-slate-300 transition-all shadow-inner appearance-none cursor-pointer pr-10">
                    <option className="bg-slate-900" value="General Inquiry">Select Service</option>
                    {services.map((service) => (
                      <option key={service.id} className="bg-slate-900" value={service.title}>{service.title}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-400 font-medium ml-1">Project Details</label>
                <textarea name="details" rows={4} placeholder="Tell us about your goals..." className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-5 py-4 focus:border-violet-500 focus:bg-slate-800 outline-none text-white transition-all shadow-inner resize-none placeholder:text-slate-600"></textarea>
              </div>

              <motion.button 
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(139,92,246,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 group-hover:brightness-110 transition-all"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;