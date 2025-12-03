import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import StatsSection from './components/StatsSection';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(true);

  // Simple loading simulation for smooth entrance
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-violet-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-violet-500/30 selection:text-violet-200 overflow-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <StatsSection />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>

      {/* Floating Social Icons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a href="#" className="p-3 bg-slate-900/80 backdrop-blur border border-white/10 rounded-full text-white hover:bg-rose-600 hover:border-rose-500 transition-all shadow-lg hover:scale-110 hover:shadow-rose-500/30 group" title="Instagram">
          <Instagram size={20} />
        </a>
        <a href="#" className="p-3 bg-slate-900/80 backdrop-blur border border-white/10 rounded-full text-white hover:bg-blue-600 hover:border-blue-500 transition-all shadow-lg hover:scale-110 hover:shadow-blue-500/30 group" title="Facebook">
          <Facebook size={20} />
        </a>
        <a href="#" className="p-3 bg-slate-900/80 backdrop-blur border border-white/10 rounded-full text-white hover:bg-blue-700 hover:border-blue-600 transition-all shadow-lg hover:scale-110 hover:shadow-blue-600/30 group" title="LinkedIn">
          <Linkedin size={20} />
        </a>
        <a href="#" className="p-3 bg-slate-900/80 backdrop-blur border border-white/10 rounded-full text-white hover:bg-green-500 hover:border-green-400 transition-all shadow-lg hover:scale-110 hover:shadow-green-500/30 group" title="WhatsApp">
          <MessageCircle size={20} />
        </a>
      </div>

      <Footer />

    </div>
  );
}

export default App;