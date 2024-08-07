// ThemeToggle.js
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleDarkMode}
      aria-label="Toggle theme"
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;

//
