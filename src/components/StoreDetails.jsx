import React from 'react';
import { Mail, MapPin, Phone, ShieldCheck, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

export default function StoreDetails() {
  return (
    <section className="bg-white py-32 border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Balanced Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[11px] uppercase tracking-[0.5em] font-black text-brand-gold mb-6 italic">The Residency</h2>
            <h3 className="text-5xl md:text-7xl font-serif text-brand-green leading-tight mb-8 font-light italic">
              A Landmark of <br />
              <span className="not-italic font-bold text-brand-gold">Excellence.</span>
            </h3>
            <div className="h-[1px] w-24 bg-brand-gold/30 mx-auto mb-8" />
            <p className="text-xl text-brand-green/70 leading-relaxed font-light italic">
              "Our store is a sanctuary for the daily routine, where every premium product has its designated place, serving Davangere since 1984."
            </p>
          </motion.div>
        </div>

        {/* Improved Symmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200 shadow-2xl">
          <DetailCard 
            label="Establishment"
            title="Local Heritage"
            desc="Serving Since 1984"
            icon={<ShieldCheck strokeWidth={1} size={32} />}
          />
          <DetailCard 
            label="Location"
            title="4th Main Rd"
            desc="Davangere, KA 577002"
            icon={<MapPin strokeWidth={1} size={32} />}
          />
          <DetailCard 
            label="Connect"
            title="+91 98453 52474"
            desc="Direct Store Line"
            icon={<Phone strokeWidth={1} size={32} />}
          />
          <DetailCard 
            label="Inquiry"
            title="Professional"
            desc="In-Store Assistance"
            icon={<Navigation strokeWidth={1} size={32} />}
          />
        </div>

        {/* Verification Badge */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center items-center gap-6 text-brand-green/40"
        >
           <div className="h-[1px] w-12 bg-gray-200" />
           <span className="text-[10px] uppercase font-black tracking-[0.4em] flex items-center gap-2">
              <ShieldCheck size={14} className="text-brand-gold" />
              Verified Davangere Institution
           </span>
           <div className="h-[1px] w-12 bg-gray-200" />
        </motion.div>
      </div>
    </section>
  );
}

function DetailCard({ label, title, desc, icon }) {
  return (
    <div className="p-12 bg-white flex flex-col justify-between h-72 group hover:bg-brand-green transition-all duration-700">
      <div className="text-brand-gold group-hover:text-brand-cream transition-colors duration-700">{icon}</div>
      <div>
        <span className="text-[9px] uppercase tracking-[0.5em] font-black text-brand-green/30 block mb-4 italic group-hover:text-brand-gold/50">{label}</span>
        <h4 className="text-2xl font-serif text-brand-green mb-2 font-light italic group-hover:text-brand-cream transition-colors duration-700">{title}</h4>
        <p className="text-[10px] uppercase font-bold tracking-widest text-brand-green/40 group-hover:text-brand-cream/40 transition-colors duration-700">{desc}</p>
      </div>
    </div>
  );
}
