import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { ArrowUpRight, Send, Copy, Check } from 'lucide-react';
import GlowButton from './GlowButton';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [formFocused, setFormFocused] = useState(null);
  const formRef = useRef(null);

  const handleCopy = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText('tasneem78899@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = 'mailto:tasneem78899@gmail.com';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hey Tasneem — from ${formData.name || 'Someone'}`);
    const body = encodeURIComponent(formData.message);
    window.location.href = `mailto:tasneem78899@gmail.com?subject=${subject}&body=${body}`;
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } }
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  const socials = [
    {
      href: "https://x.com/TasneemRaza322",
      label: "X",
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    },
    {
      href: "https://www.linkedin.com/in/tasneem-raza-275b572b7/",
      label: "LinkedIn",
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
    },
    {
      href: "https://github.com/Tasneem-netcode",
      label: "GitHub",
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
    }
  ];

  return (
    <footer id="contact" className="relative bg-porcelain text-mahogany pt-28 pb-20 md:pb-24 px-6 md:px-12 overflow-hidden flex flex-col min-h-[92vh]">
      
      {/* Heavenly Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-15%] left-[-5%] w-[45%] h-[45%] bg-gold rounded-full blur-[140px] opacity-15" />
        <div className="absolute top-[15%] right-[-8%] w-[35%] h-[55%] bg-porcelain rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-[-15%] left-[25%] w-[45%] h-[45%] bg-drift rounded-full blur-[140px] opacity-10" />
        <div className="absolute inset-0 bg-porcelain/85" />
      </div>

      {/* Floating Polaroid Images — no corner marks, clean */}
      <div className="absolute inset-0 z-[1] pointer-events-none hidden lg:block max-w-[1800px] mx-auto w-full h-full">
        
        {/* Top Left */}
        <motion.div 
          initial={{ opacity: 0, x: -40, rotate: -15 }}
          whileInView={{ opacity: 0.85, x: 0, rotate: -7 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[6%] left-[3%] w-64 pointer-events-auto cursor-pointer"
        >
          <motion.div
             animate={{ y: [-8, 8, -8], rotate: [-1, 1.5, -1] }}
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
             whileHover={{ scale: 1.04, rotate: -4 }}
             className="origin-center"
          >
            <div className="bg-white/70 rounded-2xl p-2.5 pb-6 shadow-[0_16px_48px_rgba(88,51,30,0.08)]">
              <div className="w-full h-48 overflow-hidden rounded-xl">
                <img src="/img1.png" alt="Visual Concept" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Top Right */}
        <motion.div 
          initial={{ opacity: 0, x: 40, rotate: 15 }}
          whileInView={{ opacity: 0.85, x: 0, rotate: 9 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[10%] right-[3%] w-72 pointer-events-auto cursor-pointer"
        >
          <motion.div
             animate={{ y: [6, -8, 6], rotate: [0.5, -2, 0.5] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             whileHover={{ scale: 1.04, rotate: 6 }}
             className="origin-center"
          >
            <div className="bg-white/70 rounded-2xl p-2.5 pb-6 shadow-[0_16px_48px_rgba(88,51,30,0.08)]">
              <div className="w-full h-52 overflow-hidden rounded-xl">
                <img src="/img4.png" alt="Architecture" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Left */}
        <motion.div 
          initial={{ opacity: 0, y: 40, rotate: 10 }}
          whileInView={{ opacity: 0.8, y: 0, rotate: 11 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-[8%] left-[6%] w-[17rem] pointer-events-auto cursor-pointer"
        >
          <motion.div
             animate={{ y: [-6, 6, -6], rotate: [0.5, -1.5, 0.5] }}
             transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
             whileHover={{ scale: 1.04, rotate: 14 }}
             className="origin-center"
          >
            <div className="bg-white/70 rounded-2xl p-2.5 pb-6 shadow-[0_16px_48px_rgba(88,51,30,0.08)]">
              <div className="w-full h-56 overflow-hidden rounded-xl">
                <img src="/img7.png" alt="Aesthetic" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Bottom Right */}
        <motion.div 
          initial={{ opacity: 0, y: 40, rotate: -20 }}
          whileInView={{ opacity: 0.8, y: 0, rotate: -13 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-[12%] right-[8%] w-[20rem] pointer-events-auto cursor-pointer"
        >
          <motion.div
             animate={{ y: [7, -7, 7], rotate: [-1, 2, -1] }}
             transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
             whileHover={{ scale: 1.04, rotate: -10 }}
             className="origin-center"
          >
            <div className="bg-white/70 rounded-2xl p-2.5 pb-6 shadow-[0_16px_48px_rgba(88,51,30,0.08)]">
              <div className="w-full h-60 overflow-hidden rounded-xl">
                <img src="/img5.png" alt="Design" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ──────────────── Central Content ──────────────── */}
      <motion.div 
        className="relative z-10 w-full max-w-[580px] mx-auto flex flex-col items-center justify-center flex-1 my-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-5%" }}
        variants={stagger}
      >
        
        {/* Heading — word-by-word sparkle reveal */}
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } } }}
          className="font-serif text-6xl md:text-8xl lg:text-[7.5rem] text-mahogany font-light leading-none mb-6 text-center whitespace-nowrap flex items-baseline justify-center gap-[0.25em]"
          style={{ textShadow: '0 2px 20px rgba(235,229,224,0.8), 0 4px 40px rgba(235,229,224,0.5)' }}
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.85 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="inline-block"
          >
            Let's
          </motion.span>
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.85 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="italic text-drift pr-4 inline-block"
          >
            Connect
          </motion.span>
        </motion.h2>

        {/* Subtext — word-by-word sparkle reveal */}
        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.04, delayChildren: 0.4 } } }}
          className="text-mahogany/65 text-base md:text-lg text-center mb-12 font-sans font-normal leading-relaxed px-4 max-w-lg flex flex-wrap justify-center"
        >
          {"Have an idea, opportunity, or just want to talk tech? I'd love to hear from you.".split(" ").map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        {/* ──── Quick Contact Form ──── */}
        <motion.form
          ref={formRef}
          variants={fadeUp}
          onSubmit={handleSubmit}
          className="w-full bg-white/60 rounded-3xl border border-white/70 shadow-[0_8px_40px_rgba(88,51,30,0.08)] p-6 md:p-8 mb-8"
        >
          {/* Name field */}
          <div className="relative mb-5">
            <motion.label 
              className="block text-[11px] font-sans font-semibold tracking-[0.15em] uppercase mb-2.5"
              animate={{ color: formFocused === 'name' ? '#5b331e' : '#7a6b5d' }}
              transition={{ duration: 0.3 }}
            >
              Your Name
            </motion.label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              onFocus={() => setFormFocused('name')}
              onBlur={() => setFormFocused(null)}
              placeholder="e.g. Sarah"
              className="w-full bg-transparent border-b-[1.5px] border-mahogany/20 focus:border-mahogany/50 text-mahogany text-base md:text-lg font-sans font-light pb-3 pt-1 outline-none placeholder:text-mahogany/25 transition-colors duration-500"
            />
          </div>

          {/* Message field */}
          <div className="relative mb-6">
            <motion.label 
              className="block text-[11px] font-sans font-semibold tracking-[0.15em] uppercase mb-2.5"
              animate={{ color: formFocused === 'message' ? '#5b331e' : '#7a6b5d' }}
              transition={{ duration: 0.3 }}
            >
              Your Message
            </motion.label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              onFocus={() => setFormFocused('message')}
              onBlur={() => setFormFocused(null)}
              placeholder="Tell me about your project or idea..."
              rows={3}
              className="w-full bg-transparent border-b-[1.5px] border-mahogany/20 focus:border-mahogany/50 text-mahogany text-base font-sans font-light pb-3 pt-1 outline-none placeholder:text-mahogany/25 transition-colors duration-500 resize-none leading-relaxed"
            />
          </div>

          {/* Submit — "Start a Project" CTA */}
          <motion.button
            type="submit"
            className="w-full relative group overflow-hidden rounded-full p-[1.5px] cursor-pointer"
            style={{ backgroundColor: 'rgba(50,25,10,0.8)' }}
            whileHover={{ scale: 1.02, boxShadow: '0 8px 32px rgba(88, 51, 30, 0.2)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Rotating glow strip */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/2 left-[-50%] right-[-50%] h-[30px] -translate-y-1/2 z-0"
              style={{ background: '#E3D5B5', filter: 'blur(10px)', opacity: 0.9 }}
            />
            <div className="relative z-10 flex items-center justify-center gap-3 bg-[#58331E] text-[#E8E5E0] rounded-full py-4 px-8 font-sans text-[15px] font-medium tracking-wide">
              Start a Project
              <ArrowUpRight size={18} strokeWidth={2} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </motion.button>
        </motion.form>

        {/* ──── OR divider ──── */}
        <motion.div variants={fadeUp} className="flex items-center gap-4 w-full mb-8 px-4">
          <div className="flex-1 h-px bg-mahogany/15" />
          <span className="text-[12px] font-sans font-semibold tracking-[0.2em] uppercase text-mahogany/50">or reach out directly</span>
          <div className="flex-1 h-px bg-mahogany/15" />
        </motion.div>

        {/* ──── Email row ──── */}
        <motion.div 
          variants={fadeUp}
          className="flex items-center justify-center gap-3 mb-7"
        >
          <a 
            href="mailto:tasneem78899@gmail.com" 
            className="relative text-lg md:text-xl text-mahogany font-sans font-medium transition-colors duration-300 hover:text-mahogany/70 group/email"
          >
            tasneem78899@gmail.com
            <span className="absolute bottom-[-2px] left-0 w-full h-[1px] bg-mahogany/30 origin-left scale-x-100 group-hover/email:scale-x-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            <span className="absolute bottom-[-2px] left-0 w-full h-[1.5px] bg-mahogany/60 origin-right scale-x-0 group-hover/email:scale-x-100 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
          </a>
          
          {/* Copy button */}
          <button 
            onClick={handleCopy}
            className="relative p-2 rounded-full hover:bg-mahogany/5 transition-all duration-300"
            title="Copy email"
          >
            <motion.div initial={false} animate={{ scale: copied ? [1, 1.3, 1] : 1 }} transition={{ duration: 0.3 }}>
              {copied 
                ? <Check size={15} className="text-green-600" /> 
                : <Copy size={15} className="text-mahogany/40 hover:text-mahogany/70 transition-colors duration-300" />
              }
            </motion.div>
            <AnimatePresence>
              {copied && (
                <motion.span
                  initial={{ opacity: 0, y: 8, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.85 }}
                  className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-mahogany text-white text-[9px] font-sans font-semibold tracking-wider uppercase rounded-full whitespace-nowrap shadow-lg"
                >
                  Copied!
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </motion.div>

        {/* ──── Trust badges ──── */}
        <motion.div 
          variants={fadeUp}
          className="flex flex-col items-center gap-2 mb-9"
        >
          <span className="text-mahogany/60 text-[13px] font-sans font-semibold tracking-[0.14em] uppercase">
            Open to freelance & internship opportunities
          </span>
          <span className="text-mahogany/45 text-[11px] font-sans font-medium tracking-[0.1em] uppercase">
            Typically responds within 24 hours
          </span>
        </motion.div>

        {/* ──── Social Icons ──── */}
        <motion.div variants={fadeUp} className="flex items-center gap-4">
          {socials.map((social) => (
            <motion.a 
              key={social.label}
              href={social.href} 
              target="_blank" 
              rel="noreferrer" 
              aria-label={social.label}
              className="relative p-4 rounded-full bg-white/55 border border-white/60 text-mahogany/80 hover:text-mahogany transition-colors duration-300"
              whileHover={{ 
                scale: 1.15, 
                boxShadow: '0 6px 24px rgba(88,51,30,0.1)',
                backgroundColor: 'rgba(255,255,255,0.65)',
                borderColor: 'rgba(88,51,30,0.15)',
              }}
              whileTap={{ scale: 0.92 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

      </motion.div>

      {/* ──────────────── Footer Row ──────────────── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between text-mahogany/55 text-[13px] font-sans tracking-wide pt-8 mt-auto gap-4">
        <p>© {new Date().getFullYear()} Tasneem Raza</p>
        <p className="font-medium text-mahogany/65">Based in India, working globally.</p>
        <p>All Rights Reserved</p>
      </div>
      
    </footer>
  );
}
