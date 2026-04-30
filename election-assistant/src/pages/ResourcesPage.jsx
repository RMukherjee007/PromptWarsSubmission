import React from 'react';
import { motion } from 'framer-motion';

const resources = [
  {
    title: 'USA.gov - Voting and Elections',
    desc: 'Official government portal for voter registration and election information.',
    link: 'https://www.usa.gov/voting'
  },
  {
    title: 'FEC - Federal Election Commission',
    desc: 'Track campaign finance data and learn about election regulations.',
    link: 'https://www.fec.gov'
  },
  {
    title: 'Ballotpedia',
    desc: 'An encyclopedia of American politics covering local, state, and federal elections.',
    link: 'https://ballotpedia.org'
  },
  {
    title: 'Rock the Vote',
    desc: 'A non-partisan organization dedicated to building the political power of young people.',
    link: 'https://www.rockthevote.org'
  }
];

const ResourcesPage = () => {
  return (
    <div className="page-wrapper container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '16px' }}>External Resources</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '48px', maxWidth: '600px' }}>
          Deepen your understanding with these trusted sources of information and tools for civic engagement.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {resources.map((res, i) => (
            <motion.a
              key={i}
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel"
              style={{ padding: '32px', textDecoration: 'none', transition: 'transform 0.3s ease', display: 'block' }}
              whileHover={{ scale: 1.02, borderColor: 'var(--accent-color)' }}
            >
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>{res.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: '1.6' }}>{res.desc}</p>
              <div style={{ marginTop: '24px', color: 'var(--accent-color)', fontSize: '0.875rem', fontWeight: '600' }}>
                Visit Site →
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ResourcesPage;
