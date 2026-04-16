import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full min-h-screen flex items-center justify-center py-32 px-6 overflow-hidden bg-[#E8E5E0]">
      {/* Google Font for Cursive Name */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap');
        .font-cursive {
          font-family: 'Alex Brush', cursive;
        }
      `}</style>
      
      {/* Heavenly Gradient Background using Palette */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#E3D5B5] rounded-full blur-[120px] opacity-50" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] bg-[#E8E5E0] rounded-full blur-[100px] opacity-80" />
        <div className="absolute bottom-[-10%] left-[30%] w-[50%] h-[50%] bg-[#969284] rounded-full blur-[120px] opacity-20" />
        <div className="absolute inset-0 bg-[#E8E5E0]/40 backdrop-blur-[40px]" />
      </div>

      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center text-center">
        
        {/* Avatar & Name */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-16 md:mb-20"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-[1.25rem] overflow-hidden shadow-[0_12px_40px_rgba(88,51,30,0.25)] bg-[#E8E5E0] p-1 shrink-0 ring-4 ring-[#E3D5B5]/40 transition-all duration-500 hover:shadow-[0_16px_50px_rgba(88,51,30,0.35)]">
             <div className="w-full h-full rounded-[1rem] overflow-hidden">
               <img src="/pyf.png" alt="Tasneem Raza" className="w-full h-full object-cover" />
             </div>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-cursive text-5xl md:text-6xl text-[#58331E] leading-none mb-1 md:mb-2 py-1" style={{ lineHeight: 1.1 }}>
              Tasneem Raza
            </h3>
            <p className="text-[#969284] text-xs md:text-sm font-sans tracking-widest uppercase mt-1">
              Frontend Developer & UI/UX Designer
            </p>
          </div>
        </motion.div>

        {/* Main Text */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[1.8rem] md:text-[3rem] lg:text-[3.4rem] leading-[1.4] md:leading-[1.3] font-serif font-light mb-20 md:mb-32 text-[#58331E] max-w-5xl tracking-tight"
        >
          I help brands and visionaries craft meaningful, <br className="hidden lg:block"/>
          digital experiences <span className="text-drift">that build trust, comfort, and connection by turning <br className="hidden lg:block"/>complex code into interfaces people truly love.</span>
        </motion.p>

        {/* Bottom Chips mapping */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 w-full"
        >
           {/* Chip 1 */}
           <div className="flex items-center px-6 py-2.5 bg-[#e8e4db] rounded-2xl transition-transform duration-300 hover:-translate-y-0.5 shadow-sm">
             <span className="text-base md:text-lg font-serif text-[#58331E] whitespace-nowrap">Frontend Developer</span>
           </div>
           
           {/* Chip 2 */}
           <div className="flex items-center px-6 py-2.5 bg-[#e8e4db] rounded-2xl transition-transform duration-300 hover:-translate-y-0.5 shadow-sm">
             <span className="text-base md:text-lg font-serif text-[#58331E] whitespace-nowrap">Open to Internships</span>
           </div>
           
           {/* Chip 3 */}
           <div className="flex items-center px-6 py-2.5 bg-[#e8e4db] rounded-2xl transition-transform duration-300 hover:-translate-y-0.5 shadow-sm">
             <span className="text-base md:text-lg font-serif text-[#58331E] whitespace-nowrap">Available for Freelance</span>
           </div>
        </motion.div>

      </div>
    </section>
  );
}
