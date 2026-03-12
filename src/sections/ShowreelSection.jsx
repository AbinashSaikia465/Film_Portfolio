import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const ShowreelSection = () => {
  const videoRef = useRef(null);
  const showreelLink = "https://www.instagram.com/reel/DUVvVd3ElLd/?igsh=YjZzdmlhcWo5ajlu";

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video play failed:", error);
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section id="showreel" className="py-24 bg-cinema-dark border-y border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif tracking-[0.2em] uppercase mb-4">
            Show<span className="text-cinema-gold">reel</span> 2026
          </h2>
          <p className="text-sm tracking-widest text-gray-400 uppercase">A visual journey through my latest projects</p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="relative aspect-video group cursor-pointer overflow-hidden shadow-2xl bg-black"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => window.open(showreelLink, '_blank')}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10 group-hover:opacity-30 transition-opacity"></div>
          <video
            ref={videoRef}
            src="/videos/koka-aru-nati.mov"
            loop
            muted
            autoPlay
            playsInline
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 grayscale-[0.3] group-hover:grayscale-0 group-hover:opacity-100"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-24 h-24 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all"
            >
              <Play fill="white" size={32} className="ml-1" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShowreelSection;
