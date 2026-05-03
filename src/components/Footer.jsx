import React from 'react';
import { Heart, MapPin, Phone, Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-green text-brand-cream relative overflow-hidden">
      {/* Decorative Border */}
      <div className="h-2 bg-brand-gold w-full" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <a href="#home" className="group mb-10">
              <h4 className="text-4xl font-serif tracking-[0.2em] font-medium text-white mb-2">
                RAMA <span className="text-brand-gold">&</span> CO
              </h4>
              <div className="h-[1px] w-0 group-hover:w-full bg-brand-gold/50 transition-all duration-1000" />
              <p className="text-[9px] uppercase tracking-[0.5em] mt-4 text-brand-gold font-black italic">
                Neighborhood Excellence since 1984
              </p>
            </a>
            <p className="text-lg font-serif italic text-brand-cream/60 leading-relaxed mb-10 max-w-sm font-light">
              "We provide the finest branded staples and household essentials, curated with a legacy of trust and meticulous care for the Davangere kitchen."
            </p>
            <div className="flex gap-6">
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Mail size={18} />} />
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
             <h5 className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-black italic mb-10 pb-4 border-b border-white/5">The Directory</h5>
             <ul className="space-y-5">
              <FooterLink href="#home">Our Heritage</FooterLink>
              <FooterLink href="#gallery">Visual Archive</FooterLink>
              <FooterLink href="#hours">Store Schedule</FooterLink>
              <FooterLink href="#contact">Contact Boutique</FooterLink>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
             <h5 className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-black italic mb-10 pb-4 border-b border-white/5">Communication</h5>
             <div className="space-y-10">
                <a href="tel:09845352474" className="group block">
                  <span className="text-[9px] uppercase tracking-[0.4em] text-brand-cream/40 mb-2 block font-bold">Direct Line</span>
                  <span className="text-3xl lg:text-4xl font-serif italic font-light group-hover:text-brand-gold transition-colors">+91 98453 52474</span>
                </a>
                <div className="flex items-start gap-4">
                   <MapPin size={20} className="text-brand-gold mt-1 shrink-0" />
                   <div>
                     <span className="text-[9px] uppercase tracking-[0.4em] text-brand-cream/40 mb-1 block font-bold">Residency</span>
                     <p className="text-brand-cream/70 font-bold uppercase tracking-[0.2em] text-[10px] leading-relaxed">
                        4th Main Rd, P.J Extension., Davangere, <br /> 
                        Karnataka, India 577002
                     </p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Developed by Shashank R P */}
        {/* Legal Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <span className="text-[8px] uppercase tracking-[0.5em] text-brand-cream/20 font-black">
            © {new Date().getFullYear()} Raman & Co. · <a href="https://shashankrp.in" target="_blank" style={{textDecoration: 'underline', textBold: true}} rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
              Built by Shashank R P
            </a>
          </span>
          <div className="flex items-center gap-6 text-[8px] uppercase tracking-[0.4em] text-brand-cream/20 font-black italic">
             <div className="flex items-center gap-2">
                <span>Crafted for Davangere</span>
                <Heart size={10} className="text-brand-gold fill-brand-gold" />
             </div>
             <div className="w-[1px] h-4 bg-white/5" />
             <span>Legal Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }) {
  return (
    <li>
      <a href={href} className="text-xl font-serif italic font-light text-brand-cream/60 hover:text-brand-gold transition-colors flex items-center group">
        <span className="w-0 group-hover:w-4 h-[1px] bg-brand-gold transition-all duration-300 mr-0 group-hover:mr-3" />
        {children}
      </a>
    </li>
  );
}

function SocialIcon({ icon }) {
  return (
    <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-brand-cream/40 hover:border-brand-gold hover:text-brand-gold transition-all">
      {icon}
    </a>
  );
}
