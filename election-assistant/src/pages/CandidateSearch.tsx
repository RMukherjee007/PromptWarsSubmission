import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchCandidate } from '../services/api';

interface CandidateData {
  name: string;
  bio: string;
  career: string;
  facts: string[];
}

const CandidateSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [candidate, setCandidate] = useState<CandidateData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchCandidate(query);
      if (data.name) {
        setCandidate(data);
      } else {
        setError("Could not find data for this figure. Please try again!");
      }
    } catch (err) {
      console.error(err);
      setError("Search failed. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="page-wrapper container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="search-header"
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '16px' }}>Candidate Researcher</h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Explore the political careers, biographies, and historical impact of any candidate, past or present, using AI-driven synthesis.
        </p>
      </motion.div>

      <div className="search-controls" style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginBottom: '80px' }}>
        <input 
          type="text" 
          className="search-input" 
          placeholder="Enter candidate name (e.g., Abraham Lincoln, Kamala Harris)..."
          style={{ maxWidth: '600px', marginBottom: 0 }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button 
          className="btn btn-primary haptic-press" 
          onClick={handleSearch}
          disabled={isLoading}
        >
          {isLoading ? 'Researching...' : 'Search'}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {error && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            style={{ color: '#ff4444', textAlign: 'center' }}
          >
            {error}
          </motion.div>
        )}

        {candidate && !error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="glass-panel candidate-profile"
            style={{ padding: '60px', maxWidth: '900px', margin: '0 auto' }}
          >
            <div className="profile-layout">
              <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>{candidate.name}</h2>
              
              <div className="profile-section" style={{ marginBottom: '40px' }}>
                <h4 style={{ color: 'var(--accent-color)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '12px' }}>Biography</h4>
                <p style={{ color: 'var(--text-primary)', fontSize: '1.125rem', lineHeight: '1.6' }}>{candidate.bio}</p>
              </div>

              <div className="profile-section" style={{ marginBottom: '40px' }}>
                <h4 style={{ color: 'var(--accent-color)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '12px' }}>Political Career</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{candidate.career}</p>
              </div>

              <div className="profile-section">
                <h4 style={{ color: 'var(--accent-color)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '12px' }}>Quick Facts</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {candidate.facts.map((fact, i) => (
                    <li key={i} style={{ padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-secondary)' }}>
                      • {fact}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CandidateSearch;
