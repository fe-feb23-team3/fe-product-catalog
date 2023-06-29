import React, { useState } from 'react';
import './ImageSlider.scss';

const slideStyles: React.CSSProperties = {
  width: '100%',
  height: '100%',
  borderRadius: '10px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const sliderStyles: React.CSSProperties = {
  position: 'relative',
  height: '100%',
};

interface Slide {
  url: string;
}

interface Props {
  slides: Slide[];
}

export const ImageSlider: React.FC<Props> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = (): void => {
    const isFirstSlide: boolean = currentIndex === 0;
    const newIndex: number = isFirstSlide ? slides.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };

  const goToNext = (): void => {
    const isLastSlide: boolean = currentIndex === slides.length - 1;
    const newIndex: number = isLastSlide ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };

  const slideStylesWidthBackground: React.CSSProperties = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div
      className="slider grid"
      style={sliderStyles}
    >
      <button
        className="
        slider__button
        left-arrow
        grid-item--onTablet-1-2
        grid-item--onDesktop-1-2
        "
        type="button"
        onClick={goToPrevious}
      >
        ❰
      </button>

      <div
        className="slide"
        style={slideStylesWidthBackground}
      />

      <button
        className="
        right-arrow
        grid__item--tablet-12-12
        grid-item--onDesktop-7-8
        "
        type="button"
        onClick={goToNext}
      >
        ❱
      </button>
    </div>
  );
};
