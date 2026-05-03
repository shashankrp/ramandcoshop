import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const SCHEDULE = {
  0: { day: 'Sunday', time: '09:30 AM — 02:30 PM', evening: '04:30 PM — 08:00 PM' },
  1: { day: 'Monday', time: '09:30 AM — 02:30 PM', evening: '04:30 PM — 08:00 PM' },
  2: { day: 'Tuesday', time: '09:30 AM — 02:30 PM', evening: '04:30 PM — 08:00 PM' },
  3: { day: 'Wednesday', time: '09:30 AM — 02:30 PM', evening: '04:30 PM — 08:00 PM' },
  4: { day: 'Thursday', time: '09:30 AM — 02:30 PM', evening: '04:30 PM — 08:00 PM' },
  5: { day: 'Friday', time: '09:30 AM — 02:30 PM', evening: '04:30 PM — 08:00 PM' },
  6: { day: 'Saturday', time: '09:30 AM — 02:30 PM', evening: null },
};

export default function BusinessHours() {
  const [currentDay, setCurrentDay] = useState(new Date().getDay());

  return (
    <section id="hours" className="py-32 bg-brand-muted relative border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Centered Aesthetic Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-[11px] uppercase tracking-[0.5em] font-black text-brand-gold mb-8 italic">The Residency</h2>
            <h3 className="text-5xl md:text-7xl font-serif text-brand-green leading-[1.1] font-light mb-10 italic">
              Precise <br />
              <span className="not-italic font-bold text-brand-gold">Intervals.</span>
            </h3>
            <p className="text-lg text-brand-green/60 font-light leading-relaxed mb-10 italic">
              "Consistency is the hallmark of the diligent grocer, ensuring your daily requirements are met with unwavering regularity."
            </p>
            <div className="h-[1px] w-24 bg-brand-gold/30 mx-auto" />
          </motion.div>
        </div>

        {/* Distributed Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Object.values(SCHEDULE).map((item, idx) => {
            const isToday = idx === currentDay;
            return (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                key={idx}
                className={`p-10 border transition-all duration-500 flex flex-col justify-between h-64 ${
                  isToday 
                    ? 'bg-brand-green border-brand-green text-white shadow-2xl scale-105 z-10' 
                    : 'bg-white border-gray-100 text-brand-green hover:border-brand-gold'
                }`}
              >
                <div className="flex justify-between items-start">
                  <span className={`text-2xl font-serif italic ${isToday ? 'text-brand-gold' : 'text-brand-green'}`}>
                    {item.day}
                  </span>
                  {isToday && (
                    <span className="text-[7px] font-black uppercase tracking-[0.2em] bg-brand-gold text-brand-green px-2 py-1 rounded-sm">
                      Current
                    </span>
                  )}
                </div>
                
                <div className="mt-auto">
                  <div className={`text-[10px] uppercase font-bold tracking-[0.2em] mb-2 ${isToday ? 'text-brand-cream/60' : 'text-brand-green/30'}`}>
                    Session Hours
                  </div>
                  <div className={`text-sm font-bold tracking-widest ${isToday ? 'text-white' : 'text-brand-green'}`}>
                    {item.time}
                  </div>
                  {item.evening ? (
                    <div className={`text-[10px] font-bold uppercase tracking-[0.15em] mt-2 ${isToday ? 'text-brand-gold' : 'text-brand-gold'}`}>
                      {item.evening}
                    </div>
                  ) : (
                    <div className={`text-[9px] uppercase tracking-widest mt-2 italic ${isToday ? 'text-white/20' : 'text-brand-green/10'}`}>
                      — Half Day —
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <div className="flex items-center gap-4 text-[9px] uppercase font-bold tracking-[0.4em] text-brand-green/30 px-8 py-3 border border-gray-100 italic">
            Weekend schedule subject to seasonal adjustments
          </div>
        </motion.div>
      </div>
    </section>
  );
}
