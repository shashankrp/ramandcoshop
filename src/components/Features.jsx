import React from 'react';
import { PackageOpen, Sparkles, ReceiptText, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

const FEATURES = [
  {
    icon: <PackageOpen strokeWidth={1} size={36} />,
    title: 'The Inventory',
    desc: 'Individually curated branded staples, sourced with an eye for purity and quality.',
  },
  {
    icon: <Sparkles strokeWidth={1} size={36} />,
    title: 'Pristine Storage',
    desc: 'Each package is maintained in a temperature-controlled, immaculate environment.',
  },
  {
    icon: <ReceiptText strokeWidth={1} size={36} />,
    title: 'Honest Ledger',
    desc: 'Competitive neighborhood pricing with a legacy of transparent and fair billing.',
  },
  {
    icon: <ShieldCheck strokeWidth={1} size={36} />,
    title: 'Heritage',
    desc: 'Serving the Davangere kitchen with unwavering commitment since 1984.',
  },
];

export default function Features() {
  return (
    <section id="about" className="py-40 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-green/10 border border-brand-green/10">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-cream p-16 flex flex-col items-center text-center group hover:bg-brand-green transition-all duration-700"
            >
              <div className="text-brand-gold mb-10 group-hover:text-brand-cream transition-colors duration-700 flex flex-col items-center">
                {feature.icon}
                <div className="h-4 w-[1px] bg-brand-gold/20 mt-4" />
              </div>
              <h3 className="text-2xl font-serif text-brand-green mb-6 italic font-light group-hover:text-brand-gold transition-colors duration-700 underline decoration-brand-gold/20 underline-offset-8">
                {feature.title}
              </h3>
              <p className="text-[11px] text-brand-green/60 leading-relaxed font-bold uppercase tracking-widest group-hover:text-brand-cream/60 transition-colors duration-700">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
