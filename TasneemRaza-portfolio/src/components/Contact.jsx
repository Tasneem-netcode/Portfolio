import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <footer id="contact" className="relative bg-porcelain text-mahogany pt-32 pb-24 md:pb-28 px-6 md:px-12 overflow-hidden flex flex-col min-h-[90vh]">
      
      {/* Decorative Corner Marks for Polaroids */}
      <style>{`
        .polaroid-mark::before, .polaroid-mark::after {
          content: ''; position: absolute; width: 12px; height: 12px; border: 1px solid rgba(88,51,30,0.15); pointer-events: none;
        }
        .polaroid-mark::before { top: -6px; left: -6px; border-right: none; border-bottom: none; }
        .polaroid-mark::after { bottom: -6px; right: -6px; border-left: none; border-top: none; }
      `}</style>
      
      {/* Heavenly Gradient Background using Palette */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold rounded-full blur-[120px] opacity-30" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] bg-porcelain rounded-full blur-[100px] opacity-80" />
        <div className="absolute bottom-[-10%] left-[30%] w-[50%] h-[50%] bg-drift rounded-full blur-[120px] opacity-20" />
        <div className="absolute inset-0 bg-porcelain/40 backdrop-blur-[40px]" />
      </div>

      {/* Absolute Floating Polaroid Images */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block max-w-[1800px] mx-auto w-full h-full opacity-90">
        
        {/* Top Left */}
        <motion.div 
          initial={{ opacity: 0, x: -30, rotate: -15 }}
          whileInView={{ opacity: 1, x: 0, rotate: -6 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[8%] left-[4%] w-72 bg-porcelain p-3 pb-8 shadow-[0_20px_40px_rgba(88,51,30,0.1)] polaroid-mark pointer-events-auto cursor-pointer"
        >
          <motion.div
             animate={{ y: [-5, 5, -5] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             whileHover={{ rotate: 3, scale: 1.02 }}
             className="w-full h-full origin-center"
          >
            <div className="w-full h-56 overflow-hidden rounded-sm border border-gold/40 filter brightness-[0.98]">
              <img src="/img1.png" alt="Visual Concept" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </motion.div>
        
        {/* Top Right */}
        <motion.div 
          initial={{ opacity: 0, x: 30, rotate: 15 }}
          whileInView={{ opacity: 1, x: 0, rotate: 8 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[12%] right-[4%] w-80 bg-porcelain p-3 pb-10 shadow-[0_20px_40px_rgba(88,51,30,0.1)] polaroid-mark pointer-events-auto cursor-pointer"
        >
          <motion.div
             animate={{ y: [5, -5, 5] }}
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
             whileHover={{ rotate: 11, scale: 1.02 }}
             className="w-full h-full origin-center"
          >
            <div className="w-full h-60 overflow-hidden rounded-sm border border-gold/40 filter brightness-[0.98]">
              <img src="/img4.png" alt="Architecture" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Left */}
        <motion.div 
          initial={{ opacity: 0, y: 30, rotate: 10 }}
          whileInView={{ opacity: 1, y: 0, rotate: 12 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-[5%] left-[8%] w-[19rem] bg-porcelain p-3 pb-12 shadow-[0_20px_40px_rgba(88,51,30,0.1)] polaroid-mark pointer-events-auto cursor-pointer"
        >
          <motion.div
             animate={{ y: [-4, 4, -4] }}
             transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
             whileHover={{ rotate: 15, scale: 1.02 }}
             className="w-full h-full origin-center"
          >
            <div className="w-full h-64 overflow-hidden rounded-sm border border-gold/40 filter brightness-[0.98]">
              <img src="/img7.png" alt="Aesthetic" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </motion.div>
        
        {/* Bottom Right */}
        <motion.div 
          initial={{ opacity: 0, y: 30, rotate: -20 }}
          whileInView={{ opacity: 1, y: 0, rotate: -15 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-[10%] right-[10%] w-[22rem] bg-porcelain p-3 pb-12 shadow-[0_20px_40px_rgba(88,51,30,0.1)] polaroid-mark pointer-events-auto cursor-pointer"
        >
          <motion.div
             animate={{ y: [6, -6, 6] }}
             transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
             whileHover={{ rotate: -12, scale: 1.02 }}
             className="w-full h-full origin-center"
          >
            <div className="w-full h-72 overflow-hidden rounded-sm border border-gold/40 filter brightness-[0.98]">
              <img src="/img5.png" alt="Design" className="w-full h-full object-cover relative -top-6" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Central Content */}
      <div className="relative z-10 w-full max-w-[650px] mx-auto flex flex-col items-center justify-center flex-1 my-20">
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-[6.5rem] text-mahogany font-light leading-none mb-6 text-center"
        >
          Let's <span className="italic text-drift">Connect</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-drift text-[15px] md:text-[17px] text-center mb-16 font-sans font-light leading-relaxed px-4"
        >
          Whether you're a startup, a studio, or a recruiter — <br/>
          I'd love to hear from you.
        </motion.p>
        
        {/* Email and Line Row */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0.95 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex justify-between items-end mb-12 group overflow-hidden pl-4 pr-4"
        >
          <a href="mailto:[EMAIL_ADDRESS]" className="text-base md:text-xl text-mahogany hover:text-drift transition-colors duration-300 whitespace-nowrap border-b border-mahogany pb-[2px] leading-none shrink-0 pr-6 mr-6">
            tasneem78899@gmail.com
          </a>
          <div className="flex-1 h-px bg-drift/30 mb-0.5" />
        </motion.div>

        {/* Social Pill Links */}
        <motion.div
           initial={{ opacity: 0, y: 15 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.3 }}
           className="flex gap-4 mt-6"
        >
           <a href="https://x.com/TasneemRaza322" target="_blank" rel="noreferrer" className="p-4 rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-mahogany hover:bg-white/50 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] transition-all duration-300">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
           </a>
           <a href="https://www.linkedin.com/in/tasneem-raza-275b572b7/" target="_blank" rel="noreferrer" className="p-4 rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-mahogany hover:bg-white/50 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] transition-all duration-300">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
           </a>
           <a href="https://github.com/Tasneem-netcode" target="_blank" rel="noreferrer" className="p-4 rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-mahogany hover:bg-white/50 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] transition-all duration-300">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
           </a>
        </motion.div>
      </div>

      {/* Modern Split Footer Text Row */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto grid grid-cols-2 lg:grid-cols-3 items-center text-drift text-[13px] tracking-wide pt-10 border-t border-drift/20 pb-8 md:pb-0">
        <p className="order-1">© {new Date().getFullYear()} Tasneem Raza</p>
        
        <div className="order-3 lg:order-2 col-span-2 lg:col-span-1 flex justify-start lg:justify-center mt-6 lg:mt-0 font-medium">
           Based in India, working globally.
        </div>
        
        <p className="order-2 lg:order-3 text-right">All Rights Reserved</p>
      </div>
      
    </footer>
  );
}
