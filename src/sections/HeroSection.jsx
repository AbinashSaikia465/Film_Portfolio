import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/494252666.hd.mp4?s=721c683bc47ca90e0c38865c9291b8d38695d739&profile_id=172&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-cinema-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-cinema-blue/10 mix-blend-multiply"></div>
      </div>

      <div className="container relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-9xl font-serif tracking-[0.1em] md:tracking-[0.2em] uppercase leading-tight">
            DRIFT<span className="text-cinema-gold">HUE</span>
          </h1>
          <p className="mt-4 text-sm sm:text-lg md:text-xl tracking-[0.2em] md:tracking-[0.4em] uppercase font-light text-gray-400 max-w-4xl mx-auto">
            "The Emotional Colour of a Journey"
          </p>
          <p className="mt-2 text-xs md:text-md tracking-[0.2em] uppercase text-cinema-gold opacity-80">
            by Abinash Saikia
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12"
        >
          <Link to="work" smooth={true} duration={800} offset={-80}>
            <button className="px-8 md:px-10 py-3 md:py-4 border border-white/30 text-[10px] md:text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500 cursor-pointer">
              View My Work
            </button>
          </Link>
        </motion.div>
      </div>

      <Link to="work" smooth={true} duration={800} offset={-80}>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer text-white/50 hover:text-white transition-colors"
        >
          <ChevronDown size={32} />
        </motion.div>
      </Link>
    </section>
  );
};

export default HeroSection;
