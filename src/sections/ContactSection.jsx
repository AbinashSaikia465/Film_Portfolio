import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Mail, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-cinema-dark relative overflow-hidden">
      <div className="container px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-serif tracking-widest uppercase mb-8 text-center lg:text-left">
              Get <span className="text-cinema-gold">in Touch</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-12 font-light text-center lg:text-left">
              Interested in collaborating or just want to say hi? 
              Drop a message below and I'll get back to you as soon as possible.
            </p>

            <div className="flex justify-center lg:justify-start gap-8">
              <motion.a whileHover={{ y: -5, color: '#d4af37' }} href="#" className="text-white/50 transition-colors">
                <Instagram size={24} />
              </motion.a>
              <motion.a whileHover={{ y: -5, color: '#d4af37' }} href="#" className="text-white/50 transition-colors">
                <Youtube size={24} />
              </motion.a>
              <motion.a whileHover={{ y: -5, color: '#d4af37' }} href="#" className="text-white/50 transition-colors">
                <Mail size={24} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] tracking-widest uppercase text-gray-500 block mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-cinema-gold transition-colors text-white font-light"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="text-[10px] tracking-widest uppercase text-gray-500 block mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-cinema-gold transition-colors text-white font-light"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div>
                <label className="text-[10px] tracking-widest uppercase text-gray-500 block mb-2">Message</label>
                <textarea
                  className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-cinema-gold transition-colors text-white font-light resize-none h-32"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-cinema-gold text-black py-4 uppercase text-xs tracking-[0.3em] font-bold hover:bg-white transition-colors flex items-center justify-center gap-3"
              >
                Send Message <Send size={14} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
