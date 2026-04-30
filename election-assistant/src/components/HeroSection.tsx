import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      
      {/* Abstract Background Elements */}
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 0, opacity: 0.5 }} aria-hidden="true" />
      <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: 0 }} aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ display: 'inline-block', padding: '8px 16px', borderRadius: '30px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '24px', fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.05em', color: '#ccc' }}>
            DEMYSTIFYING DEMOCRACY
          </div>
        </motion.div>

        <motion.h1
          className="text-gradient"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1.1, marginBottom: '24px', maxWidth: '900px', margin: '0 auto 24px' }}
        >
          The Journey to the Presidency
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 48px', lineHeight: 1.6 }}
        >
          An interactive guide to understanding the complex process of the United States presidential election.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <button 
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            style={{ padding: '16px 32px', fontSize: '1.125rem', fontWeight: 600, background: 'var(--text-primary)', color: 'var(--bg-color)', border: 'none', borderRadius: '8px', cursor: 'pointer', transition: 'transform 0.2s ease', display: 'flex', alignItems: 'center', gap: '8px', margin: '0 auto' }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Explore the Process
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
