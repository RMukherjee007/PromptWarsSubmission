import React, { useRef, memo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const phases = [
  { id: 'announcement', title: 'Announcement', timeframe: 'Spring - Year Before', description: 'Candidates officially announce their intention to run and begin fundraising.' },
  { id: 'primaries', title: 'Primaries & Caucuses', timeframe: 'Jan - June of Election Year', description: 'States hold elections to award delegates and narrow down the party field.' },
  { id: 'conventions', title: 'National Conventions', timeframe: 'Summer of Election Year', description: 'Parties officially nominate their candidates and finalize policy platforms.' },
  { id: 'general', title: 'General Campaign', timeframe: 'Late Summer - Nov', description: 'Major party nominees face off nationwide in debates and on the trail.' },
  { id: 'election-day', title: 'Election Day', timeframe: 'November', description: 'Voters cast ballots for the electors representing their chosen candidate.' },
  { id: 'electoral-college', title: 'Electoral College', timeframe: 'December', description: 'Electors meet to cast official votes. 270 out of 538 are needed to win.' },
  { id: 'inauguration', title: 'Inauguration', timeframe: 'January 20', description: 'The President-elect is officially sworn into office for a four-year term.' }
];

const PhaseCard = memo(({ phase, index }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["0 1", "0.8 1"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  const isEven = index % 2 === 0;

  return (
    <motion.div 
      ref={cardRef}
      style={{ y, opacity, scale }}
      className={`phase-container ${isEven ? 'left' : 'right'}`}
    >
      <div className="timeline-node">
        <div className="node-inner" />
      </div>
      
      <div className="glass-panel phase-card">
        <div className="phase-header">
          <span className="phase-number">0{index + 1}</span>
          <span className="phase-timeframe">{phase.timeframe}</span>
        </div>
        <h3 className="phase-title">{phase.title}</h3>
        <p className="phase-desc">{phase.description}</p>
      </div>
    </motion.div>
  );
});

const ElectionTimeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="timeline-section" ref={containerRef}>
      <div className="container" style={{ position: 'relative' }}>
        
        {/* Background Line */}
        <div className="timeline-line-bg" />
        
        {/* Animated Progress Line */}
        <motion.div 
          className="timeline-line-progress" 
          style={{ scaleY, transformOrigin: 'top' }}
        />

        <div className="phases-wrapper">
          {phases.map((phase, index) => (
            <PhaseCard key={phase.id} phase={phase} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        .timeline-section { padding: 80px 0; position: relative; }
        
        .timeline-line-bg { 
          position: absolute; left: 50%; top: 40px; bottom: 40px; 
          width: 1px; background: rgba(255, 255, 255, 0.1); transform: translateX(-50%); 
        }
        
        .timeline-line-progress { 
          position: absolute; left: 50%; top: 40px; bottom: 40px; 
          width: 2px; background: var(--accent-color); 
          box-shadow: 0 0 10px var(--accent-glow); transform: translateX(-50%); 
          z-index: 1;
        }

        .phases-wrapper { position: relative; display: flex; flex-direction: column; gap: 80px; }
        .phase-container { display: flex; align-items: center; width: 100%; position: relative; }
        .phase-container.left { justify-content: flex-start; padding-right: 50%; }
        .phase-container.right { justify-content: flex-end; padding-left: 50%; }

        .timeline-node { 
          position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); 
          width: 12px; height: 12px; border-radius: 50%; background: #000; 
          border: 2px solid rgba(255, 255, 255, 0.2); z-index: 2; 
        }

        .node-inner { 
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          width: 4px; height: 4px; border-radius: 50%; background: var(--accent-color); 
          opacity: 0; transition: opacity 0.3s ease; 
        }

        .phase-container:hover .node-inner { opacity: 1; }

        .phase-card { width: 90%; padding: 24px; transition: all 0.3s ease; }
        .phase-card:hover { border-color: rgba(255, 255, 255, 0.15); transform: translateY(-4px); }

        .phase-header { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
        .phase-number { font-size: 0.75rem; font-weight: 700; color: var(--accent-color); opacity: 0.8; }
        .phase-timeframe { font-size: 0.75rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em; }
        .phase-title { font-size: 1.25rem; margin-bottom: 8px; color: var(--text-primary); }
        .phase-desc { color: var(--text-secondary); font-size: 0.9375rem; line-height: 1.5; }

        @media (max-width: 768px) {
          .timeline-line-bg, .timeline-line-progress { left: 24px; transform: none; }
          .phase-container.left, .phase-container.right { padding: 0 0 0 50px; justify-content: flex-start; }
          .timeline-node { left: 24px; }
          .phase-card { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default ElectionTimeline;
