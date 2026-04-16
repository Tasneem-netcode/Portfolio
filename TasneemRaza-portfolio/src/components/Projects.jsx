import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';

const tags = [
  { name: "All", count: 4 },
  { name: "Client Work", count: 2 },
  { name: "Personal Projects", count: 1 },
  { name: "UI Experiments", count: 1 },
];

const allProjects = [
  {
    id: 1,
    title: "Poly",
    category: "Website Design",
    tags: ["Client Work"],
    techTags: ["React", "Tailwind", "Freelance"],
    impact: "Helped a local café go from zero web presence to a fully bookable mobile-first experience.",
    timeBadge: "Built in 14 days",
    image: p1
  },
  {
    id: 2,
    title: "OceanX",
    category: "A Year of Discovery",
    tags: ["Personal Projects"],
    techTags: ["Next.js", "Framer Motion", "Personal"],
    impact: "An interactive deep-sea exploration narrative gaining 10k+ views in the first week.",
    timeBadge: "Built in 30 days",
    image: p2
  },
  {
    id: 3,
    title: "Sofa Frame",
    category: "3D Animation",
    tags: ["UI Experiments"],
    techTags: ["Three.js", "React Fiber"],
    impact: "Experimental 3D configurator built for web-based product previews.",
    timeBadge: "Built in 5 days",
    image: p3
  },
  {
    id: 4,
    title: "Art Gallery",
    category: "Exhibition Site",
    tags: ["Client Work"],
    techTags: ["React", "GSAP", "Tailwind"],
    impact: "Digital exhibition room for an independent creator to showcase artworks.",
    timeBadge: "Built in 10 days",
    image: p1
  }
];

export default function Projects() {
  const [activeTag, setActiveTag] = useState("All");

  const filteredProjects = allProjects.filter(project => 
    activeTag === "All" || project.tags.includes(activeTag)
  );

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-porcelain text-mahogany relative min-h-screen overflow-hidden">
       {/* Heavenly Gradient Background using Palette */}
       <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold rounded-full blur-[120px] opacity-30" />
         <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] bg-porcelain rounded-full blur-[100px] opacity-80" />
         <div className="absolute bottom-[-10%] left-[30%] w-[50%] h-[50%] bg-drift rounded-full blur-[120px] opacity-20" />
         <div className="absolute inset-0 bg-porcelain/40 backdrop-blur-[40px]" />
       </div>

       <div className="max-w-[1300px] mx-auto relative z-10 flex flex-col items-center">
          
          {/* Sticky Header and Navbar for Projects */}
          <div className="sticky top-0 z-30 w-full pt-16 pb-12 flex flex-col items-center pointer-events-none">
            
            <div className="relative pointer-events-auto">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-5xl md:text-7xl lg:text-[6.5rem] text-mahogany font-light leading-none mb-8 text-center drop-shadow-[0_4px_24px_rgba(255,255,255,0.5)]"
              >
                Selected <span className="italic text-drift">Projects</span>
              </motion.h1>

              {/* Interactive Pill Filters */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap justify-center gap-2 md:gap-3"
              >
                {tags.map((tag) => {
                  const isActive = activeTag === tag.name;
                  return (
                    <button 
                      key={tag.name}
                      onClick={() => setActiveTag(tag.name)}
                      className={`
                        px-5 py-2.5 rounded-full border shadow-[0_2px_10px_rgba(88,51,30,0.02)] flex items-center justify-center gap-1.5 transition-all duration-500 ease-[0.16,1,0.3,1]
                        ${isActive 
                          ? 'bg-mahogany text-white border-mahogany scale-105 shadow-xl' 
                          : 'bg-white/60 backdrop-blur-md text-mahogany border-white/40 hover:border-mahogany/40 hover:bg-white/90 hover:scale-105'}
                      `}
                    >
                      <span className="text-sm md:text-[15px] font-sans font-medium tracking-tight leading-none">{tag.name}</span>
                      <span className={`text-[9px] font-mono tracking-widest leading-none relative -top-1.5 transition-colors duration-500 ${isActive ? 'text-white/70' : 'text-drift'}`}>
                        {tag.count}
                      </span>
                    </button>
                  );
                })}
              </motion.div>
            </div>
          </div>

          <div className="h-8" />

          {/* 2-Column Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-32 w-full mt-10 relative z-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const isEven = index % 2 === 0;
                return (
                 <motion.a
                   href={`#project-${project.id}`}
                   layout
                   initial={{ opacity: 0, y: isEven ? 80 : 120, scale: 0.95 }}
                   whileInView={{ opacity: 1, y: isEven ? 0 : 40, scale: 1 }}
                   viewport={{ once: true, margin: "-100px" }}
                   exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
                   transition={{ 
                     duration: 1.2, 
                     ease: [0.16, 1, 0.3, 1], 
                     layout: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                     delay: index * 0.15 
                   }}
                   key={project.id}
                   className="group flex flex-col w-full outline-none transition-transform duration-700 hover:-translate-y-2 relative"
                 >
                   {/* Built in X days badge */}
                   <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md text-mahogany text-xs font-semibold shadow-sm overflow-hidden border border-white/40">
                     {project.timeBadge}
                   </div>

                   {/* Image Container with subtle warm overlay on hover */}
                   <div className="relative w-full aspect-[4/5] overflow-hidden bg-mahogany/5 mb-6 rounded-[8px] transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:shadow-[0_20px_60px_rgba(88,51,30,0.15)]">
                     <img 
                       src={project.image} 
                       alt={project.title}
                       className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] scale-[1.05] group-hover:scale-[1.12]"
                     />
                     <div className="absolute inset-0 bg-gold/30 mix-blend-multiply opacity-0 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none" />
                   </div>
                   
                   {/* Text Details & Arrow */}
                   <div className="flex flex-col relative mx-2">
                     <div className="flex items-center gap-2 mb-3 mt-1">
                       {project.techTags.map(tag => (
                         <span key={tag} className="px-2.5 py-1 rounded-full border border-drift/30 text-drift text-[11px] font-mono uppercase tracking-wider">
                           {tag}
                         </span>
                       ))}
                     </div>

                     <div className="flex items-start justify-between border-b border-mahogany/20 pb-4 mb-4 overflow-hidden relative">
                       {/* Hover animated border overlay */}
                       <div className="absolute bottom-0 left-0 h-[1.5px] bg-mahogany w-full origin-left scale-x-0 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-x-100" />
                       
                       <div className="flex flex-col transform transition-transform duration-500 ease-[0.16,1,0.3,1]">
                         <h3 className="text-[28px] md:text-3xl font-sans font-medium text-mahogany tracking-tight">{project.title}</h3>
                         <p className="text-drift font-sans font-light text-base md:text-lg mt-1 transition-colors duration-500 group-hover:text-mahogany/80">{project.category}</p>
                       </div>
                       
                       {/* The Unseen Studio Arrow -> Now sliding from bottom right */}
                       <div className="w-10 h-10 rounded-full border border-transparent group-hover:border-mahogany/20 flex items-center justify-center pt-1 transition-all duration-500 ease-[0.16,1,0.3,1] bg-transparent group-hover:bg-porcelain/50 translate-x-4 translate-y-4 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                          <svg 
                             width="22" height="22" viewBox="0 0 24 24" fill="none" 
                             stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" 
                             className="text-mahogany transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:-rotate-45"
                          >
                             <polyline points="9 18 15 18 15 12"></polyline>
                             <line x1="8" y1="11" x2="15" y2="18"></line>
                          </svg>
                       </div>
                     </div>

                     <p className="text-[15px] font-sans font-medium text-mahogany/70 max-w-sm leading-relaxed">
                       {project.impact}
                     </p>
                   </div>
                 </motion.a>
                )
              })}
            </AnimatePresence>
          </motion.div>

       </div>
    </section>
  );
}
