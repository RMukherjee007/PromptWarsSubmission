import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const terms = [
  { term: 'Absentee Ballot', definition: 'A ballot cast by a voter who is unable to go to a polling station in person.' },
  { term: 'Ballot Measure', definition: 'A law, issue, or question that appears on a statewide or local ballot for voters to decide.' },
  { term: 'Caucus', definition: 'A local meeting where registered members of a political party gather to vote for their preferred candidate.' },
  { term: 'Electoral College', definition: 'A body of people representing the states of the US, who formally cast votes for the election of the president and vice president.' },
  { term: 'Gerrymandering', definition: 'Manipulating the boundaries of an electoral constituency so as to favor one party or class.' },
  { term: 'Incumbent', definition: 'The current holder of a political office.' },
  { term: 'PAC (Political Action Committee)', definition: 'An organization that raises money privately to influence elections or legislation.' },
  { term: 'Popular Vote', definition: 'The total number of individual votes cast by citizens in an election.' },
  { term: 'Primary Election', definition: 'An election to appoint delegates to a party conference or to select the candidates for a principal election.' },
  { term: 'Swing State', definition: 'A US state where the two major political parties have similar levels of support among voters.' }
];

const GlossaryPage = () => {
  const [search, setSearch] = useState('');

  const filteredTerms = terms.filter(t => 
    t.term.toLowerCase().includes(search.toLowerCase()) ||
    t.definition.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-wrapper container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '16px' }}>Election Glossary</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
          Quick reference for common political and electoral terminology.
        </p>

        <input 
          type="text" 
          placeholder="Search for a term..." 
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="glossary-grid">
          <AnimatePresence>
            {filteredTerms.map((t, i) => (
              <motion.div
                key={t.term}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-panel glossary-card"
              >
                <h3 style={{ color: 'var(--accent-color)', marginBottom: '12px' }}>{t.term}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: '1.6' }}>{t.definition}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default GlossaryPage;
