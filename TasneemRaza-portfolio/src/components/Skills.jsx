import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillsData = [
  { id: 1, name: 'React', desc: 'Interfaces & UI', use: 'Building dynamic, state-driven interfaces' },
  { id: 2, name: 'JavaScript', desc: 'Logic & Interaction', use: 'Crafting complex business logic & animations' },
  { id: 3, name: 'TypeScript', desc: 'Safety & Scaling', use: 'Writing type-safe, scalable codebases' },
  { id: 4, name: 'HTML/CSS', desc: 'Structure & Styling', use: 'Creating semantic, accessible layouts' },
  { id: 5, name: 'Figma', desc: 'UI/UX Design', use: 'Designing user-centric wireframes & prototypes' },
  { id: 6, name: 'Git', desc: 'Version Control', use: 'Managing codebase collaboration & history' },
  { id: 7, name: 'SQL', desc: 'Queries & Data', use: 'Structuring and querying relational databases' },
  { id: 8, name: 'Python', desc: 'Data & Backend', use: 'Developing APIs and data processing scripts' },
];

export default function Skills() {
  const containerRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const doubledSkills = [...skillsData, ...skillsData];

  return (
    <section id="skills" className="relative w-full bg-porcelain py-32 md:py-48 z-20 font-serif overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Heavenly Gradient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold rounded-full blur-[120px] opacity-30" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] bg-porcelain rounded-full blur-[100px] opacity-80" />
        <div className="absolute bottom-[-10%] left-[30%] w-[50%] h-[50%] bg-drift rounded-full blur-[120px] opacity-20" />
        <div className="absolute inset-0 bg-porcelain/40 backdrop-blur-[40px]" />
      </div>

      <div className="w-full flex flex-col items-center text-center z-10 pointer-events-none px-6 mb-16 md:mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-[6rem] text-mahogany font-light leading-none"
        >
          Craft & <br className="md:hidden" />
          <span className="italic text-drift pr-4">Capabilities</span>
        </motion.h2>
      </div>

      {/* 3D Curved Carousel Area */}
      <div 
        className="relative z-10 w-full overflow-hidden py-24 md:py-32 flex items-center justify-center"
        style={{ perspective: '1000px' }}
      >
        
        {/* Cloudy fade: Left */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-56 lg:w-[22rem] z-30 pointer-events-none bg-gradient-to-r from-[#ebe5e0] via-[#ebe5e0]/80 to-transparent" />
        {/* Cloudy fade: Right */}
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-56 lg:w-[22rem] z-30 pointer-events-none bg-gradient-to-l from-[#ebe5e0] via-[#ebe5e0]/80 to-transparent" />

        {/* 3D Rotator */}
        <div 
           className="relative flex items-center justify-center w-[240px] md:w-[280px]"
           style={{
             transformStyle: 'preserve-3d',
             animation: 'spin-carousel 60s linear infinite',
             animationPlayState: hoveredCard ? 'paused' : 'running',
             willChange: 'transform'
           }}
        >
          {doubledSkills.map((skill, i) => {
            const uniqueId = `${skill.id}-${i}`;
            const isHovered = hoveredCard === uniqueId;
            
            // 16 items total, so 360 / 16 = 22.5 degrees each.
            const angle = i * 22.5;
            // Radius ~ 650px to make a wide, gentle curve
            const radius = 650;

            return (
              <div
                key={uniqueId}
                onMouseEnter={() => setHoveredCard(uniqueId)}
                onMouseLeave={() => setHoveredCard(null)}
                className="absolute top-1/2 left-1/2 -mt-[170px] -ml-[120px] md:-ml-[140px]"
                style={{
                  width: '240px',
                  height: '340px',
                  transform: `rotateY(${angle}deg) translateZ(${-radius}px)`,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="group relative flex flex-col items-center justify-center p-6 bg-[#fdfaf6] rounded-[2.5rem] w-full h-full border border-white/60 shadow-[0_20px_40px_rgba(88,51,30,0.06)] transition-all duration-300 cursor-pointer">
                  
                  <div className={`w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden mb-6 flex items-center justify-center transform transition-transform duration-500 ease-[0.16,1,0.3,1] ${isHovered ? '-translate-y-2 scale-105' : ''}`}>
                    <img 
                      src={`/skill${skill.id}.png`} 
                      alt={skill.name} 
                      className="w-full h-full object-cover rounded-full pointer-events-none" 
                      draggable={false}
                      loading="lazy" 
                    />
                  </div>
                  
                  <span className="font-serif italic text-mahogany text-2xl tracking-wide text-center">
                    {skill.name}
                  </span>

                  <div className="h-[40px] flex items-center justify-center w-full mt-2">
                    <AnimatePresence mode="wait">
                      {!isHovered ? (
                        <motion.span 
                          key="desc"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="font-sans font-light text-drift text-xs md:text-sm tracking-widest uppercase text-center block"
                        >
                          {skill.desc}
                        </motion.span>
                      ) : (
                        <motion.span 
                          key="use"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="font-sans text-mahogany/80 text-sm leading-relaxed text-center font-medium block"
                        >
                          {skill.use}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
