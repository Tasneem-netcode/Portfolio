import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Background from './components/Background';

/* ── Lazy-loaded route components ── */
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));
const Writing = lazy(() => import('./components/Writing'));
const Process = lazy(() => import('./components/Process'));
const Services = lazy(() => import('./components/Services'));

/* Quick page transition — snappier than before */
const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};
const pageTransition = { duration: 0.35, ease: [0.16, 1, 0.3, 1] };

function Home() {
  return (
    <motion.main 
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="relative z-10 mix-blend-normal"
    >
      <Hero />
      <About />
      <Suspense fallback={null}>
        <Skills />
        <Projects />
      </Suspense>
    </motion.main>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      <Suspense fallback={null}>
        {children}
      </Suspense>
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
        <Route path="/process" element={<PageWrapper><Process /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <SmoothScroll>
        <Background />
        {/* Navbar top/bottom fades are inside Navbar now — no backdrop-blur here */}
        <Navbar />
        <AnimatedRoutes />
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
      </SmoothScroll>
    </Router>
  );
}

export default App;
