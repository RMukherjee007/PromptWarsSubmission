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
    >
      <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Timeline</NavLink>
      <NavLink to="/history" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>History</NavLink>
      <NavLink to="/demographics" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Trends</NavLink>
      <NavLink to="/search" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Candidates</NavLink>
      <NavLink to="/quiz" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Quiz</NavLink>
      <NavLink to="/checklist" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Checklist</NavLink>
      <NavLink to="/assistant" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>AI</NavLink>
    </motion.nav>
  );
};

export default Navbar;
