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
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
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

  /* Polaroid images — static positions, no infinite animation loops */
  const polaroids = [
    { src: "/img1.png", alt: "Visual Concept", className: "top-[6%] left-[3%] w-64 -rotate-7" },
    { src: "/img4.png", alt: "Architecture", className: "top-[10%] right-[3%] w-72 rotate-9" },
    { src: "/img7.png", alt: "Aesthetic", className: "bottom-[8%] left-[6%] w-[17rem] rotate-11" },
    { src: "/img5.png", alt: "Design", className: "bottom-[12%] right-[8%] w-[20rem] -rotate-13" },
  ];

  return (
    <footer id="contact" className="relative bg-porcelain text-mahogany pt-20 sm:pt-28 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-12 overflow-hidden flex flex-col min-h-[92vh]">
      
      {/* High-performance CSS radial gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_0%,#c8a47a_0%,transparent_50%)] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_40%,#ebe5e0_0%,transparent_60%)] opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_100%,#969284_0%,transparent_50%)] opacity-15" />
      </div>

      {/* Floating Polaroid Images — CSS-only hover, no infinite JS animations */}
      <div className="absolute inset-0 z-[1] pointer-events-none hidden lg:block max-w-[1800px] mx-auto w-full h-full">
        {polaroids.map((p, i) => (
          <motion.div
            key={p.src}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 0.85, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute pointer-events-auto cursor-pointer ${p.className}`}
          >
            <div className="origin-center transition-transform duration-700 hover:scale-105 polaroid-float" style={{ animationDelay: `${i * -1.3}s` }}>
              <div className="bg-white/70 rounded-2xl p-2.5 pb-6 shadow-[0_16px_48px_rgba(88,51,30,0.08)]">
                <div className="w-full h-48 overflow-hidden rounded-xl">
                  <img src={p.src} alt={p.alt} className="w-full h-full object-cover" loading="eager" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ──────────────── Central Content ──────────────── */}
      <motion.div 
        className="relative z-10 w-full max-w-[580px] mx-auto flex flex-col items-center justify-center flex-1 my-10 sm:my-16"
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
          variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }}
          className="font-serif text-4xl sm:text-6xl md:text-8xl lg:text-[7.5rem] text-mahogany font-light leading-none mb-4 sm:mb-6 text-center flex flex-wrap items-baseline justify-center gap-[0.2em] sm:gap-[0.25em]"
          style={{ textShadow: '0 2px 20px rgba(235,229,224,0.8), 0 4px 40px rgba(235,229,224,0.5)' }}
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="inline-block"
          >
            Let's
          </motion.span>
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="italic text-drift inline-block"
          >
            Connect
          </motion.span>
        </motion.h2>

        {/* Subtext — single fade-up instead of word-by-word */}
        <motion.p 
          variants={fadeUp}
          className="text-mahogany/65 text-sm sm:text-base md:text-lg text-center mb-8 sm:mb-12 font-sans font-normal leading-relaxed px-2 sm:px-4 max-w-lg"
        >
          Have an idea, opportunity, or just want to talk tech? I'd love to hear from you.
        </motion.p>

        {/* ──── Quick Contact Form ──── */}
        <motion.form
          ref={formRef}
          variants={fadeUp}
          onSubmit={handleSubmit}
          className="w-full bg-white/60 rounded-2xl sm:rounded-3xl border border-white/70 shadow-[0_8px_40px_rgba(88,51,30,0.08)] p-5 sm:p-6 md:p-8 mb-6 sm:mb-8"
        >
          {/* Name field */}
          <div className="relative mb-4 sm:mb-5">
            <label 
              className="block text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.15em] uppercase mb-2 sm:mb-2.5 transition-colors duration-300"
              style={{ color: formFocused === 'name' ? '#5b331e' : '#7a6b5d' }}
            >
              Your Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              onFocus={() => setFormFocused('name')}
              onBlur={() => setFormFocused(null)}
              placeholder="e.g. Sarah"
              className="w-full bg-transparent border-b-[1.5px] border-mahogany/20 focus:border-mahogany/50 text-mahogany text-sm sm:text-base md:text-lg font-sans font-light pb-2.5 sm:pb-3 pt-1 outline-none placeholder:text-mahogany/25 transition-colors duration-300"
            />
          </div>

          {/* Message field */}
          <div className="relative mb-5 sm:mb-6">
            <label 
              className="block text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.15em] uppercase mb-2 sm:mb-2.5 transition-colors duration-300"
              style={{ color: formFocused === 'message' ? '#5b331e' : '#7a6b5d' }}
            >
              Your Message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              onFocus={() => setFormFocused('message')}
              onBlur={() => setFormFocused(null)}
              placeholder="Tell me about your project or idea..."
              rows={3}
              className="w-full bg-transparent border-b-[1.5px] border-mahogany/20 focus:border-mahogany/50 text-mahogany text-sm sm:text-base font-sans font-light pb-2.5 sm:pb-3 pt-1 outline-none placeholder:text-mahogany/25 transition-colors duration-300 resize-none leading-relaxed"
            />
          </div>

          {/* Submit — "Start a Project" CTA — no infinite rotation */}
          <button
            type="submit"
            className="w-full relative group overflow-hidden rounded-full cursor-pointer glow-btn transition-all duration-300 hover:shadow-[0_8px_32px_rgba(88,51,30,0.2)]"
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3 bg-[#58331E] text-[#E8E5E0] rounded-full py-3 sm:py-4 px-6 sm:px-8 font-sans text-[13px] sm:text-[15px] font-medium tracking-wide">
              Start a Project
              <ArrowUpRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </button>
        </motion.form>

        {/* ──── OR divider ──── */}
        <motion.div variants={fadeUp} className="flex items-center gap-3 sm:gap-4 w-full mb-6 sm:mb-8 px-2 sm:px-4">
          <div className="flex-1 h-px bg-mahogany/15" />
          <span className="text-[10px] sm:text-[12px] font-sans font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-mahogany/50">or reach out directly</span>
          <div className="flex-1 h-px bg-mahogany/15" />
        </motion.div>

        {/* ──── Email row ──── */}
        <motion.div 
          variants={fadeUp}
          className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-7"
        >
          <a 
            href="mailto:tasneem78899@gmail.com" 
            className="relative text-sm sm:text-lg md:text-xl text-mahogany font-sans font-medium transition-colors duration-300 hover:text-mahogany/70 group/email break-all sm:break-normal"
          >
            tasneem78899@gmail.com
            <span className="absolute bottom-[-2px] left-0 w-full h-[1px] bg-mahogany/30 origin-left scale-x-100 group-hover/email:scale-x-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            <span className="absolute bottom-[-2px] left-0 w-full h-[1.5px] bg-mahogany/60 origin-right scale-x-0 group-hover/email:scale-x-100 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
          </a>
          
          {/* Copy button */}
          <button 
            onClick={handleCopy}
            className="relative p-1.5 sm:p-2 rounded-full hover:bg-mahogany/5 transition-colors duration-300 shrink-0"
            title="Copy email"
          >
            <div>
              {copied 
                ? <Check size={14} className="text-green-600" /> 
                : <Copy size={14} className="text-mahogany/40 hover:text-mahogany/70 transition-colors duration-300" />
              }
            </div>
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
          className="flex flex-col items-center gap-1.5 sm:gap-2 mb-7 sm:mb-9 px-4"
        >
          <span className="text-mahogany/60 text-[11px] sm:text-[13px] font-sans font-semibold tracking-[0.1em] sm:tracking-[0.14em] uppercase text-center">
            Open to freelance & internship opportunities
          </span>
          <span className="text-mahogany/45 text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.08em] sm:tracking-[0.1em] uppercase text-center">
            Typically responds within 24 hours
          </span>
        </motion.div>

        {/* ──── Social Icons ──── */}
        <motion.div variants={fadeUp} className="flex items-center gap-3 sm:gap-4">
          {socials.map((social) => (
            <a 
              key={social.label}
              href={social.href} 
              target="_blank" 
              rel="noreferrer" 
              aria-label={social.label}
              className="relative p-3 sm:p-4 rounded-full bg-white/55 border border-white/60 text-mahogany/80 hover:text-mahogany hover:scale-110 hover:shadow-[0_6px_24px_rgba(88,51,30,0.1)] hover:bg-white/65 hover:border-mahogany/15 active:scale-95 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>

      </motion.div>

      {/* ──────────────── Footer Row ──────────────── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between text-mahogany/55 text-[11px] sm:text-[13px] font-sans tracking-wide pt-6 sm:pt-8 mt-auto gap-2 sm:gap-4">
        <p>© {new Date().getFullYear()} Tasneem Raza</p>
        <p className="font-medium text-mahogany/65">Based in India, working globally.</p>
        <p>All Rights Reserved</p>
      </div>
      
    </footer>
  );
}
