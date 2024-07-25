import React, { useState } from 'react';
import "./header.css"

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <a href="#home">Treze Desenvolvimento</a>
          </div>
          <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
            <ul>
              <li><a href="#home">Início</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </nav>
          <button className="menu-toggle" onClick={toggleNav}>
            &#9776;
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
