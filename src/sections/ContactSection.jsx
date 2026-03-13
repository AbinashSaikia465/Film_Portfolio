import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Youtube, Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const ContactSection = () => {
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mjgarnoa", { // Your Formspree ID
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

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
              <motion.a whileHover={{ y: -5, color: '#d4af37' }} href="https://www.instagram.com/abi_nashh_/" target="_blank" rel="noopener noreferrer" className="text-white/50 transition-colors">
                <Instagram size={24} />
              </motion.a>
              <motion.a whileHover={{ y: -5, color: '#d4af37' }} href="https://www.youtube.com/@DRIFTHUE465" target="_blank" rel="noopener noreferrer" className="text-white/50 transition-colors">
                <Youtube size={24} />
              </motion.a>
              <motion.a whileHover={{ y: -5, color: '#d4af37' }} href="mailto:saikiaabinash465@gmail.com" className="text-white/50 transition-colors">
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] tracking-widest uppercase text-gray-500 block mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-cinema-gold transition-colors text-white font-light"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="text-[10px] tracking-widest uppercase text-gray-500 block mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-cinema-gold transition-colors text-white font-light"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div>
                <label className="text-[10px] tracking-widest uppercase text-gray-500 block mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-cinema-gold transition-colors text-white font-light resize-none h-32"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-cinema-gold font-serif uppercase text-xs tracking-widest"
                  >
                    <CheckCircle2 size={16} /> Message sent successfully!
                  </motion.div>
                ) : status === 'error' ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-red-500 font-serif uppercase text-xs tracking-widest"
                  >
                    <AlertCircle size={16} /> Error sending message. Please try again.
                  </motion.div>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={status === 'sending'}
                    className="w-full bg-cinema-gold text-black py-4 uppercase text-xs tracking-[0.3em] font-bold hover:bg-white transition-colors flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={14} />
                  </motion.button>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
