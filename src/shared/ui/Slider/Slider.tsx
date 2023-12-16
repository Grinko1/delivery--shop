import { useState } from 'react';
import './Slider.scss';
import { BtnSlider } from './BtnSlider';

interface SliderProps {
  images: string[];
  widthPercent?: number;
}

export const Slider = ({ images, widthPercent = 100 }: SliderProps) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const sliderWidth = {
    width: widthPercent + '%'
  };
  const nextSlide = () => {
    if (slideIndex !== images.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === images.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(images.length);
    }
  };

  const moveDot = (index: number) => {
    setSlideIndex(index);
  };

  return (
    <div>
      <div className="containerSlider" style={sliderWidth}>
        {images.map((img, index) => {
          return (
            <div key={img} className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}>
              <img src={img} />
            </div>
          );
        })}
        <BtnSlider moveSlide={nextSlide} direction={'next'} />
        <BtnSlider moveSlide={prevSlide} direction={'prev'} />
      </div>
      <div className="containerDots">
        <div className="dots">
          {images.map((item, index) => (
            <div
              key={item}
              onClick={() => {
                moveDot(index + 1);
              }}
              className={slideIndex === index + 1 ? 'dot active' : 'dot'}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
