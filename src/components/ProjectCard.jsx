import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const videoRef = useRef(null);

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
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="group relative overflow-hidden bg-cinema-dark aspect-[16/10] cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => window.open(project.link, '_blank')}
    >
      {project.video && (
        <video
          ref={videoRef}
          src={project.video}
          loop
          muted
          playsInline
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
        />
      )}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-8 text-center">
        <h3 className="text-2xl font-serif mb-2">{project.title}</h3>
        <p className="text-cinema-gold text-xs tracking-widest uppercase mb-6">{project.role}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 border border-white/50 text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all"
        >
          View Project <Play size={14} fill="currentColor" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
