import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface navLinksListProps {
  onClose: () => void;
}

const NavLinksList = ({ onClose }: navLinksListProps) => {
  // const { asPath } = useRouter();
  const { pathname: path } = useLocation();

  return (
    <nav>
      <ul className={styles.links}>
        <li
          onClick={onClose}
          className={classNames(styles['area-item'], {
            [styles['area-item_active']]: path === '/'
          })}
        >
          <Link to="/catalog">
            <a>Главная</a>
          </Link>
        </li>

        <li
          onClick={onClose}
          className={classNames(styles['area-item'], {
            [styles['area-item_active']]: path === '/catalog'
          })}
        >
          <Link to="/catalog">
            <a>Поиск по каталогу</a>
          </Link>
        </li>

        <li
          onClick={onClose}
          className={classNames(styles['area-item'], {
            [styles['area-item_active']]: path === '/about'
          })}
        >
          <Link to="/about">
            <a>О компании</a>
          </Link>
        </li>

        <li
          onClick={onClose}
          className={classNames(styles['area-item'], {
            [styles['area-item_active']]: path === '/help'
          })}
        >
          <Link to="/help">
            <a>Помощь</a>
          </Link>
        </li>

        <li
          onClick={onClose}
          className={classNames(styles['area-item'], {
            [styles['area-item_active']]: path === '/preorder'
          })}
        >
          <Link to="/preorder">
            <a>Предзаказ препаратов</a>
          </Link>
        </li>

        <li
          onClick={onClose}
          className={classNames(styles['area-item'], {
            [styles['area-item_active']]: path === '/dileveryAndPay'
          })}
        >
          <Link to="/dileveryAndPay">
            <a>Доставка и Оплата</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinksList;
