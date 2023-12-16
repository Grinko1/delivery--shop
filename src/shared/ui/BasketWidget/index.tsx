import { classNames } from 'shared/lib/classNames/classNames';
import BasketIcon from 'shared/assets/icons/BasketIcon.svg';
import styles from './styles.module.scss';
import { Icon } from '../Icon/Icon';

interface basketWidgetProps {
  className?: string;
}

const BasketWidget = ({ className }: basketWidgetProps) => {
  // const { push } = useRouter();
  return (
    <div
      className={classNames(styles['basket-wrapper'], {}, [className])}
      onClick={() => {
        console.log('/basket');
      }}
    >
      <div className={styles['basket-counter']}>
        <span className={styles['basket-counter-badge']}>12</span>
        <Icon Svg={BasketIcon} className={styles['basket-icon']} />
      </div>

      <div className={styles['basket-sum']}>
        10 154 <span>₽</span>
      </div>
    </div>
  );
};

export default BasketWidget;
