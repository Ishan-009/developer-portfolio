import React, { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import './sidebar.css';

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const SideBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav container">
        <a href="/" className="nav__logo">
          Ishan<span>.</span>
        </a>

        <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`}>
          <ul className="nav__list">
            {[
              'home',
              'about',
              'services',
              'experience',
              'portfolio',
              'contact',
            ].map((item) => (
              <li key={item} className="nav__item">
                <a href={`#${item}`} className="nav__link" onClick={closeMenu}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="nav__close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="nav__actions">
          <ThemeToggle
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
          />
          <button
            className="nav__toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <MenuIcon />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default SideBar;
