import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="py-12 bg-cinema-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-serif tracking-tighter">
            DRIFT<span className="text-cinema-gold">HUE</span>
          </div>
          
          <div className="text-[10px] tracking-[0.4em] uppercase text-gray-500 text-center md:text-left">
            © 2024 Abinash Saikia | All Rights Reserved
          </div>

          <div className="flex gap-8">
            <Link to="hero" smooth={true} duration={800} className="text-[10px] tracking-widest uppercase hover:text-cinema-gold cursor-pointer transition-colors">Back to Top</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
