import styles from '../styles/Carousel.css';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// ... your existing imports

const Carousel = ({ images }) => {
  // Settings for the slick carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true, // Enable center mode
    centerPadding: '60px', // Add padding for the side images
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Set autoplay speed to 5000ms (5 seconds)
    
    focusOnSelect: true, // Focus on an item when clicked
    // Other settings...
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="carousel-item" key={index}>
            <img src={image.src} alt={image.alt} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
