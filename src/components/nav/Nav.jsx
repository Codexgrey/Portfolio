import React, { useContext } from 'react'
import "./nav.css";
import Toggle from '../toggle/Toggle';
import { ThemeContext } from '../../context';

const Nav = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <nav className="nav" style={{ backgroundColor: darkMode ? "rgba(20,20,20,0.75)" : "rgba(255,255,255,0.75)" }}>
      <a href="#home" className="nav-brand">
        <svg
          className="nav-home-icon"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9.5V21h14V9.5" />
        </svg>
        Codexgrey<span className="nav-brand-dot">.</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#design">Design</a>
        <a href="#contact">Contact</a>
      </div>

      <Toggle />
    </nav>
  )
}

export default Nav
