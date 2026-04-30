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
        
        {/* Semantic SEO (JSON-LD) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "US Election Assistant",
              "description": "Educational platform for US Elections",
              "url": "https://election-frontend-883918498227.us-central1.run.app"
            }
          `}
        </script>
      </Helmet>
      <HeroSection />
      
      {/* Polling Place Finder (Google Maps Service Usage) */}
      <section className="map-section container" style={{ padding: '100px 0' }}>
        <div className="glass-panel" style={{ padding: '40px', textAlign: 'center' }}>
          <h2 className="text-gradient" style={{ marginBottom: '20px' }}>Find Your Polling Place</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>
            Use the interactive map below to locate official voting centers and drop-off locations in your area.
          </p>
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--card-border)', height: '400px' }}>
            <iframe 
              title="Google Maps Polling Place Locator"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy" 
              allowFullScreen 
              src="https://www.google.com/maps/embed/v1/search?key=YOUR_API_KEY_HERE&q=polling+places+near+me"
            ></iframe>
          </div>
          <p style={{ marginTop: '20px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            *Powered by Google Maps Service
          </p>
        </div>
      </section>

      <QuickStats />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <ElectionTimeline />
      </div>
    </motion.div>
  );
};

export default HomePage;
