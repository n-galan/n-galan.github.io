import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const carouselContainerStyle = css`
  position: relative;
  max-width: 80%;
  margin: 0 auto;
  padding: 20px 0;
  background: none;
  // border-radius: 10px;

  @media (max-width: 600px) {
    max-width: 100%;
    padding: 10px 0;
  }
`;

const CarouselItem = styled(Paper)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  background: none;
  width: calc(100% / 3); /* Show three items per slide */
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
  // border-radius: 10px;
  // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    height: 200px;
  }
`;

const carouselSettings = {
  navButtonsAlwaysVisible: true,
  indicators: true,
  autoPlay: false,
  animation: "slide",
  duration: 500,
  cycleNavigation: true,
  fullHeightHover: false,
  swipe: true,
  navButtonsProps: {
    style: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      borderRadius: 0,
    }
  }
};

const ImageCarousel = ({ images }) => {
  const items = [];

  // Group images into sets of 3
  for (let i = 0; i < images.length; i += 3) {
    items.push(
      <div key={i} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {images.slice(i, i + 3).map((image, index) => (
          <CarouselItem key={index}>
            <CarouselImage src={image.src} alt={image.alt} />
          </CarouselItem>
        ))}
      </div>
    );
  }

  return (
    <div css={carouselContainerStyle}>
      <Carousel {...carouselSettings}>
        {items}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
