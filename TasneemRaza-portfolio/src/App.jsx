import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';
import Writing from './components/Writing';
import Skills from './components/Skills';
import Lab from './components/Lab';
import Cursor from './components/Cursor';

function Home() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10 mix-blend-normal"
    >
      <Hero />
      <About />
      <Skills />
      <Projects />
    </motion.main>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/writing" element={<PageWrapper><Writing /></PageWrapper>} />
        <Route path="/lab" element={<PageWrapper><Lab /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Cursor />
      <SmoothScroll>
        <Background />
        {/* Global Glassmorphic Vignettes */}
        <div className="fixed top-0 left-0 right-0 h-16 md:h-24 backdrop-blur-[12px] bg-porcelain/20 z-[45] pointer-events-none mask-gradient-bottom"></div>
        <div className="fixed bottom-0 left-0 right-0 h-16 md:h-24 backdrop-blur-[12px] bg-porcelain/20 z-[45] pointer-events-none mask-gradient-top"></div>
        <Navbar />
        <AnimatedRoutes />
        <Contact />
      </SmoothScroll>
    </Router>
  );
}

export default App;
