// src/components/Header.js
import React from "react";

function Header() {
  return (
    <header className="header">
      <h1>React Landing Page</h1>
      <nav>
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
