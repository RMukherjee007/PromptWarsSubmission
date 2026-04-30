import React from 'react';
import { motion } from 'framer-motion';
import { useChecklist } from '../hooks/useChecklist';

const ChecklistPage = () => {
  const { tasks, toggleTask, progress } = useChecklist();

  return (
    <div className="page-wrapper container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '16px' }}>Your Voting Plan</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
          Personalized checklist to ensure you\'re ready for Election Day. Progress is saved automatically.
        </p>

        <div style={{ marginBottom: '48px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.875rem' }}>
            <span>Readiness Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
            <motion.div 
              style={{ height: '100%', background: 'var(--accent-color)', width: `${progress}%` }}
              animate={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div style={{ maxWidth: '600px' }}>
          {tasks.map((task) => (
            <motion.div
              key={task.id}
              className={`checklist-item haptic-press ${task.completed ? 'completed' : ''}`}
              onClick={() => toggleTask(task.id)}
              whileHover={{ x: 4 }}
            >
              <div className="checkbox">
                {task.completed && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent-color)', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {task.category}
                </div>
                <div style={{ color: 'var(--text-primary)' }}>{task.text}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ChecklistPage;
