import React from 'react';
import AIChatbot from '../components/AIChatbot';
import { motion } from 'framer-motion';

const AssistantPage = () => {
  return (
    <div className="page-wrapper container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-gradient" style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '16px' }}>AI Assistant</h1>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '48px' }}>
          Have questions? Our AI is here to help you understand every detail of the process.
        </p>
        <AIChatbot />
      </motion.div>
    </div>
  );
};

export default AssistantPage;
