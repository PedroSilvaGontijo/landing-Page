import React, { useState } from "react";
import "./contact.css"
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `https://wa.me/553190005016?text=Olá,%20preciso%20de%20ajuda%20com%20os%20seguinte%20requisitos:%20${encodeURIComponent(
      formData.message
    )}`;
  };

  return (
    <section id="contato" className="contact">
      <div className="container">
        <h2>Entre em Contato</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu Nome"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Seu E-mail"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Descrição dos Requisitos:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Descreva aqui os requisitos do seu projeto..."
              rows="4"
              required
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
