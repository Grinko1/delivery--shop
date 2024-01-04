import { Slider } from 'shared/ui/Slider/Slider';

const TopSlider = () => {
  return (
    <Slider
      images={[
        'https://static.insales-cdn.com/files/1/5801/32659113/original/1496%D1%85400.jpg',

        'https://static.insales-cdn.com/files/1/843/32432971/original/баннер_1496х400.jpg'
      ]}
      widthPercent={90}
    />
  );
};

export default TopSlider;
