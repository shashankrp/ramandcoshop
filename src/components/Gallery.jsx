import React from 'react';
import { motion } from 'motion/react';

const IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=2670',
    title: 'The Great Aisle',
    span: 'md:col-span-2'
  },
  {
    url: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=2574',
    title: 'Selected Staples',
    span: 'md:col-span-1'
  },
  {
    url: 'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=2670',
    title: 'Heritage Selection',
    span: 'md:col-span-1'
  },
  {
    url: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&q=80&w=2574',
    title: 'Pristine Shelves',
    span: 'md:col-span-2'
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-brand-green overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-brand-gold font-bold tracking-[0.4em] text-[10px] uppercase mb-8 italic">The Visual Inventory</h2>
          <h3 className="text-5xl md:text-7xl font-serif text-brand-cream leading-tight font-light italic">
            Curated <span className="not-italic text-brand-gold/60 font-medium">with precision.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {IMAGES.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative overflow-hidden group aspect-[3/4] md:aspect-auto ${img.span} md:min-h-[450px] shadow-2xl border border-white/5 bg-brand-green/20`}
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-green/40 group-hover:bg-transparent transition-all duration-1000" />
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-t from-brand-green/90 to-transparent">
                  <span className="text-[9px] uppercase tracking-[0.5em] font-black text-brand-gold mb-2 block">Premium Aisle</span>
                  <h4 className="text-2xl font-serif text-brand-cream italic font-light">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
