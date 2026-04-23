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
    { name: "Process", path: "/process" },
    { name: "Services", path: "/services" }
  ];

  return (
    <>
      {/* Top fade — simple gradient, no backdrop-blur for performance */}
      <div 
        className="fixed top-0 left-0 right-0 h-20 sm:h-28 md:h-36 z-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(235,229,224,0.95) 0%, rgba(235,229,224,0.7) 40%, rgba(235,229,224,0) 100%)'
        }}
      />
      
      {/* Bottom fade — simple gradient, no backdrop-blur for performance */}
      <div 
        className="fixed bottom-0 left-0 right-0 h-24 sm:h-32 md:h-32 z-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(235,229,224,0.95) 0%, rgba(235,229,224,0.7) 40%, rgba(235,229,224,0) 100%)'
        }}
      />

      {/* Top Header Content */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 sm:px-6 md:px-12 pt-5 sm:pt-6 md:pt-8 pb-3 sm:pb-4 pointer-events-none"
      >
        <Link to="/" className="font-cursive text-2xl sm:text-3xl md:text-5xl lg:text-[3.5rem] tracking-normal text-mahogany pointer-events-auto hover:opacity-80 transition-opacity" style={{ lineHeight: 1 }}>
          Tasneem Raza
        </Link>
        
        <div className="flex items-center gap-1.5 sm:gap-2 pointer-events-auto">
          {/* Faint pale green glow circle containing a vibrant green dot */}
          <div className="flex items-center justify-center w-5 h-5 sm:w-[26px] sm:h-[26px] rounded-full bg-[#22c55e]/15">
            <div className="w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] rounded-full bg-[#22c55e] shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
          </div>
          <span className="text-[11px] sm:text-[13px] md:text-[14.5px] font-sans font-medium text-mahogany">available for work</span>
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
        className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto max-w-[92vw] sm:max-w-[90vw] md:max-w-none w-max"
      >
        <div className="flex items-center p-1 sm:p-1.5 rounded-full bg-mahogany/95 backdrop-blur-xl border border-porcelain/20 shadow-[0_8px_32px_rgba(88,51,30,0.4)] relative overflow-hidden">
          
          <div className="flex items-center overflow-x-auto overflow-y-hidden hide-scrollbar scroll-smooth pl-0.5 sm:pl-1 pr-0.5 sm:pr-1 md:pr-0">
            {links.map(link => {
              const isActive = location.pathname === link.path;
              
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="group relative px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full flex-shrink-0 overflow-hidden transition-all duration-300"
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-gold/15 rounded-full mix-blend-screen"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  <div className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                    {/* 4px dot */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          className="w-1 h-1 rounded-full bg-gold shrink-0"
                        />
                      )}
                    </AnimatePresence>
                    
                    <span className={`text-sm sm:text-base md:text-xl font-serif italic tracking-wide transition-colors duration-300 ${isActive ? 'text-white' : 'text-porcelain/70 group-hover:text-white'}`}>
                      {link.name}
                    </span>
                  </div>
                </Link>
              );
            })}

            <div className="w-px h-5 sm:h-6 bg-porcelain/20 mx-1.5 sm:mx-2 flex-shrink-0" />

            {/* Resume Text Link inside scrollable area (mobile friendly) md:hidden or flex? */}
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 sm:px-4 py-1.5 sm:py-2 text-porcelain/70 hover:text-white transition-all duration-300 font-serif italic text-sm sm:text-base md:text-xl flex-shrink-0 flex items-center"
            >
              Resume ↗
            </a>
          </div>

          {/* Fixed Get in touch so it doesn't scroll away */}
          <div className="hidden md:flex items-center pl-2 pr-1 border-l border-porcelain/20 ml-2">
            <GlowButton href="#contact" className="hidden md:flex">
              Get in touch
            </GlowButton>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
