import React from 'react';

const ThemeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button className="theme-toggle" onClick={toggleDarkMode}>
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;
