import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const QuickStats = () => {
  return (
    <div className="container" style={{ padding: '60px 0' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
        <motion.div 
          className="glass-panel" 
          style={{ padding: '32px', textAlign: 'center' }}
          whileHover={{ y: -5 }}
        >
          <div style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '8px', color: 'var(--accent-color)' }}>270</div>
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textTransform: 'uppercase' }}>Votes to Win</div>
        </motion.div>
        
        <motion.div 
          className="glass-panel" 
          style={{ padding: '32px', textAlign: 'center' }}
          whileHover={{ y: -5 }}
        >
          <div style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '8px', color: 'var(--accent-color)' }}>Nov 3</div>
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textTransform: 'uppercase' }}>Election Day</div>
        </motion.div>

        <motion.div 
          className="glass-panel" 
          style={{ padding: '32px', textAlign: 'center', background: 'rgba(59, 130, 246, 0.1)', borderColor: 'var(--accent-color)' }}
          whileHover={{ y: -5 }}
        >
          <Link to="/checklist" style={{ textDecoration: 'none' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '8px', color: 'var(--text-primary)' }}>Are you ready?</div>
            <div style={{ color: 'var(--accent-color)', fontSize: '0.875rem', fontWeight: '600' }}>Complete your Checklist →</div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default QuickStats;
