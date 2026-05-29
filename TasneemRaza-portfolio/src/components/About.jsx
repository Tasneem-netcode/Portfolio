import { motion } from 'framer-motion';

/* Shared variant — allocated once */
const wordUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

export default function About() {
  return (
    <section id="about" className="relative w-full min-h-screen flex items-center justify-center py-20 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden bg-[#E8E5E0]">
      
      {/* High-performance CSS radial gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_10%,#e3d5b5_0%,transparent_50%)] opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_50%,#e8e5e0_0%,transparent_60%)] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_90%,#969284_0%,transparent_50%)] opacity-20" />
      </div>

      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center text-center">
        
        {/* Avatar & Name */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-center gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-16 md:mb-20"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-[1.25rem] overflow-hidden shadow-[0_12px_40px_rgba(88,51,30,0.25)] bg-[#E8E5E0] p-1 shrink-0 ring-4 ring-[#E3D5B5]/40 transition-shadow duration-500 hover:shadow-[0_16px_50px_rgba(88,51,30,0.35)]">
             <div className="w-full h-full rounded-[1rem] overflow-hidden">
               <img src="/pyf.png" alt="Tasneem Raza" className="w-full h-full object-cover" loading="eager" />
             </div>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-cursive text-4xl sm:text-5xl md:text-6xl text-[#58331E] leading-none mb-1 md:mb-2 py-1" style={{ lineHeight: 1.1 }}>
              Tasneem Raza
            </h3>
            <p className="text-[#969284] text-xs md:text-sm font-sans tracking-widest uppercase mt-1">
              Frontend Developer & UI/UX Designer
            </p>
          </div>
        </motion.div>

        {/* Main Text with staggered reveal — faster stagger */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.03 }
            }
          }}
          className="text-[1.4rem] sm:text-[1.8rem] md:text-[3rem] lg:text-[3.4rem] leading-[1.4] md:leading-[1.3] font-serif font-light mb-14 sm:mb-20 md:mb-32 max-w-5xl tracking-tight"
        >
          {/* Main mahogany text */}
          {"I help brands and visionaries craft meaningful, digital experiences ".split(" ").map((word, i) => (
            <motion.span 
              key={i} 
              variants={wordUp}
              className="inline-block mr-[0.25em] text-[#58331E]"
            >
              {word}
            </motion.span>
          ))}
          
          {/* Secondary drift text */}
          {"that build trust, comfort, and connection by turning complex code into interfaces people truly love.".split(" ").map((word, i) => (
            <motion.span 
              key={`drift-${i}`} 
              variants={wordUp}
              className="inline-block mr-[0.25em] text-drift"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        {/* Bottom Chips mapping */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 w-full"
        >
           {/* Chip 1 */}
           <div className="flex items-center px-4 sm:px-6 py-2 sm:py-2.5 bg-[#e8e4db] rounded-2xl transition-transform duration-300 hover:-translate-y-0.5 shadow-sm">
             <span className="text-sm sm:text-base md:text-lg font-serif text-[#58331E] whitespace-nowrap">Frontend Developer</span>
           </div>
           
           {/* Chip 2 */}
           <div className="flex items-center px-4 sm:px-6 py-2 sm:py-2.5 bg-[#e8e4db] rounded-2xl transition-transform duration-300 hover:-translate-y-0.5 shadow-sm">
             <span className="text-sm sm:text-base md:text-lg font-serif text-[#58331E] whitespace-nowrap">Open to Internships</span>
           </div>
           
           {/* Chip 3 */}
           <div className="flex items-center px-4 sm:px-6 py-2 sm:py-2.5 bg-[#e8e4db] rounded-2xl transition-transform duration-300 hover:-translate-y-0.5 shadow-sm">
             <span className="text-sm sm:text-base md:text-lg font-serif text-[#58331E] whitespace-nowrap">Available for Freelance</span>
           </div>
        </motion.div>

      </div>
    </section>
  );
}
