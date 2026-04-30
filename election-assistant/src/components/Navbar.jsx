import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      className="navbar glass-panel"
      initial={{ y: -100, x: '-50%' }}
      animate={{ y: 0, x: '-50%' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Main Navigation"
    >
      <NavLink to="/" aria-label="Timeline" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Timeline</NavLink>
      <NavLink to="/history" aria-label="Election History" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>History</NavLink>
      <NavLink to="/demographics" aria-label="Voter Trends" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Trends</NavLink>
      <NavLink to="/search" aria-label="Candidate Search" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Candidates</NavLink>
      <NavLink to="/quiz" aria-label="Civic IQ Quiz" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Quiz</NavLink>
      <NavLink to="/checklist" aria-label="Voting Checklist" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Checklist</NavLink>
      <NavLink to="/assistant" aria-label="AI Assistant" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>AI</NavLink>
    </motion.nav>
  );
};

export default Navbar;
