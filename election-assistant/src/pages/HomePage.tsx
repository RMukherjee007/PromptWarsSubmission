import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import ElectionTimeline from '../components/ElectionTimeline';
import QuickStats from '../components/QuickStats';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Election Assistant | Demystifying the Democratic Process</title>
        <meta name="description" content="An interactive educational platform designed to help voters understand the U.S. election process through AI, historical data, and personalized tools." />
        <meta name="keywords" content="US Elections, Voting Guide, AI Assistant, Election Timeline, Voter Checklist" />
      </Helmet>
      <HeroSection />
      <QuickStats />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <ElectionTimeline />
      </div>
    </motion.div>
  );
};

export default HomePage;
