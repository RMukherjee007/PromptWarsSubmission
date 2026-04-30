import React from 'react';
import { motion } from 'framer-motion';

const DemographicsPage = () => {
  return (
    <div className="page-wrapper container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '32px' }}>Voter Demographics</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '60px', maxWidth: '600px' }}>
          Understanding the diverse groups that make up the American electorate and how demographic shifts impact election outcomes.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          <div className="glass-panel" style={{ padding: '40px' }}>
            <h3 style={{ marginBottom: '16px', color: 'var(--accent-color)' }}>Age Groups</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Historically, older voters have higher turnout rates, but recent elections have seen a surge in youth participation (ages 18-29), particularly in battleground states.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '40px' }}>
            <h3 style={{ marginBottom: '16px', color: 'var(--accent-color)' }}>Educational Background</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              The "education gap" has become a significant predictor in recent cycles, with college-educated voters often leaning differently than those without a degree.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '40px' }}>
            <h3 style={{ marginBottom: '16px', color: 'var(--accent-color)' }}>Regional Trends</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              The shift of populations toward the "Sun Belt" (South and West) from the "Rust Belt" (Northeast and Midwest) continues to alter the Electoral College map every decade.
            </p>
          </div>
        </div>

        <div className="glass-panel" style={{ marginTop: '48px', padding: '40px', border: '1px solid var(--accent-color)' }}>
          <h2 className="text-gradient" style={{ marginBottom: '24px' }}>The Power of Every Vote</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: '1.8' }}>
            Demographics are not destiny. While trends exist, candidates must campaign across all groups to build a winning coalition. The evolving diversity of the US population ensures that the electorate remains dynamic and every voice counts in the final tally.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default DemographicsPage;
