import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import GlowButton from './GlowButton';

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const links = [
    { name: "Work", path: "/" },
    { name: "Writing", path: "/writing" },
    { name: "Lab", path: "/lab" }
  ];

  return (
    <>
      {/* Seamless Gradient Glassmorphism Blur Background (Top) */}
      <div 
        className="fixed top-0 left-0 right-0 h-28 md:h-36 z-40 pointer-events-none"
        style={{
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
          background: 'linear-gradient(to bottom, rgba(235, 229, 224, 0.8) 0%, rgba(235, 229, 224, 0) 100%)'
        }}
      />
      
      {/* Seamless Gradient Glassmorphism Blur Background (Bottom) */}
      <div 
        className="fixed bottom-0 left-0 right-0 h-24 md:h-32 z-40 pointer-events-none"
        style={{
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          WebkitMaskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
          maskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
          background: 'linear-gradient(to top, rgba(235, 229, 224, 0.8) 0%, rgba(235, 229, 224, 0) 100%)'
        }}
      />

      {/* Top Header Content */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 pt-8 pb-4 pointer-events-none"
      >
        <Link to="/" className="font-cursive text-4xl md:text-5xl lg:text-[3.5rem] tracking-normal text-mahogany pointer-events-auto hover:opacity-80 transition-opacity" style={{ lineHeight: 1 }}>
          Tasneem Raza
        </Link>
        
        <div className="flex items-center gap-2 pointer-events-auto">
          {/* Faint pale green glow circle containing a vibrant green dot */}
          <div className="flex items-center justify-center w-[26px] h-[26px] rounded-full bg-[#22c55e]/15">
            <div className="w-[6px] h-[6px] rounded-full bg-[#22c55e] shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
          </div>
          <span className="text-[14.5px] font-sans font-medium text-mahogany">available for work</span>
        </div>
      </motion.header>

      {/* Bottom Floating Navigation Pill */}
      <motion.nav
        initial={{ y: 50, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: scrolled ? 0.85 : 1,
          scale: scrolled ? 0.95 : 1
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], y: { duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }}
        className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
      >
        <div className="flex flex-wrap items-center justify-center gap-1 md:gap-2 p-1.5 rounded-full bg-mahogany/85 backdrop-blur-xl border border-porcelain/20 shadow-[0_8px_32px_rgba(88,51,30,0.4)] relative">
          
          {links.map(link => {
            const isActive = location.pathname === link.path;
            
            return (
              <Link
                key={link.name}
                to={link.path}
                className="group relative px-4 md:px-5 py-2 md:py-2.5 rounded-full overflow-hidden transition-all duration-300"
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-gold/10 rounded-full mix-blend-screen"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                <div className="relative z-10 flex items-center gap-2">
                  {/* 4px dot */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="w-1 h-1 rounded-full bg-gold"
                      />
                    )}
                  </AnimatePresence>
                  
                  <span className={`text-base md:text-xl font-serif italic tracking-wide transition-colors duration-300 ${isActive ? 'text-white' : 'text-porcelain/70 group-hover:text-white'}`}>
                    {link.name}
                  </span>
                </div>
              </Link>
            );
          })}

          <div className="w-px h-6 bg-porcelain/20 mx-1 md:mx-2 hidden md:block" />

          {/* Resume Ghost Outlined Pill */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-4 py-2 rounded-full border border-porcelain/30 text-porcelain hover:bg-porcelain/10 transition-all duration-300 hidden md:flex items-center text-sm font-sans"
          >
            Resume ↗
          </a>

          <GlowButton
            href="#contact"
            className="ml-1 md:ml-0 hidden md:inline-flex"
          >
            Get in touch
          </GlowButton>
        </div>
      </motion.nav>
    </>
  );
}
