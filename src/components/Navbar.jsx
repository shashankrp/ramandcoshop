import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Heritage', href: '#home' },
  { name: 'Inventory', href: '#about' },
  { name: 'Archive', href: '#gallery' },
  { name: 'Schedule', href: '#hours' },
  { name: 'Boutique', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-10'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-shrink-0">
            <a href="#home" className="flex flex-col">
              <span className={`text-xl md:text-2xl font-serif tracking-[0.3em] font-bold transition-colors ${isScrolled ? 'text-brand-green' : 'text-white'}`}>
                RAMA <span className="text-brand-gold font-light">&</span> CO
              </span>
              <span className={`text-[8px] uppercase tracking-[0.5em] mt-1 transition-opacity ${isScrolled ? 'text-brand-gold/80' : 'text-white/60'}`}>
                Davangere's Finest Grocer
              </span>
            </a>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-12">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[9px] uppercase tracking-[0.3em] font-bold transition-all hover:text-brand-gold ${isScrolled ? 'text-brand-green/70' : 'text-white/80'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:09845352474"
              className={`px-8 py-3 rounded-sm border text-[9px] uppercase tracking-[0.3em] font-black transition-all ${
                isScrolled ? 'border-brand-green/20 text-brand-green hover:bg-brand-green hover:text-white' : 'border-white/20 text-white hover:bg-white hover:text-brand-green'
              }`}
            >
              Contact
            </a>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={isScrolled ? 'text-brand-green' : 'text-white'}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute top-0 left-0 w-full bg-brand-cream shadow-2xl p-8 lg:hidden">
             <div className="flex justify-between mb-12">
                <span className="font-serif italic text-brand-green">Menu</span>
                <button onClick={() => setIsOpen(false)}><X size={20}/></button>
             </div>
             <div className="space-y-8">
                {NAV_LINKS.map(link => (
                  <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block text-2xl font-serif text-brand-green hover:text-brand-gold">
                    {link.name}
                  </a>
                ))}
                <a href="tel:09845352474" className="block text-center bg-brand-green text-white py-5 font-bold tracking-widest text-[10px] uppercase">
                  Call +91 98453 52474
                </a>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
