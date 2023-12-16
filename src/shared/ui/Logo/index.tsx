import { classNames } from 'shared/lib/classNames/classNames';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className={classNames(styles['logo-block'], {})}>
      {/* <Icon Svg={IconLogo} className={styles.logo} /> */}
      <img src="https://static.insales-cdn.com/assets/1/4663/1937975/1702607321/logo.svg" alt="" />

      <div>
        <h1 className={styles['logo-block_title']}>MARKET 28</h1>
        <h3 className={styles['logo-block_subtitle']}>Удобная доставка продуктов на дом</h3>
      </div>
    </Link>
  );
};

export default Logo;
