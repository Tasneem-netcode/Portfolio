import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillsData = [
  { id: 1, name: 'React', desc: 'Interfaces & UI', use: 'Building dynamic, state-driven interfaces', img: 'skill1.png' },
  { id: 2, name: 'Tailwind CSS', desc: 'Utility Styling', use: 'Rapidly building responsive, custom layouts', img: 'skill2.png' },
  { id: 3, name: 'Python', desc: 'Data & Processing', use: 'Developing APIs and data processing scripts', img: 'skill3.png' },
  { id: 4, name: 'C++', desc: 'System & Performance', use: 'Building high-performance, system-level software', img: 'skill4.png' },
  { id: 5, name: 'Streamlit', desc: 'Python UI & Apps', use: 'Building interactive data apps and frontends', img: 'skill5.png' },
  { id: 6, name: 'Figma', desc: 'UI/UX Design', use: 'Designing user-centric wireframes & interfaces', img: 'skill6.png' },
  { id: 7, name: 'CSS3', desc: 'Styling & Layout', use: 'Creating responsive and customized aesthetics', img: 'skill7.png' },
  { id: 8, name: 'Git', desc: 'Version Control', use: 'Managing codebase collaboration & history', img: 'skill8.png' },
  { id: 9, name: 'HTML5', desc: 'Semantics & Structure', use: 'Building accessible, SEO-friendly page architectures', img: 'skill9.png' },
  { id: 10, name: 'MySQL', desc: 'Database Management', use: 'Structuring and querying relational databases', img: 'skill10.png' },
  { id: 11, name: 'C', desc: 'Low-Level Programming', use: 'Writing efficient, hardware-close algorithms', img: 'skill11.png' },
  { id: 12, name: 'JavaScript', desc: 'Logic & Interaction', use: 'Crafting complex business logic & animations', img: 'skill12javascript.png' },
  { id: 13, name: 'Vercel', desc: 'Deployment', use: 'Hosting and deploying full-stack web applications', img: 'skill13vercel.png' },
  { id: 14, name: 'Node.js', desc: 'Backend Runtime', use: 'Building scalable network applications and APIs', img: 'skill14nodejs.png' },
  { id: 15, name: 'Hugging Face', desc: 'AI & Models', use: 'Integrating and fine-tuning machine learning models', img: 'skill15huggingFace.png' },
  { id: 16, name: 'REST API', desc: 'Web Services', use: 'Designing clear interfaces for client-server communication', img: 'skill16restapi.png' },
  { id: 17, name: 'Machine Learning', desc: 'AI Models', use: 'Training and deploying predictive models', img: 'skill17MachineLearning.png' },
];

export default function Skills() {
  const containerRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const doubledSkills = [...skillsData, ...skillsData];

  return (
    <section id="skills" className="relative w-full bg-porcelain pt-24 pb-24 md:pt-36 md:pb-32 z-20 font-serif overflow-hidden min-h-screen flex flex-col justify-start">
      {/* Heavenly Gradient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold rounded-full blur-[120px] opacity-30" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] bg-porcelain rounded-full blur-[100px] opacity-80" />
        <div className="absolute bottom-[-10%] left-[30%] w-[50%] h-[50%] bg-drift rounded-full blur-[120px] opacity-20" />
        <div className="absolute inset-0 bg-porcelain/60" />
      </div>

      <div className="w-full flex flex-col items-center text-center z-10 pointer-events-none px-6 mt-8 md:mt-12 mb-8 md:mb-16">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            visible: { transition: { staggerChildren: 0.08 } }
          }}
          className="font-serif text-5xl md:text-7xl lg:text-[6rem] text-mahogany font-light leading-none"
        >
          {"Craft &".split(" ").map((word, i) => (
            <motion.span 
              key={`skill-${i}`} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
          <br className="md:hidden" />
          <motion.span 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="italic text-drift pr-4 inline-block"
          >
            Capabilities
          </motion.span>
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
        <div style={{ transform: 'translateZ(800px)', transformStyle: 'preserve-3d' }} className="mt-12 md:mt-16">
          <div 
           className="relative flex items-center justify-center w-[280px] md:w-[320px]"
           style={{
             transformStyle: 'preserve-3d',
             animation: 'spin-carousel 120s linear infinite',
             animationPlayState: hoveredCard ? 'paused' : 'running',
             willChange: 'transform'
           }}
        >
          {doubledSkills.map((skill, i) => {
            const uniqueId = `${skill.id}-${i}`;
            const isHovered = hoveredCard === uniqueId;
            
            const angle = i * (360 / doubledSkills.length);
            const radius = 2000;

            return (
              <div
                key={uniqueId}
                onMouseEnter={() => setHoveredCard(uniqueId)}
                onMouseLeave={() => setHoveredCard(null)}
                className="absolute top-1/2 left-1/2 -mt-[190px] -ml-[140px] md:-ml-[160px]"
                style={{
                  width: '280px',
                  height: '380px',
                  transform: `rotateY(${angle}deg) translateZ(${-radius}px)`,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="group relative flex flex-col items-center justify-center p-6 bg-[#fdfaf6] rounded-[2.5rem] w-full h-full border border-white/60 shadow-[0_20px_40px_rgba(88,51,30,0.06)] transition-all duration-300 cursor-pointer">
                  
                  <div className={`w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 flex items-center justify-center transform transition-transform duration-500 ease-[0.16,1,0.3,1] ${isHovered ? '-translate-y-2 scale-105' : ''}`}>
                    <img 
                      src={`/${skill.img}`} 
                      alt={skill.name} 
                      className="w-full h-full object-cover rounded-full pointer-events-none" 
                      draggable={false}
                      loading="lazy" 
                    />
                  </div>
                  
                  <span className="font-serif italic text-mahogany text-3xl font-medium tracking-wide text-center">
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
                          className="font-sans font-medium text-drift text-sm md:text-base tracking-widest uppercase text-center block"
                        >
                          {skill.desc}
                        </motion.span>
                      ) : (
                        <motion.span 
                          key="use"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="font-sans text-mahogany/80 text-base leading-relaxed text-center font-bold block"
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
      </div>

    </section>
  );
}
