import { classNames } from 'shared/lib/classNames/classNames';
import BasketIcon from 'shared/assets/icons/BasketIcon.svg';
import styles from './styles.module.scss';
import { Icon } from '../Icon/Icon';
import { useSelector } from 'react-redux';
import { getCartTotal, getCartTotalQtt } from 'features/Cart';
import { Link } from 'react-router-dom';

interface basketWidgetProps {
  className?: string;
}

const BasketWidget = ({ className }: basketWidgetProps) => {
  const totalQuantity = useSelector(getCartTotalQtt);
  const totalPrice = useSelector(getCartTotal);
  return (
    <Link to="/cart" className={classNames(styles['basket-wrapper'], {}, [className])}>
      <div className={styles['basket-counter']}>
        <span className={styles['basket-counter-badge']}>{totalQuantity}</span>
        <Icon Svg={BasketIcon} className={styles['basket-icon']} />
      </div>

      <div className={styles['basket-sum']}>
        {totalPrice}
        <span>₽</span>
      </div>
    </Link>
  );
};

export default BasketWidget;
