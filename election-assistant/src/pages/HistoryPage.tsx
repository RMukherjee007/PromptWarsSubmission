import React from 'react';
import { motion } from 'framer-motion';

const landmarkElections = [
  { year: '1789', title: 'The First Election', desc: 'George Washington was unanimously elected as the first President of the United States.' },
  { year: '1860', title: 'Lincoln & The Union', desc: 'The election of Abraham Lincoln led to the American Civil War but ultimately preserved the Union.' },
  { year: '1920', title: 'Women\'s Suffrage', desc: 'The first presidential election in which women in every state had the right to vote.' },
  { year: '1960', title: 'The TV Age', desc: 'The first televised debates between Kennedy and Nixon changed political campaigning forever.' },
  { year: '2008', title: 'A Historic First', desc: 'Barack Obama was elected as the first African American President of the United States.' }
];

const HistoryPage = () => {
  return (
    <div className="page-wrapper container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '32px' }}>Election History</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '60px', maxWidth: '600px' }}>
          Explore the landmark elections that shaped American democracy and the progress of voting rights.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {landmarkElections.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel"
              style={{ padding: '32px', display: 'flex', gap: '32px', alignItems: 'center' }}
            >
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--accent-color)', opacity: 0.5, minWidth: '120px' }}>
                {item.year}
              </div>
              <div>
                <h3 style={{ marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HistoryPage;
