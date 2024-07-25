import React from "react";
import "./services.css"
const Services = () => (
  <section id="servicos" className="services">
    <div className="container">
      <h2>Nossos Serviços</h2>
      <div className="service-item">
        <i className="icon">🌐</i>
        <h3>Desenvolvimento Web</h3>
        <p>
          Sites e aplicações web de alta qualidade, personalizados para atender
          às suas necessidades específicas.
        </p>
      </div>
      <div className="service-item">
        <i className="icon">📱</i>
        <h3>Desenvolvimento Mobile</h3>
        <p>
          Aplicativos móveis inovadores para Android e iOS, projetados para
          oferecer a melhor experiência ao usuário.
        </p>
      </div>
      <div className="service-item">
        <i className="icon">🖥️</i>
        <h3>Desenvolvimento de Sistemas</h3>
        <p>
          Sistemas personalizados para otimizar processos internos e aumentar a
          eficiência do seu negócio.
        </p>
      </div>
      <div className="service-item">
        <i className="icon">🔍</i>
        <h3>Web Scraping</h3>
        <p>
          Extração de dados da web de forma automatizada, fornecendo insights
          valiosos para suas decisões de negócios.
        </p>
      </div>
      <div className="service-item">
        <i className="icon">🤖</i>
        <h3>Automatização</h3>
        <p>
          Automatização de tarefas repetitivas, permitindo que sua equipe se
          concentre no que realmente importa.
        </p>
      </div>
    </div>
  </section>
);

export default Services;
