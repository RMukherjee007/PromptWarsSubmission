import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="main-background">
      {/* Animated Mesh Gradients */}
      <div className="mesh-gradient mesh-1" />
      <div className="mesh-gradient mesh-2" />
      <div className="mesh-gradient mesh-3" />
      
      {/* Immersive Noise Texture */}
      <div className="noise-overlay" />
      
      <style>{`
        .main-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: #050505;
          z-index: -2;
          overflow: hidden;
        }

        .mesh-gradient {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
          pointer-events: none;
        }

        .mesh-1 {
          width: 80vw;
          height: 80vw;
          background: radial-gradient(circle, var(--accent-color) 0%, transparent 70%);
          top: -20%;
          left: -20%;
          animation: drift 20s ease-in-out infinite alternate;
        }

        .mesh-2 {
          width: 60vw;
          height: 60vw;
          background: radial-gradient(circle, #6366f1 0%, transparent 70%);
          bottom: -10%;
          right: -10%;
          animation: drift 25s ease-in-out infinite alternate-reverse;
        }

        .mesh-3 {
          width: 40vw;
          height: 40vw;
          background: radial-gradient(circle, #ec4899 0%, transparent 70%);
          top: 40%;
          left: 30%;
          animation: drift 30s ease-in-out infinite alternate;
        }

        .noise-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('https://grainy-gradients.vercel.app/noise.svg');
          opacity: 0.05;
          pointer-events: none;
          z-index: -1;
        }

        @keyframes drift {
          from { transform: translate(0, 0) scale(1); }
          to { transform: translate(10%, 10%) scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default Background;
