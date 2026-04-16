import { motion } from 'framer-motion';

const experiments = [
  { id: 1, title: 'CSS Art No. 1', tag: 'experiment', link: '#' },
  { id: 2, title: 'Micro-interaction Study', tag: 'experiment', link: '#' },
  { id: 3, title: 'Type Experiment', tag: 'experiment', link: '#' },
];

export default function Lab() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen pt-48 pb-32 px-6 md:px-12 flex flex-col items-center bg-porcelain"
    >
      <div className="w-full max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-medium text-mahogany tracking-tight mb-6">
            The Playground
          </h1>
          <p className="text-drift text-lg md:text-xl font-sans font-light max-w-lg">
            Experiments, curiosities, and things I built just because.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiments.map((exp, i) => (
            <motion.a
              key={exp.id}
              href={exp.link}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative block aspect-square rounded-[2rem] p-8 overflow-hidden transition-transform duration-500 hover:-translate-y-2 border border-mahogany/5 shadow-sm"
              style={{
                background: 'linear-gradient(135deg, var(--color-porcelain) 0%, var(--color-oat) 50%, var(--color-gold) 100%)'
              }}
            >
              <div className="absolute inset-0 bg-mahogany/0 group-hover:bg-mahogany/5 transition-colors duration-500" />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <span className="px-3 py-1 rounded-full border border-mahogany/20 text-mahogany text-xs font-mono tracking-wider w-max">
                  [ {exp.tag} ]
                </span>
                
                <div>
                  <h3 className="text-2xl font-serif text-mahogany mb-4 leading-tight">
                    {exp.title}
                  </h3>
                  <span className="flex items-center gap-2 text-sm font-sans font-medium text-mahogany group-hover:gap-3 transition-all duration-300">
                    View <span className="text-lg leading-none">→</span>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
