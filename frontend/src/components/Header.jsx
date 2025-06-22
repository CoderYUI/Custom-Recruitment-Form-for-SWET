// src/components/Header.jsx
import React from 'react';
// Assuming your logo is in public/swet-logo.png
import logo from '/swet-logo.png';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-content">
        <img src={logo} alt="SWET Logo" className="header-logo" />
        <div className="header-text-container">
          <h1 className="header-title">Shwetansh Welfare And</h1>
          <h1 className="header-title">Educational Trust</h1>
          <p className="header-subtitle">Igniting Potential. Transforming Lives. Empowering Tomorrow.</p>
        </div>
      </div>
      <div className="header-section-tag">
        Section 1 of 13
      </div>
    </header>
  );
};

export default Header;