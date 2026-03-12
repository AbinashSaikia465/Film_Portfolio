import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-cinema-black overflow-hidden">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          {/* Portrait Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full md:w-5/12 aspect-[4/5] md:aspect-[3/4] overflow-hidden group shadow-2xl relative max-w-md mx-auto md:max-w-none"
          >
            <img
              src="/abinash.png"
              alt="Abinash Saikia - Filmmaker"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110"
            />
            <div className="absolute inset-0 bg-cinema-gold opacity-10 mix-blend-multiply group-hover:opacity-0 transition-opacity"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full md:w-7/12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-[0.1em] sm:tracking-widest uppercase mb-8 leading-tight">
              About <span className="text-cinema-gold">Abinash</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed font-light">
              <p>
                I’m Abinash Saikia, an aspiring filmmaker and cinematography enthusiast passionate about visual storytelling. I enjoy writing stories and transforming them into cinematic experiences through the lens of my camera.
              </p>
              <p>
                As the creative mind behind <span className="text-white font-medium uppercase tracking-widest">DRIFTHUE</span>, I explore the delicate balance between reality and cinematic expression. My work focuses on capturing emotion through light, shadow, and visual composition, with the goal of creating immersive stories that resonate beyond the frame.
              </p>
              <p>
                Through every project, I aim to turn imagination into living moments on screen, crafting cinematic journeys where every frame carries meaning and emotion.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-8 sm:gap-12">
              <div>
                <h4 className="text-white text-3xl font-serif">3</h4>
                <p className="text-cinema-gold uppercase text-[10px] tracking-widest mt-1">Film Shots</p>
              </div>
              <div>
                <h4 className="text-white text-3xl font-serif">2+</h4>
                <p className="text-cinema-gold uppercase text-[10px] tracking-widest mt-1">Years Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
