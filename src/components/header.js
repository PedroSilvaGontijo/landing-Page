import React from "react";

const Header = () => (
  <header>
    <div className="container">
      <img src="logo.png" alt="Treze Desenvolvimento" />
      <nav>
        <ul>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#servicos">Serviços</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
