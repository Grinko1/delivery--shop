import mockImage from './MokkImage1.png';
import { Slider } from 'shared/ui/Slider/Slider';

const TopSlider = () => {
  return (
    <Slider
      images={[
        'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp',
        mockImage,
        'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp',
        mockImage,
        'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp'
      ]}
    />
  );
};

export default TopSlider;
