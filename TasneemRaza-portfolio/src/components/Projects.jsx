import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import GlowButton from './GlowButton';

import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';

const tags = [
  { name: "All", count: 9 },
  { name: "Frontend / Web Development", count: 4 },
  { name: "AI Projects", count: 2 },
  { name: "Client Work", count: 3 },
];

const allProjects = [
  {
    id: 1,
    title: "3D Interactive Web Experience",
    category: "Creative Development",
    tags: ["Frontend / Web Development"],
    techTags: ["GSAP", "Locomotive Scroll", "Animations"],
    impact: "Built an immersive 3D scrolling experience using GSAP and Locomotive Scroll. Focused on smooth animations, parallax effects, and modern web interactions. Currently experimenting with advanced animation workflows and performance optimization.",
    timeBadge: "In Process",
    github: "https://github.com/Tasneem-netcode/3D-animated-Website-Using-HTML-CSS-and-JS-.git",
    liveLink: "https://3d-animated-motion-website.vercel.app/",
    image: "/project1demo (1).png"
  },
  {
    id: 2,
    title: "Interactive UI Component Library",
    category: "UI Engineering",
    tags: ["Frontend / Web Development"],
    techTags: ["React.js", "Tailwind CSS", "Component Library"],
    impact: "Developed a collection of reusable UI components with focus on scalability, responsiveness, and clean design systems.",
    timeBadge: "Built in 5 days",
    liveLink: "https://interactive-ui-cards.vercel.app/",
    image: "/project2demo.png"
  },
  {
    id: 3,
    title: "Role-Based Task Management System",
    category: "Full Stack UI",
    tags: ["Frontend / Web Development"],
    techTags: ["React.js", "State Management", "Dashboard UI"],
    impact: "Built a role-based dashboard with separate admin and employee views. Implemented conditional access, task assignment, and real-time status tracking.",
    timeBadge: "Built in 10 days",
    github: "https://github.com/Tasneem-netcode/Application_React_Project.git",
    liveLink: "https://employeetaskmanagement-three.vercel.app/",
    image: "/project3demo2.png"
  },
  {
    id: 4,
    title: "High-Converting Website for Small Business",
    category: "Client-Focused Design",
    tags: ["Client Work"],
    techTags: ["Wix Studio", "UI/UX Design", "No-Code"],
    impact: "Designed a modern, conversion-focused website for a small business. Focused on branding, user experience, and clear call-to-actions to improve customer engagement.",
    timeBadge: "Built in 15 days",
    liveLink: "https://tasneem78899.wixstudio.com/openways1",
    image: "/project8demo.png"
  },
  {
    id: 5,
    title: "Amazon Bestseller Analytics Dashboard",
    category: "Data Analytics Project",
    tags: ["AI Projects"],
    techTags: ["Python", "Streamlit", "Data Visualization"],
    impact: "Built an interactive dashboard to analyze bestselling books, uncovering trends in genres, pricing, and ratings.",
    timeBadge: "Built in 10 days",
    github: "https://github.com/Tasneem-netcode/Amazon_books_analysis.git",
    liveLink: "https://amazonbooksanalysis-3vuvyt3d7rowqsdbaqpcfb.streamlit.app/",
    image: "/project4demo.png"
  },
  {
    id: 6,
    title: "AI Crime Investigation Agent",
    category: "AI/LLM",
    tags: ["AI Projects"],
    techTags: ["Python", "LLM", "Prompt Engineering"],
    impact: "Developed an AI agent that analyzes crime scene descriptions to generate insights including possible causes, suspects, and anomalies.",
    timeBadge: "Built in 15 days",
    github: "https://github.com/Tasneem-netcode/AI-CRIME-SCENE-INVESTIGATION-AGENT.git",
    liveLink: "https://ai-crime-scene-investigation-agent-g6ccedd3zqlekuappfkpwlf.streamlit.app/",
    image: "/project5demo.png"
  },
  {
    id: 7,
    title: "Latte Global Café",
    category: "Application Project in react",
    tags: ["Client Work"],
    techTags: ["React", "JavaScript", "Tailwind"],
    impact: "Designed a modern café website focused on mobile-first experience and seamless menu exploration.",
    timeBadge: "Built in 10 days",
    liveLink: "https://latteglobalcafe.vercel.app/",
    image: "/project6demo.png"
  },
  {
    id: 8,
    title: "Bean Board Café",
    category: "Application Project in react",
    tags: ["Client Work"],
    techTags: ["React", "JavaScript", "Tailwind"],
    impact: "Focused on storytelling and brand identity to create a visually engaging café experience.",
    timeBadge: "Built in 10 days",
    liveLink: "https://bean-board-cafe-theta.vercel.app/",
    image: "/img8.png"
  },
  {
    id: 9,
    title: "Cheroney Café",
    category: "Application Project in react",
    tags: ["Client Work"],
    techTags: ["React", "JavaScript", "Tailwind"],
    impact: "Built a clean and responsive interface aimed at improving customer engagement and online presence.",
    timeBadge: "Built in 10 days",
    liveLink: "https://cheroney-cafe.vercel.app/",
    image: "/project7demo.png"
  }
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const isEven = index % 2 === 0;
  // Odd items have a stronger parallax and a margin-top to stagger the grid beautifully
  const y = useTransform(scrollYProgress, [0, 1], isEven ? [60, -60] : [120, -120]);

  return (
    <motion.div ref={ref} style={{ y, marginTop: isEven ? '0px' : '80px' }} className="w-full">
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
        transition={{ 
          duration: 1.2, 
          ease: [0.16, 1, 0.3, 1], 
          layout: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          delay: index * 0.1 
        }}
        className="group flex flex-col w-full outline-none transition-transform duration-700 hover:-translate-y-2 relative"
      >
        {/* Built in X days badge */}
        <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-white/80 text-mahogany text-xs font-semibold shadow-sm overflow-hidden border border-white/40">
          {project.timeBadge}
        </div>

        {/* Image Container — click navigates to live link */}
        <a 
          href={project.liveLink || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative w-full aspect-[4/3] overflow-hidden bg-mahogany/5 mb-6 rounded-[8px] transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:shadow-[0_20px_60px_rgba(88,51,30,0.15)] premium-img-wrapper group/image block cursor-pointer"
        >
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] scale-[1.05] group-hover/image:scale-[1.12]"
          />
          <div className="absolute inset-0 bg-gold/30 mix-blend-multiply opacity-0 transition-opacity duration-700 group-hover/image:opacity-100 pointer-events-none" />
          
          {/* Hover Actions: View Live & GitHub */}
          <div className="absolute inset-0 z-30 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 opacity-0 transition-opacity duration-500 group-hover/image:opacity-100 bg-mahogany/30" onClick={e => e.preventDefault()}>
             <a href={project.liveLink || "#"} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="px-6 py-2.5 rounded-full bg-white text-mahogany text-xs md:text-sm font-medium hover:scale-105 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.12)] border border-white/80 pointer-events-auto hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
                ↗ View Live
             </a>
             {project.github && (
               <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="px-6 py-2.5 rounded-full bg-mahogany text-white text-xs md:text-sm font-medium hover:scale-105 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.2)] border border-mahogany/20 pointer-events-auto hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
                  GitHub
               </a>
             )}
          </div>
        </a>
        
        {/* Text Details & Arrow */}
        <div className="flex flex-col relative mx-2">
          <div className="flex items-center gap-2 mb-3 mt-1 flex-wrap">
            {project.techTags.map(tag => (
              <span key={tag} className="px-2.5 py-1 rounded-full border border-drift/30 text-drift text-[11px] font-mono uppercase tracking-wider bg-white/50">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-start justify-between border-b border-mahogany/20 pb-4 mb-4 overflow-hidden relative">
            {/* Hover animated border overlay */}
            <div className="absolute bottom-0 left-0 h-[1.5px] bg-mahogany w-full origin-left scale-x-0 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-x-100" />
            
            <div className="flex flex-col transform transition-transform duration-500 ease-[0.16,1,0.3,1] pr-4">
              <h3 className="text-[28px] md:text-3xl font-sans font-medium text-mahogany tracking-tight leading-[1.1] mb-1">{project.title}</h3>
              <p className="text-drift font-sans font-light text-base md:text-lg mt-1 transition-colors duration-500 group-hover:text-mahogany/80">{project.category}</p>
            </div>
            
            {/* GlowButton Arrow — matches Writing page style */}
            <a href={project.liveLink || "#"} target="_blank" rel="noopener noreferrer" className="shrink-0 translate-x-4 translate-y-4 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[0.16,1,0.3,1]">
              <GlowButton isCircular={true} className="w-11 h-11">
                <ArrowUpRight className="w-5 h-5 text-white transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </GlowButton>
            </a>
          </div>

          <p className="text-[15px] font-sans font-medium text-mahogany/70 max-w-sm leading-relaxed">
            {project.impact}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

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
         <div className="absolute inset-0 bg-porcelain/60" />
       </div>

       <div className="max-w-[1300px] mx-auto relative z-10 flex flex-col items-center">
          
          {/* Sticky Header and Navbar for Projects */}
          <div className="sticky top-0 z-30 w-full pt-16 pb-12 flex flex-col items-center pointer-events-none">
            
            <div className="relative pointer-events-auto">
              <motion.h1 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.08 }
                  }
                }}
                className="font-serif text-5xl md:text-7xl lg:text-[6.5rem] text-mahogany font-light leading-none mb-8 text-center drop-shadow-[0_4px_24px_rgba(255,255,255,0.5)]"
              >
                {"Selected".split(" ").map((word, i) => (
                  <motion.span 
                    key={`proj-${i}`} 
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
                  className="italic text-drift inline-block"
                >
                  Projects
                </motion.span>
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
                          : 'bg-white/70 text-mahogany border-white/40 hover:border-mahogany/40 hover:bg-white/90 hover:scale-105'}
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
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-10 lg:gap-y-16 w-full mt-10 relative z-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

       </div>
    </section>
  );
}
