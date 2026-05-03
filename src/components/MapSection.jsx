import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export default function MapSection() {
  return (
    <section className="bg-white py-32 border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Centered Header Context */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[11px] uppercase tracking-[0.5em] font-black text-brand-gold mb-8 italic">The Presence</h2>
            <h3 className="text-5xl md:text-7xl font-serif text-brand-green leading-[1.1] mb-10 font-light italic">
              A Landmark <br />
              <span className="not-italic font-bold text-brand-gold">in Davangere.</span>
            </h3>
            <p className="text-lg text-brand-green/60 font-light leading-relaxed mb-10 italic">
              "Located on the historic 4th Main Rd, we are easily accessible for all residents. Find us at the junction of quality and tradition."
            </p>
            <div className="h-[1px] w-24 bg-brand-gold/30 mx-auto" />
          </motion.div>
        </div>
        
        <motion.div 
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="relative shadow-2xl border border-gray-100 group"
        >
          {/* Map Container with Diligent Overlay */}
          <div className="h-[600px] w-full bg-gray-50 overflow-hidden relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.608027781034!2d75.9221111!3d14.4633333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbaddfa37395069%3A0x7d0e445033c94f5f!2sRama%20%26%20Co%20Grocery%20Store!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(0.5) contrast(1.1) brightness(0.95)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="transition-all duration-1000 group-hover:grayscale-0"
            ></iframe>
            
            {/* Absolute Labels for architectural feel */}
            <div className="absolute top-12 left-12 p-8 bg-white/90 backdrop-blur-md shadow-xl border-l-[3px] border-brand-gold hidden md:block">
              <span className="text-[9px] uppercase tracking-[0.4em] font-black text-brand-gold block mb-2">Coordinates</span>
              <p className="text-brand-green font-serif text-lg italic">14.4633° N, 75.9221° E</p>
              <div className="mt-6 flex items-center gap-3">
                 <div className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse" />
                 <span className="text-[8px] uppercase tracking-widest font-bold text-brand-green/40">In-Store Shopping Active</span>
              </div>
            </div>

            <a 
              href="https://maps.app.goo.gl/YourGoogleMapsLinkHere"
              target="_blank"
              className="absolute bottom-12 right-12 bg-brand-green text-white px-10 py-5 text-[10px] uppercase font-black tracking-[0.4em] shadow-2xl hover:bg-brand-gold transition-colors flex items-center gap-3 group/link"
            >
               Open Navigation <ExternalLink size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Distributed info below map */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-t border-gray-100 pt-16">
          <div>
            <span className="block text-brand-gold text-[10px] uppercase tracking-[0.4em] font-black mb-4">The Street</span>
            <p className="text-xl font-serif text-brand-green italic">4th Main Road, P.J Extension</p>
          </div>
          <div>
            <span className="block text-brand-gold text-[10px] uppercase tracking-[0.4em] font-black mb-4">The City</span>
            <p className="text-xl font-serif text-brand-green italic">Davangere, Karnataka</p>
          </div>
          <div>
            <span className="block text-brand-gold text-[10px] uppercase tracking-[0.4em] font-black mb-4">The Postal</span>
            <p className="text-xl font-serif text-brand-green italic">Pin — 577002</p>
          </div>
        </div>
      </div>
    </section>
  );
}
