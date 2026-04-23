import { motion } from 'framer-motion';

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

const stages = [
  {
    id: "01",
    title: "Understand",
    desc: "Before a single line of code, I dig into the brief. Who is this for? What do they feel? Clarity here saves weeks later.",
    img: "/img5.png",
    pos: { top: "5%", left: "8%" },
    imgFirst: false,
  },
  {
    id: "02",
    title: "Design",
    desc: "I sketch the experience in my head first, translating it. I think in components, whitespace, and natural flow.",
    img: "/img9.png",
    pos: { top: "28%", right: "8%" },
    imgFirst: true,
  },
  {
    id: "03",
    title: "Build",
    desc: "React + Tailwind is my home. I write clean code with a focus on performance and mobile-first responsiveness.",
    img: "/img4.png",
    pos: { top: "55%", left: "10%" },
    imgFirst: true,
  },
  {
    id: "04",
    title: "Refine",
    desc: "Shipping is not the end. I test across devices, tighten the details, and make sure it feels as good as it looks.",
    img: "/img7.png",
    pos: { top: "80%", right: "10%" },
    imgFirst: false,
  }
];

export default function Process() {
  return (
    <section className="relative w-full bg-porcelain pt-24 sm:pt-32 pb-20 sm:pb-32 overflow-hidden min-h-screen">
      
      {/* Heavenly Background Touches */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[50%] bg-[#E3D5B5] rounded-full blur-[120px] opacity-40" />
      </div>

      <div className="w-full max-w-[1600px] mx-auto relative z-10 flex flex-col">
        
        {/* --- Top Center Header (Like Hero/About) --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 mb-12 sm:mb-16 md:mb-24"
        >
          <motion.span 
            variants={{
               hidden: { opacity: 0, y: 20 },
               visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="font-sans font-light tracking-[0.2em] text-drift uppercase text-[10px] sm:text-xs md:text-sm mb-4 sm:mb-6 block"
          >
            Process & Methodology
          </motion.span>
          <h1 className="font-serif text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] text-mahogany font-light tracking-tight leading-[1.1] max-w-4xl mx-auto flex flex-wrap justify-center">
            {"How I".split(" ").map((word, i) => (
              <motion.span 
                key={`how-${i}`} 
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
              className="text-drift italic inline-block"
            >
              Think
            </motion.span>
          </h1>
        </motion.div>

        {/* --- DESKTOP: Absolute Scattered Layout --- */}
        {/* We use a very tall container (220vh) to ensure images never overlap vertically */}
        <div className="hidden md:block relative w-full h-[220vh]">
          
          {/* Edge Aesthetic Details (placed carefully away from stages) */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} className="absolute top-[2%] right-[5%] max-w-[120px] font-sans font-light text-[11px] tracking-widest uppercase text-drift leading-[1.6] text-right">
            DIGGING DEEP <br/>INTO THE<br/> PROBLEM
          </motion.div>
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="absolute top-[40%] left-[5%] max-w-[120px] font-sans font-light text-[11px] tracking-widest uppercase text-drift leading-[1.6]">
            PERFECT <br/> BALANCE / <br/> 2026'
          </motion.div>
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} className="absolute bottom-[2%] left-[5%] font-sans font-light text-[11px] tracking-widest uppercase text-drift leading-[1.6]">
            C1 / 26'
          </motion.div>
          
          

          {/* Center decorative crosshair */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1.5, delay: 1 }}
            className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-drift/20 flex flex-col items-center justify-center pointer-events-none z-10"
          >
            <span className="text-mahogany/40 text-2xl font-light leading-none">+</span>
          </motion.div>

          {/* --- Heavenly Curvy S-Lines connecting the steps --- */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none" viewBox="0 0 1000 1000" fill="none">
             <defs>
               <linearGradient id="heaven-line" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#C9BBA5" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#58331E" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#C9BBA5" stopOpacity="0.1" />
               </linearGradient>
               {/* Elegant Arrowhead marker */}
               <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                 <path d="M 0 0 L 10 5 L 0 10 z" fill="#58331E" opacity="0.4" />
               </marker>
             </defs>

             {/* Line 1: Understand (01) -> Design (02) */}
             <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 2.2, ease: "easeInOut", delay: 0.4 }}
                d="M 280 80 C 500 90, 500 300, 720 300"
                stroke="url(#heaven-line)"
                strokeWidth="1.5"
                strokeDasharray="12 12"
                markerEnd="url(#arrow)"
             />

             {/* Line 2: Design (02) -> Build (03) */}
             <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 2.2, ease: "easeInOut", delay: 1 }}
                d="M 720 330 C 500 330, 500 570, 280 570"
                stroke="url(#heaven-line)"
                strokeWidth="1.5"
                strokeDasharray="12 12"
                markerEnd="url(#arrow)"
             />

             {/* Line 3: Build (03) -> Refine (04) */}
             <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 2.2, ease: "easeInOut", delay: 1.6 }}
                d="M 280 600 C 500 600, 500 820, 720 820"
                stroke="url(#heaven-line)"
                strokeWidth="1.5"
                strokeDasharray="12 12"
                markerEnd="url(#arrow)"
             />
          </svg>

          {/* Scattered Items */}
          {stages.map((stage, i) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="absolute flex items-center gap-6 lg:gap-8 xl:gap-12 group"
              style={{
                top: stage.pos.top,
                ...(stage.pos.left ? { left: stage.pos.left } : {}),
                ...(stage.pos.right ? { right: stage.pos.right } : {}),
              }}
            >
              {stage.imgFirst ? (
                <>
                  <div className="w-[180px] lg:w-[220px] xl:w-[280px] aspect-[4/5] bg-white/40 p-2 lg:p-3 shadow-[0_12px_40px_rgba(88,51,30,0.06)] border border-white/60 flex flex-col relative">
                    <div className="w-full h-full overflow-hidden premium-img-wrapper">
                      <img src={stage.img} alt={stage.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]" />
                    </div>
                  </div>
                  <div className="max-w-[200px] lg:max-w-[260px] xl:max-w-[320px]">
                    <span className="font-serif italic text-2xl lg:text-3xl xl:text-4xl text-drift/40 mb-2 lg:mb-3 block">({stage.id})</span>
                    <RevealText text={stage.title} className="font-serif text-3xl lg:text-4xl xl:text-5xl text-mahogany mb-3 lg:mb-4" stagger={0.08} />
                    {/* Darker, clearer text font-size */}
                    <RevealText text={stage.desc} className="font-sans font-light text-mahogany/80 text-[14px] lg:text-[16px] xl:text-[18px] leading-[1.6]" stagger={0.02} />
                  </div>
                </>
              ) : (
                <>
                  <div className="max-w-[200px] lg:max-w-[260px] xl:max-w-[320px] text-right">
                    <span className="font-serif italic text-2xl lg:text-3xl xl:text-4xl text-drift/40 mb-2 lg:mb-3 block">({stage.id})</span>
                    <RevealText text={stage.title} className="font-serif text-3xl lg:text-4xl xl:text-5xl text-mahogany mb-3 lg:mb-4 justify-end" stagger={0.08} />
                    {/* Darker, clearer text font-size */}
                    <RevealText text={stage.desc} className="font-sans font-light text-mahogany/80 text-[14px] lg:text-[16px] xl:text-[18px] leading-[1.6] text-right justify-end" stagger={0.02} />
                  </div>
                  <div className="w-[180px] lg:w-[220px] xl:w-[280px] aspect-[4/5] bg-white/40 p-2 lg:p-3 shadow-[0_12px_40px_rgba(88,51,30,0.06)] border border-white/60 flex flex-col relative">
                    <div className="w-full h-full overflow-hidden premium-img-wrapper">
                      <img src={stage.img} alt={stage.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]" />
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* --- MOBILE: Staggered Flex Column Layout --- */}
        <div className="md:hidden flex flex-col gap-16 sm:gap-24 px-4 sm:px-6 mt-6 sm:mt-8">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-4 sm:gap-6"
            >
              <div className="w-full aspect-[4/3] sm:aspect-[4/5] bg-white/40 p-2 sm:p-3 shadow-[0_12px_40px_rgba(88,51,30,0.06)] border border-white/60 flex flex-col relative">
                <div className="w-full h-full overflow-hidden premium-img-wrapper">
                  <img src={stage.img} alt={stage.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="max-w-full">
                <span className="font-serif italic text-2xl sm:text-3xl text-drift/50 mb-1.5 sm:mb-2 block">({stage.id})</span>
                <RevealText text={stage.title} className="font-serif text-3xl sm:text-4xl text-mahogany mb-2 sm:mb-3" stagger={0.08} />
                <RevealText text={stage.desc} className="font-sans font-light text-mahogany/80 text-[14px] sm:text-[16px] leading-[1.6]" stagger={0.02} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
