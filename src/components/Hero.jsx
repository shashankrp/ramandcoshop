import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[750px] flex flex-col items-center justify-center overflow-hidden bg-brand-green">
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-full h-full bg-cover bg-center opacity-40 grayscale-[0.2]"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=2670&auto=format&fit=crop")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-green via-brand-green/40 to-brand-green"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-12 flex items-center justify-center gap-6">
            <div className="h-[1px] w-8 bg-brand-gold/40" />
            <span className="text-brand-gold font-bold tracking-[0.6em] text-[10px] uppercase">
              Proven Excellence Since 1984
            </span>
            <div className="h-[1px] w-8 bg-brand-gold/40" />
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[11rem] font-serif text-brand-cream leading-[0.8] mb-12 italic font-light">
            Diligent <br />
            <span className="not-italic font-bold text-brand-gold lg:text-9xl tracking-tight opacity-90">Essentials.</span>
          </h1>
          
          <div className="ornamental-line w-full max-w-[280px] mx-auto mb-12" />

          <p className="text-lg md:text-xl text-brand-cream/70 mb-16 max-w-xl mx-auto font-light leading-relaxed tracking-wide italic">
            "We believe in the quiet dignity of the daily pantry." <br />
            <span className="not-italic text-[10px] uppercase tracking-[0.3em] font-bold mt-4 block opacity-50 underline decoration-brand-gold/30 underline-offset-4">Davangere, Karnataka</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <motion.a
              whileHover={{ scale: 1.02 }}
              href="tel:09845352474"
              className="px-12 py-5 bg-brand-gold text-brand-green font-black text-[10px] uppercase tracking-[0.4em] transition-all"
            >
              Contact Concierge
            </motion.a>
            <motion.a
              whileHover={{ x: 5 }}
              href="#gallery"
              className="flex items-center gap-4 text-brand-cream/60 hover:text-brand-gold transition-all text-[9px] uppercase tracking-[0.4em] font-bold"
            >
              Browse Inventory
              <ArrowRight size={14} strokeWidth={1.5} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
