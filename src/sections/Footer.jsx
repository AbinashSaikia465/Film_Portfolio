import React from 'react';
import { Link } from 'react-scroll';
import { Instagram, Youtube, Mail } from 'lucide-react';

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

          <div className="flex items-center gap-8">
            <div className="flex gap-4">
              <a href="https://www.instagram.com/abi_nashh_/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cinema-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.youtube.com/@DRIFTHUE465" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cinema-gold transition-colors">
                <Youtube size={18} />
              </a>
              <a href="mailto:saikiaabinash465@gmail.com" className="text-gray-500 hover:text-cinema-gold transition-colors">
                <Mail size={18} />
              </a>
            </div>
            <Link to="hero" smooth={true} duration={800} className="text-[10px] tracking-widest uppercase hover:text-cinema-gold cursor-pointer transition-colors border-l border-white/10 pl-8">Back to Top</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
