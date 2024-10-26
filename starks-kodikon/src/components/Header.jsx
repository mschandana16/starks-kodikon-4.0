// src/components/Header.js
import React from "react";

function Header() {
  return (
    <header className="header">
      <h1>Legal Ease </h1>
      <nav>
        <a href="#analytics">Analytics Dashboard</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#team">Team</a>
      </nav>
    </header>
  );
}

export default Header;
