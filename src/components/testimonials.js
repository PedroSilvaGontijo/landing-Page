import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    text: "O time entregou um produto de alta qualidade. Houve alguns atrasos, mas a comunicação foi excelente.",
    author: "Ana Souza",
    company: "TechSolutions",
  },
  {
    text: "O aplicativo mobile superou nossas expectativas. Algumas funcionalidades levaram mais tempo, mas o suporte foi ótimo.",
    author: "Carlos Pereira",
    company: "StartApp",
  },
  {
    text: "O serviço de web scraping foi eficiente. Houve um problema de integração, mas foi rapidamente resolvido.",
    author: "Marina Lima",
    company: "DataCorp",
  },
  {
    text: "Recebemos um sistema que transformou nossa forma de trabalhar. Alguns desafios foram superados e o resultado final foi muito bom.",
    author: "João Silva",
    company: "InovaTech",
  },
  {
    text: "A automação de processos foi um grande sucesso. Alguns desafios técnicos foram bem gerenciados.",
    author: "Fernanda Costa",
    company: "EcoSystems",
  },
  {
    text: "O desenvolvimento do nosso site foi feito com profissionalismo. Ajustes pós-lançamento foram necessários, mas estamos satisfeitos.",
    author: "Ricardo Almeida",
    company: "WebCorp",
  },
  {
    text: "O serviço de web scraping foi muito eficiente. Tivemos um problema com escalabilidade, mas foi resolvido.",
    author: "Juliana Martins",
    company: "InfoNet",
  },
  {
    text: "O aplicativo móvel é intuitivo e fácil de usar. Algumas alterações foram feitas com base nas nossas sugestões.",
    author: "Pedro Fernandes",
    company: "AppWorks",
  },
  {
    text: "A automação dos processos internos trouxe ótimos resultados. Tivemos alguns atrasos, mas o suporte foi excelente.",
    author: "Luciana Ribeiro",
    company: "TechWave",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="depoimentos" className="testimonials">
      <div className="container">
        <h2>Depoimentos</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <p>"{testimonial.text}"</p>
              <p>
                <strong>{testimonial.author}</strong>, {testimonial.company}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
