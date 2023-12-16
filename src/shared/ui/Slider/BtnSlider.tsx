import ArrowBack from '../ArrowBack';
import ArrowForward from '../ArrowForward';
import './Slider.scss';

interface BtnSliderProps {
  direction: string;
  moveSlide: () => void;
}
export const BtnSlider = ({ direction, moveSlide }: BtnSliderProps) => {
  return (
    <button onClick={moveSlide} className={direction === 'next' ? 'btnSlide next' : 'btnSlide prev'}>
      {direction === 'next' ? <ArrowForward /> : <ArrowBack />}
    </button>
  );
};
