import styles from './styles.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface customImageProps {
  src: string;
  alt?: string;
  className?: string;
  onClick?: () => void;
}

const CustomImage = ({ onClick, src, alt, className }: customImageProps) => (
  <div className={classNames(styles.default, {}, [className])} onClick={onClick}>
    <img src={src} alt={alt} />
  </div>
);

export default CustomImage;
