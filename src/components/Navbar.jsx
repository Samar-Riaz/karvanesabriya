// src/components/Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="navbar">
        <div className="navbar-left">
          <img src="/Hehe.png" alt="Logo" className="logo" />
          <span className="brand-name">Karvan e Sabriya</span>
        </div>

        {/* Animated Hamburger */}
        <div
          className={`menu-icon ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* BACKDROP + MENU */}
      {menuOpen && (
        <>
          <div className="backdrop" onClick={closeMenu}></div>
          <div className="dropdown-menu">
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
