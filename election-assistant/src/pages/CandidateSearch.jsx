import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchCandidate } from '../services/api';

const CandidateSearch = () => {
  const [query, setQuery] = useState('');
  const [candidate, setCandidate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    setCandidate(null);

    try {
      const data = await fetchCandidate(query);
      if (data.error) throw new Error(data.error);
      setCandidate(data);
    } catch (err) {
      setError("Could not find data for this figure. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-wrapper container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '16px', textAlign: 'center' }}>Candidate Researcher</h1>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '48px' }}>
          Explore the history, career, and facts of any political candidate, past or present.
        </p>

        <div style={{ maxWidth: '600px', margin: '0 auto 60px', display: 'flex', gap: '12px' }}>
          <input 
            type="text" 
            className="search-input" 
            style={{ marginBottom: 0, flex: 1 }}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="e.g. Abraham Lincoln, John F. Kennedy, etc."
          />
          <button 
            className="chat-send-btn" 
            style={{ height: '48px', padding: '0 32px' }}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <AnimatePresence mode="wait">
          {loading && (
            <motion.div 
              key="loading"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              style={{ textAlign: 'center', color: 'var(--text-secondary)' }}
            >
              Retrieving historical data via Gemini...
            </motion.div>
          )}

          {error && (
            <motion.div 
              key="error"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              style={{ textAlign: 'center', color: '#ff4444' }}
            >
              {error}
            </motion.div>
          )}

          {candidate && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="glass-panel"
              style={{ padding: '48px', maxWidth: '800px', margin: '0 auto' }}
            >
              <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>{candidate.name}</h2>
              
              <div style={{ marginBottom: '32px' }}>
                <h4 style={{ color: 'var(--accent-color)', textTransform: 'uppercase', fontSize: '0.875rem', marginBottom: '8px' }}>Biography</h4>
                <p style={{ color: 'var(--text-primary)', fontSize: '1.125rem', lineHeight: '1.6' }}>{candidate.bio}</p>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h4 style={{ color: 'var(--accent-color)', textTransform: 'uppercase', fontSize: '0.875rem', marginBottom: '8px' }}>Career Highlights</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{candidate.career}</p>
              </div>

              <div>
                <h4 style={{ color: 'var(--accent-color)', textTransform: 'uppercase', fontSize: '0.875rem', marginBottom: '16px' }}>Interesting Facts</h4>
                <ul style={{ color: 'var(--text-secondary)', paddingLeft: '20px' }}>
                  {candidate.facts.map((fact, i) => (
                    <li key={i} style={{ marginBottom: '12px' }}>{fact}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default CandidateSearch;
