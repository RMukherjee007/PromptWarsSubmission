import { useState, useEffect } from 'react';

const defaultTasks = [
  { id: 1, text: 'Register to vote', category: 'Registration' },
  { id: 2, text: 'Check your voter registration status', category: 'Registration' },
  { id: 3, text: 'Research local and national candidates', category: 'Research' },
  { id: 4, text: 'Find your polling place', category: 'Voting Plan' },
  { id: 5, text: 'Decide how you will vote (in-person or mail)', category: 'Voting Plan' },
  { id: 6, text: 'Mark your calendar for Election Day', category: 'Voting Plan' }
];

export const useChecklist = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('election-tasks');
    return saved ? JSON.parse(saved) : defaultTasks.map(t => ({ ...t, completed: false }));
  });

  useEffect(() => {
    localStorage.setItem('election-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const progress = (completedCount / tasks.length) * 100;

  return { tasks, toggleTask, progress, completedCount };
};
