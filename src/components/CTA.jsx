import React from 'react';
import { Phone, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section id="contact" className="py-40 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-6 mb-12">
             <div className="h-[1px] w-20 bg-brand-gold/30" />
             <span className="text-[10px] uppercase font-black tracking-[0.4em] text-brand-gold italic">Aisle Inquiry</span>
             <div className="h-[1px] w-20 bg-brand-gold/30" />
          </div>

          <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-serif text-brand-green leading-[0.85] tracking-tight mb-20 italic font-light">
            Visit the <br /> 
            <span className="not-italic font-bold text-brand-gold">Archive.</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <motion.a
              whileHover={{ y: -5 }}
              href="tel:09845352474"
              className="flex flex-col items-center gap-8 p-16 bg-brand-green text-brand-cream min-w-[340px] shadow-2xl group border border-brand-green transition-all hover:bg-brand-gold"
            >
              <Phone strokeWidth={1} size={48} className="group-hover:rotate-12 transition-transform" />
              <div className="text-center">
                <span className="text-[10px] uppercase font-black tracking-[0.4em] block mb-4 opacity-50 italic">Telephone Line</span>
                <span className="text-3xl font-serif italic tracking-tighter">+91 98453 52474</span>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ y: -5 }}
              href="https://www.google.com/maps/dir/?api=1&destination=Rama+%26+Co+Grocery+Store+Davangere"
              target="_blank"
              className="flex flex-col items-center gap-8 p-16 bg-white border border-brand-green/10 text-brand-green min-w-[340px] shadow-sm group transition-all hover:border-brand-gold"
            >
              <Navigation strokeWidth={1} size={48} className="text-brand-gold group-hover:translate-x-2 transition-transform" />
              <div className="text-center">
                <span className="text-[10px] uppercase font-black tracking-[0.4em] block mb-4 opacity-30 italic">Map Coordinates</span>
                <span className="text-3xl font-serif italic tracking-tighter">Navigate Store</span>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
