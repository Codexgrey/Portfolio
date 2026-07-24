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
        Collins<span className="nav-brand-dot">.</span>
      </a>

      <div className="nav-links">
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
