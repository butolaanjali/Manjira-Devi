import React from 'react';
import Slider from 'react-slick';
import './OurSchool.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OurSchool = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const slides = [
    {
      title: 'Dev Bhoomi Medical College of Ayurveda & Hospital (DBMCAH)',
      image: 'img1.jpeg',
      link: '#',
    },
    {
      title: 'Dev Bhoomi Institute of Polytechnic (DBIP)',
      image: 'img2.jpg',
      link: '#',
    },
    {
      title: 'School of Engineering & Computing (SoEC)',
      image: 'img3.jpeg',
      link: '#',
    },
    // Add more slides as needed
  ];

  return (
    <div className="our-schools-slider">
      <h2 className="slider-title">Our Schools</h2>
      <p className="slider-subtitle">THE RIGHT CHOICE IS RIGHT IN FRONT OF YOU</p>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={slide.title} className="slide-image" />
            <div className="slide-content">
              <h3 className="slide-title">{slide.title}</h3>
              <a href={slide.link} className="slide-button">Know More</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurSchool;
