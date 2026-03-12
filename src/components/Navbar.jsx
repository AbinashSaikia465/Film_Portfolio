import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = ({ onMenuToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    // Protection: Don't hide if mobile menu is open
    if (isMobileMenuOpen) {
      setIsHidden(false);
      return;
    }

    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    
    setIsScrolled(latest > 50);
  });

  // Prevent scroll when mobile menu is open and notify parent
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      setIsHidden(false); // Force visible when opened
    } else {
      document.body.style.overflow = 'unset';
    }
    if (onMenuToggle) onMenuToggle(isMobileMenuOpen);
  }, [isMobileMenuOpen, onMenuToggle]);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'Work', to: 'work' },
    { name: 'Showreel', to: 'showreel' },
    { name: 'About', to: 'about' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <>
      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed w-full transition-colors duration-500 ${isScrolled ? 'bg-cinema-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8'} ${isMobileMenuOpen ? 'z-[70]' : 'z-50'}`}
      >
        <div className="container px-6 flex justify-between items-center">
          <Link to="hero" smooth={true} duration={800} className="cursor-pointer">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-serif tracking-tighter"
            >
              DRIFT<span className="text-cinema-gold">HUE</span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={800}
                offset={-80}
                className="text-sm tracking-widest uppercase hover:text-cinema-gold transition-colors cursor-pointer"
              >
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.name}
                </motion.span>
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-white relative z-[80] p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/10 backdrop-blur-xl z-[60] flex flex-col items-center justify-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex flex-col items-center space-y-10" onClick={(e) => e.stopPropagation()}>
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={800}
                    offset={-80}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl tracking-[0.3em] uppercase hover:text-cinema-gold transition-colors cursor-pointer font-serif text-white"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-12 text-center"
            >
              <p className="text-[10px] tracking-[0.5em] uppercase text-gray-500/80">DRIFTHUE | Abinash Saikia</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
