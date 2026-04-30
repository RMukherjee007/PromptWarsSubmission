import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="page-wrapper container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '32px' }}>Why it Matters</h1>
        <div className="glass-panel" style={{ padding: '48px', lineHeight: '1.8', color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
          <p style={{ marginBottom: '24px' }}>
            The United States Presidential election is one of the most complex and significant democratic processes in the world. It is designed to balance the power between the people and the states, ensuring that every region has a voice in the leadership of the country.
          </p>
          <p style={{ marginBottom: '24px' }}>
            Understanding this process is crucial for informed citizenship. From the early stages of fundraising and organization to the finality of Inauguration Day, each step serves a specific purpose in vetting candidates and reflecting the will of the electorate.
          </p>
          <p>
            This assistant was built to make these concepts accessible, providing a clear timeline and an interactive way to explore the nuances of American democracy.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
