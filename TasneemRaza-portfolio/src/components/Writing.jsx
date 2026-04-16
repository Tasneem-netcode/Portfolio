import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import GlowButton from './GlowButton';

const articles = [
  {
    id: 1,
    title: "The Art of Feeling Too Much",
    date: "July 12, 2025",
    readTime: "3 min read",
    mood: "Emotional",
    link: "https://medium.com/@tasneem78899/the-art-of-feeling-too-much-fafa7652b3f3"
  },
  {
    id: 2,
    title: "Regex Isn’t Scary: The Secret Skill Every Developer Needs (But Rarely Masters)",
    date: "Oct 17, 2025",
    readTime: "4 min read",
    mood: "Technical",
    link: "https://medium.com/@tasneem78899/regex-isnt-scary-the-secret-skill-every-developer-needs-but-rarely-masters-f8be58a2cc9e"
  },
  {
    id: 3,
    title: "What Happens When Curiosity Meets AI: My Learning Reflections From the Intensive",
    date: "Dec 14, 2025",
    readTime: "6 min read",
    mood: "Curious",
    link: "https://medium.com/@tasneem78899/what-happens-when-curiosity-meets-ai-my-learning-reflections-from-the-intensive-0e1264afb68b"
  }
];

const tags = ["All", "Emotional", "Technical", "Curious"];

const TitleWord = ({ text, i, total, scrollYProgress }) => {
  const start = i / total;
  const end = start + (1 / total);
  
  // Smoothly blend from muted beige-gray to strong warm brown based on scroll progress
  const color = useTransform(
    scrollYProgress, 
    [start, end], 
    ["rgba(150,146,132,0.3)", "rgba(91,51,30,1)"]
  );

  return <motion.span style={{ color }} className="transition-colors duration-100">{text}</motion.span>;
};

const ArticleItem = ({ article }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "center center"]
  });

  const words = article.title.split(" ");

  return (
    <motion.a
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      ref={ref}
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group py-8 md:py-12 border-b border-mahogany/15 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 transition-colors hover:border-mahogany/40"
    >
      <div className="flex flex-col transform transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:-translate-y-1 w-full max-w-2xl">
        <div className="flex items-center gap-4 mb-3">
          <span className="text-xs font-mono tracking-widest text-drift uppercase">
            {article.date}
          </span>
          <span className="w-1 h-1 rounded-full bg-mahogany/20" />
          <span className="text-xs font-mono tracking-widest text-drift uppercase">
            {article.readTime}
          </span>
          <span className="w-1 h-1 rounded-full bg-mahogany/20" />
          <span className="text-xs font-mono tracking-widest text-mahogany uppercase px-2 py-0.5 border border-mahogany/20 rounded-full">
            {article.mood}
          </span>
        </div>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium tracking-tight">
          {words.map((word, i) => (
            <span key={i}>
              <TitleWord text={word} i={i} total={words.length} scrollYProgress={scrollYProgress} />
              {i < words.length - 1 && " "}
            </span>
          ))}
        </h2>
      </div>
      
      <GlowButton isCircular={true} className="w-12 h-12 shrink-0">
        <ArrowUpRight className="w-5 h-5 text-white transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </GlowButton>
    </motion.a>
  );
};

export default function Writing() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredArticles = articles.filter(
    article => activeFilter === "All" || article.mood === activeFilter
  );

  return (
    <section className="min-h-screen pt-48 pb-32 px-6 md:px-12 flex flex-col items-center bg-porcelain">
      <div className="w-full max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-medium text-mahogany tracking-tight mb-6">
            After Hours
          </h1>
          <p className="text-drift text-lg md:text-xl font-sans font-light max-w-lg">
            A collection of my thoughts on design, engineering, and the spaces where they intersect.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-16"
        >
          {tags.map((tag) => {
            const isActive = activeFilter === tag;
            return (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`relative px-5 py-2 rounded-full border transition-colors duration-300 ${
                  isActive ? "border-mahogany text-white" : "border-mahogany/20 text-mahogany hover:border-mahogany"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="writing-filter-pill"
                    className="absolute inset-0 bg-mahogany rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 text-sm font-sans font-medium">{tag}</span>
              </button>
            );
          })}
        </motion.div>

        <motion.div layout className="flex flex-col w-full">
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((article) => (
              <ArticleItem key={article.id} article={article} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
