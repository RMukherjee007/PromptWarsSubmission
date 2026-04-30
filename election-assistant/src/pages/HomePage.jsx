import React from 'react';
import HeroSection from '../components/HeroSection';
import ElectionTimeline from '../components/ElectionTimeline';
import QuickStats from '../components/QuickStats';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <QuickStats />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <ElectionTimeline />
      </div>
    </motion.div>
  );
};

export default HomePage;
