import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import GlowButton from './GlowButton';

/* ── Dreamy image data ── */
const images = [
  { src: '/img1.png', label: 'Landing Page' },
  { src: '/img2.png', label: 'Interior' },
  { src: '/img3.png', label: 'Minimal' },
  { src: '/img4.png', label: 'Modern' },
  { src: '/img5.png', label: 'Organic' },
  { src: '/img6.png', label: 'Dreamy' },
  { src: '/img7.png', label: 'Organic' },
  { src: '/img8.png', label: 'Dreamy' },
  { src: '/img9.png', label: 'Organic' },
  { src: '/img10.png', label: 'Dreamy' },
  { src: '/img11.png', label: 'Organic' },
  { src: '/img12.png', label: 'Dreamy' },
  { src: '/img16.png', label: 'Dreamy' },
];
const doubled = [...images, ...images];

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-x-hidden bg-transparent pt-[12vh] md:pt-[15vh] flex flex-col">

      {/* ── Hero Text ── */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-6xl mx-auto">
        
        
          

        {/* Dynamic Inline Image H1 */}
        <motion.h1 
          className="font-serif text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem] text-mahogany font-light leading-[1.1] tracking-tight relative flex flex-col items-center gap-y-1 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          
          <div className="flex flex-wrap justify-center w-full">
            {"Designed with intention,".split(" ").map((word, i) => (
              <motion.span 
                 key={`title-1-${i}`} 
                 variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                 }}
                 className="inline-block mr-[0.25em]"
              >
                 {word}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-wrap justify-center w-full">
            {"built to".split(" ").map((word, i) => (
               <motion.span 
                 key={`title-2-${i}`} 
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
              className="inline-block italic text-drift ml-[0.25em]"
            >
              perform.
            </motion.span>
          </div>
        </motion.h1>

        {/* Prominent Name Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 mb-2"
        >
          <span className="font-cursive text-4xl md:text-5xl lg:text-[3.5rem] tracking-normal text-mahogany" style={{ lineHeight: 1 }}>
            Tasneem Raza
          </span>
        </motion.div>

        {/* Description paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-2 text-drift font-sans font-light text-base md:text-lg max-w-2xl leading-relaxed px-4 text-center"
        >
          A CS student, frontend developer & designer 
          crafting beautiful web experiences for startups, brands, and 
          everything in between.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
          <GlowButton href="#contact">
            Get In Touch Today
            <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </GlowButton>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-6 py-3 rounded-full border border-mahogany/30 text-mahogany hover:bg-mahogany/5 transition-all duration-300 flex items-center shadow-sm"
          >
            View Resume <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>

      {/* ── Infinite Marquee — seamless part of hero ── */}
      <div className="relative z-10 pt-16 md:pt-20 pb-0">
        {/* Cloudy fade: Left */}
        <div
          className="absolute left-0 top-0 bottom-0 w-36 md:w-64 lg:w-80 z-20 pointer-events-none bg-[#ebe5e0]/20 mask-gradient-right"
        />
        {/* Cloudy fade: Right */}
        <div
          className="absolute right-0 top-0 bottom-0 w-36 md:w-64 lg:w-80 z-20 pointer-events-none bg-[#ebe5e0]/20 mask-gradient-left"
        />

        {/* Scrolling images */}
        <div className="marquee-track overflow-hidden">
          <div
            className="flex w-max gap-8 md:gap-16"
            style={{
              animation: 'marquee-primary 200s linear infinite',
              willChange: 'transform',
            }}
          >
            {doubled.map((img, i) => (
              <div
                key={i}
                className="group flex-shrink-0 relative"
              >
                <div
                  className="w-[320px] md:w-[480px] lg:w-[600px] xl:w-[700px] h-[240px] md:h-[360px] lg:h-[450px] xl:h-[500px] rounded-[24px] md:rounded-[32px] p-2 md:p-3 overflow-hidden bg-white/80 transition-all duration-1000 group-hover:scale-[1.02] border border-white/60 shadow-[0_8px_40px_rgba(88,51,30,0.06)]"
                >
                   <div className="w-full h-full rounded-[16px] md:rounded-[22px] overflow-hidden border border-mahogany/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.03)] premium-img-wrapper">
                     <img
                       src={img.src}
                       alt={img.label}
                       className="w-full h-full object-cover"
                       loading="lazy"
                     />
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
