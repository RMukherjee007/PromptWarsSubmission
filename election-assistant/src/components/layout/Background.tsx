import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed-bg" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, background: '#050505', overflow: 'hidden' }}>
      {/* Mesh Gradient */}
      <div style={{ 
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(99, 102, 241, 0.05) 0%, transparent 50%)',
        filter: 'blur(40px)'
      }} />
      
      {/* Grain Overlay */}
      <div style={{ 
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        opacity: 0.02, pointerEvents: 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} />
    </div>
  );
};

export default Background;
