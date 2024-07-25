import React from "react";
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Sobre Nós</h4>
            <p>
              Oferecemos soluções completas em desenvolvimento de software,
              desde aplicações web e mobile até automações e web scraping.
            </p>
          </div>
          <div className="footer-section">
            <h4>Links Úteis</h4>
            <ul>
              <li>
                <a href="#home">Início</a>
              </li>
              <li>
                <a href="#services">Serviços</a>
              </li>
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contato</h4>
            <p>
              Email:{" "}
              <a href="mailto:TrezeDesenvolvimento@outlook.com">TrezeDesenvolvimento@outlook.com</a>
            </p>
            <p>
              Telefone: <a href="https://wa.me/553190005016">+55 31 9000-5016</a>
            </p>
            <p>Endereço: Belo Horizonte, Minas Gerais</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Sua Empresa. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
