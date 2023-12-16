import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import CatalogIcon from 'shared/assets/icons/CatalogIcon.svg';
import { Icon } from '../Icon/Icon';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        <li className={styles['image-link']}>
          <Icon Svg={CatalogIcon} className={styles['catalog-icon']} />

          <Link to="/catalog">Каталог</Link>
        </li>

        <li>
          <Link to="/about">Доставка и Оплата</Link>
        </li>

        <li>
          <Link to="/help">Мои заказы</Link>
        </li>

        <li>
          <Link to="/asd">Обмен и возврат</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
