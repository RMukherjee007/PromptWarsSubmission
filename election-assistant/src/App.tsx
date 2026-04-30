import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

// Layout Components
import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';
import Background from './components/layout/Background';

// Lazy Loaded Pages for Performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const ChecklistPage = lazy(() => import('./pages/ChecklistPage'));
const GlossaryPage = lazy(() => import('./pages/GlossaryPage'));
const HistoryPage = lazy(() => import('./pages/HistoryPage'));
const DemographicsPage = lazy(() => import('./pages/DemographicsPage'));
const CandidateSearch = lazy(() => import('./pages/CandidateSearch'));
const AssistantPage = lazy(() => import('./pages/AssistantPage'));
const QuizPage = lazy(() => import('./pages/QuizPage'));

const PageLoader = () => (
  <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
    <motion.div
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      Loading experience...
    </motion.div>
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <ScrollToTop />
      <Background />
      
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* Global Progress Bar */}
      <motion.div
        role="progressbar"
        aria-label="Scroll Progress"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, height: '4px',
          background: 'var(--accent-color)', transformOrigin: '0%', scaleX,
          zIndex: 2000, boxShadow: '0 0 10px var(--accent-glow)'
        }}
      />

      <Navbar />
      <BackToTop />

      <main id="main-content" role="main">
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/checklist" element={<ChecklistPage />} />
              <Route path="/glossary" element={<GlossaryPage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/demographics" element={<DemographicsPage />} />
              <Route path="/search" element={<CandidateSearch />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/assistant" element={<AssistantPage />} />
            </Routes>
          </AnimatePresence>
        </Suspense>

        <footer role="contentinfo" style={{ padding: '60px 0', textAlign: 'center', borderTop: '1px solid var(--card-border)', marginTop: '100px' }}>
          <div className="container">
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              Designed to demystify democracy. Minimalist educational platform powered by AI.
            </p>
          </div>
        </footer>
      </main>
    </Router>
  );
}

export default App;
