import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { services } from './Services';

const Contact: React.FC = () => {
  const formId = 'mblnkwlq';
  const [state, handleSubmit] = useForm(formId);
  
  useEffect(() => {
    if (state.succeeded) {
      window.location.reload();
    }
  }, [state.succeeded]);
  
  if (state.succeeded) {
    return (
      <section id="contact" className="py-20 md:py-32 bg-slate-950">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <h3 className="text-2xl font-bold text-white mb-2">Submitting...</h3>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-950">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Let's Build Together</h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-12">
          Have a project in mind? Fill out the form below and we'll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto text-left">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-300">Name</label>
            <input type="text" id="name" name="name" required className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition" />
            <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-sm mt-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-300">Email</label>
            <input type="email" id="email" name="email" required className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition" />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm mt-1" />
          </div>
          <div className="mb-6">
            <label htmlFor="service" className="block mb-2 text-sm font-medium text-slate-300">Select Service</label>
            <select id="service" name="service" required defaultValue="" className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition appearance-none bg-no-repeat bg-right pr-8" style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2394a3b8' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em' }}>
              <option value="" disabled>Choose a service...</option>
              {services.map(service => (
                <option key={service.id} value={service.title}>{service.title}</option>
              ))}
            </select>
            <ValidationError prefix="Service" field="service" errors={state.errors} className="text-red-400 text-sm mt-1" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-slate-300">Description</label>
            <textarea id="message" name="message" rows={4} required className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition"></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm mt-1" />
          </div>
          <div className="text-center">
            <button type="submit" disabled={state.submitting} className="px-8 py-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold shadow-lg shadow-violet-500/20 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed">
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;