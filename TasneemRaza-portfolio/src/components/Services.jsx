import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';

const RevealText = ({ text, className, stagger = 0.03 }) => {
  return (
    <motion.div 
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }}
      variants={{ visible: { transition: { staggerChildren: stagger } } }}
      className={`${className} flex flex-wrap`}
    >
      {text.split(" ").map((word, i) => (
        <motion.span 
          key={i}
          variants={{
             hidden: { opacity: 0, y: 15 },
             visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

const services = [
  {
    id: "01",
    title: "Custom Website Design & Development",
    desc: "End-to-end websites built from scratch — designed with care, coded with precision. Fast, responsive, and made to represent your brand beautifully.",
    tags: ["React", "Tailwind", "Framer Motion"],
    price: "₹8,000"
  },
  {
    id: "02",
    title: "Landing Pages That Convert",
    desc: "A single page that tells your story, builds trust, and turns visitors into clients. Delivered fast.",
    tags: ["React", "HTML/CSS", "Vercel"],
    price: "₹4,000"
  },
  {
    id: "03",
    title: "Cafe & Restaurant Web Experiences",
    desc: "I specialize in hospitality — menus, booking flows, brand storytelling. Your space deserves a beautiful corner of the internet.",
    tags: ["React", "Mobile-first", "WhatsApp Integration"],
    price: "₹6,000"
  },
  {
    id: "04",
    title: "React Component Development",
    desc: "Need a specific UI component, dashboard, or interactive feature built clean and fast? I've got you.",
    tags: ["React", "Tailwind", "JavaScript"],
    price: "₹2,000"
  }
];

const rightImages = [
  "/img1.png",
  "/img2.png",
  "/img8.png",
  "/img4.png",
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const intervalRef = useRef(null);

  // Very slow auto-cycle — 5 seconds per image, plenty of time to appreciate each
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveImageIndex(prev => (prev + 1) % rightImages.length);
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, []);

  // Sync image on accordion click & restart timer
  const handleAccordionClick = (index) => {
    const isOpen = openIndex === index;
    setOpenIndex(isOpen ? -1 : index);
    if (!isOpen) {
      setActiveImageIndex(index);
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setActiveImageIndex(prev => (prev + 1) % rightImages.length);
      }, 5000);
    }
  };

  return (
    <section className="min-h-screen pt-20 px-6 md:px-12 pb-24 flex flex-col items-center bg-porcelain overflow-hidden relative">
      
      {/* Ethereal background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[8%] left-[-8%] w-[50%] h-[50%] bg-white rounded-full blur-[130px] opacity-60" />
        <div className="absolute bottom-[-5%] right-[5%] w-[45%] h-[45%] bg-[#E3D5B5] rounded-full blur-[140px] opacity-20" />
        <div className="absolute top-[40%] left-[30%] w-[40%] h-[30%] bg-white rounded-full blur-[100px] opacity-30" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto relative z-10 flex flex-col mt-8 md:mt-12">
        
        {/* --- TOP HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 flex flex-col mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-mahogany"></div>
            <span className="font-sans text-sm tracking-widest uppercase text-mahogany/60">Services</span>
          </div>

          <motion.h1 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="text-4xl md:text-5xl lg:text-[4rem] font-serif text-mahogany font-medium tracking-tight mb-6 leading-[1.1] flex flex-wrap"
          >
            {"What I".split(" ").map((word, i) => (
              <motion.span 
                key={`what-${i}`} 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
            <motion.span 
              variants={{
                 hidden: { opacity: 0, y: 20 },
                 visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className='text-mahogany/60 italic inline-block'
            >
              Offer
            </motion.span>
          </motion.h1>
          <RevealText text="Whether you're a startup, a local brand, or a recruiter — here's how I can help bring your vision to life natively in the browser." className="text-mahogany/55 text-base md:text-lg font-sans font-light max-w-lg leading-relaxed mt-2" stagger={0.02} />
        </motion.div>

        {/* --- SPLIT LAYOUT: CLEAN PANELS + FRAMED IMAGE STACK --- */}
        <div className="w-full flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
          
          {/* LEFT: Clean accordion panels (inspired by reference) */}
          <div className="w-full lg:w-[50%] flex flex-col gap-0">
            {services.map((service, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  key={service.id}
                  className="relative"
                >
                  {/* Clean panel — minimal, spacious */}
                  <motion.div
                    animate={{
                      backgroundColor: isOpen ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.2)',
                      boxShadow: isOpen 
                        ? '0 4px 30px rgba(88, 51, 30, 0.04)' 
                        : '0 0px 0px rgba(0,0,0,0)',
                    }}
                    whileHover={{ 
                      backgroundColor: isOpen ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.35)',
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="relative rounded-2xl overflow-hidden"
                  >
                    {/* Top separator line */}
                    {index === 0 && (
                      <div className="absolute top-0 left-6 right-6 h-px bg-mahogany/8" />
                    )}

                    <button 
                      onClick={() => handleAccordionClick(index)}
                      className="w-full flex items-center justify-between text-left py-7 px-7 cursor-pointer group"
                    >
                      <h3 className="font-sans text-xl md:text-2xl text-mahogany font-medium tracking-tight leading-snug pr-8 group-hover:text-mahogany/80 transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Clean +/- icon */}
                      <motion.span 
                        className="text-mahogany/35 shrink-0"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {isOpen 
                          ? <Minus size={22} strokeWidth={1.5} /> 
                          : <Plus size={22} strokeWidth={1.5} />
                        }
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ 
                            height: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                            opacity: { duration: 0.4, delay: 0.08, ease: "easeInOut" }
                          }}
                          className="overflow-hidden"
                        >
                          <motion.div 
                            className="px-7 pb-8 pt-0"
                            initial={{ y: 8 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <p className="font-sans text-mahogany/55 text-[15px] md:text-base font-light leading-relaxed mb-5 max-w-md">
                              {service.desc}
                            </p>
                            
                            <div className="flex flex-wrap items-center gap-3 justify-between">
                              {/* Pill-style tags */}
                              <div className="flex flex-wrap gap-2">
                                {service.tags.map(tag => (
                                  <span key={tag} className="px-3.5 py-1.5 bg-white/50 text-mahogany/65 font-sans font-medium text-[10px] uppercase tracking-[0.12em] rounded-full border border-mahogany/8 hover:border-mahogany/15 hover:bg-white/70 transition-all duration-300">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <div className="font-sans text-mahogany/40 text-xs font-medium tracking-wider uppercase mt-2 sm:mt-0">
                                Starting at: <span className="text-mahogany font-semibold">{service.price}</span>
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Bottom separator line */}
                    <div className="absolute bottom-0 left-6 right-6 h-px bg-mahogany/8" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT: Framed image stack with slow cycling */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-full lg:w-[50%] relative min-h-[420px] md:min-h-[520px] flex items-center justify-center mt-8 lg:mt-0"
          >
            {/* Bracket-corner frames behind the images (reference style) */}
            {rightImages.map((_, i) => {
              const offset = (i - activeImageIndex + rightImages.length) % rightImages.length;
              if (offset > 2) return null;
              
              const yShift = offset * 25;
              const xShift = offset * -20;
              const scaleAmount = 1 - (offset * 0.04);

              return (
                <motion.div
                  key={`frame-${i}`}
                  animate={{
                    x: xShift,
                    y: yShift,
                    scale: scaleAmount,
                    opacity: 0.6 - (offset * 0.15),
                  }}
                  transition={{ 
                    duration: 2.0,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.05,
                  }}
                  className="absolute inset-0 m-auto w-[85%] lg:w-[92%] aspect-[4/3] pointer-events-none z-0"
                >
                  {/* Corner brackets */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-t-[1.5px] border-l-[1.5px] border-mahogany/20" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 border-t-[1.5px] border-r-[1.5px] border-mahogany/20" />
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-[1.5px] border-l-[1.5px] border-mahogany/20" />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-[1.5px] border-r-[1.5px] border-mahogany/20" />
                  
                  {/* Thin border */}
                  <div className="absolute inset-0 border border-mahogany/8 rounded-sm" />
                </motion.div>
              );
            })}

            {/* Images — smooth, cinematic cycling */}
            {rightImages.map((img, i) => {
              const offset = (i - activeImageIndex + rightImages.length) % rightImages.length;
              const zIndex = 30 - offset;
              
              // Stack layout: each card offsets slightly down-left behind the front
              const yShift = offset * 25;
              const xShift = offset * -20;
              const scaleAmount = 1 - (offset * 0.04);
              const opacityAmount = offset === 0 ? 1 : Math.max(0.3, 0.85 - (offset * 0.25));

              const dropShadow = offset === 0 
                ? "0 30px 80px -15px rgba(88, 51, 30, 0.15), 0 10px 25px -5px rgba(88,51,30,0.08)" 
                : `0 ${8 + offset * 4}px ${20 + offset * 8}px rgba(88, 51, 30, ${0.05})`;

              return (
                <motion.div
                  key={img}
                  animate={{
                    x: xShift,
                    y: yShift,
                    scale: scaleAmount,
                    zIndex: zIndex,
                    opacity: opacityAmount,
                  }}
                  transition={{ 
                    duration: 2.0,        // Very slow, deliberate transition
                    ease: [0.25, 0.46, 0.45, 0.94],  // Smooth ease-out
                    delay: 0.0,
                  }}
                  style={{ boxShadow: dropShadow }}
                  className="absolute inset-0 m-auto w-[85%] lg:w-[92%] aspect-[4/3] bg-white/60 rounded-2xl md:rounded-3xl border border-white/60 p-2.5 md:p-3 overflow-hidden origin-center"
                >
                  <div className="w-full h-full relative rounded-xl md:rounded-2xl overflow-hidden bg-[#E8E5E0] premium-img-wrapper">
                    <img 
                      src={img} 
                      alt="Portfolio web sample" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
