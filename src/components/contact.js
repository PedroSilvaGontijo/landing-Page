import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nome, email, assunto, mensagem } = formData;
    const whatsappMessage = `Nome: ${nome}\nEmail: ${email}\nAssunto: ${assunto}\nMensagem: ${mensagem}`;
    const whatsappUrl = `https://wa.me/553190005016?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  }; 

  return (
    <section id="contato" className="contact">
      <div className="container">
        <h2>Contato</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome:</label>
          <input type="text" placeholder='Nome' id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
          <label htmlFor="email">Email:</label>
          <input type="email" placeholder='Email' id="email" name="email" value={formData.email} onChange={handleChange} required />
          <label htmlFor="assunto">Assunto:</label>
          <input type="text" placeholder='Assunto' id="assunto" name="assunto" value={formData.assunto} onChange={handleChange} required />
          <label htmlFor="mensagem">Descrição de requisitos:</label>
          <textarea id="mensagem" placeholder='Descrição de requisitos' name="mensagem" value={formData.mensagem} onChange={handleChange} required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
