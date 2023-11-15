import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Header.css';
import { cbta } from '../../../Images/Index';
export default function Header() {
  const images = [
    cbta,
    cbta,
    cbta,
  ];
  const settings = {
    dots: false, // Desactiva los puntos de navegación
    arrows: false, // Desactiva las flechas de navegación
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
  };
  return (
    <div className="header">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`slide-${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
