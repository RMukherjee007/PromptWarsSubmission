import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const glossaryItems = [
  { term: 'Electoral College', definition: 'The process used to elect the President and Vice President of the United States.' },
  { term: 'Swing State', definition: 'A state where the two major political parties have similar levels of support among voters.' },
  { term: 'Primary Election', definition: 'An election that narrows the field of candidates before a general election.' },
  { term: 'Caucus', definition: 'A meeting of supporters or members of a specific political party or movement.' },
  { term: 'Gerrymandering', definition: 'The manipulation of boundaries to favor one party or class.' },
  { term: 'Incumbent', definition: 'The current holder of an office or post.' }
];

const GlossaryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = glossaryItems.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-wrapper container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '16px' }}>Election Glossary</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Master the terminology of the American democratic process.</p>
      </motion.div>

      <input 
        type="text" 
        className="search-input" 
        placeholder="Search terms..." 
        style={{ margin: '0 auto 60px auto', display: 'block' }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="glossary-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.term}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-panel"
              style={{ padding: '32px' }}
            >
              <h3 style={{ color: 'var(--accent-color)', marginBottom: '12px' }}>{item.term}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>{item.definition}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GlossaryPage;
