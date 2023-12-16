import { memo } from 'react';
import styles from './Footer.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import BonusCardButton from 'shared/ui/BonusCardButton';
import CustomImage from 'shared/ui/CustomImage';
import Logo from 'shared/ui/Logo';
import Topic from './Topic';
import { CATALOG_OF_MEDICINES, DOCUMENTATION, HELP } from './constants';

interface FooterProps {
  className?: string;
}

export const Footer = memo((props: FooterProps) => {
  return (
    <footer className={styles.container}>
      <Logo />

      <div className={styles.content}>
        <div className={styles['footer-menu_left-block']}>
          <div className={styles['footer-menu']}>
            <Topic title="Каталог медикаментов" list={CATALOG_OF_MEDICINES} />
            <Topic title="Помощь" list={HELP} />
            <Topic title="Документация" list={DOCUMENTATION} />
          </div>

          <div className={styles['footer-menu_legal-information']}>
            <span className={styles['footer-menu_legal-information-warning']}>
              Имеются противопоказания. Необходима консультация специалиста
            </span>

            <span className={styles['footer-menu_legal-information-data']}>© 2023 Аптека28</span>

            <span className={styles['footer-menu_legal-information-data']}>ИП «данные ИП»</span>

            <span className={styles['footer-menu_legal-information-data']}>
              Юридический адрес: 676850, Амурская область г.Белогорск
            </span>
          </div>
        </div>

        <div className={styles['footer-menu_right-block']}>
          <span className={styles['footer-menu_right-block-text']}>
            Получайте выгоду за покупки
            <br />
            по нашей бонусной карте
          </span>

          <BonusCardButton />

          <span className={styles['footer-warning']}>Имеются противопоказания. Необходима консультация специалиста</span>

          <span className={styles['footer-menu_right-block-text']}>
            Скачать мобильное
            <br />
            приложение Аптека28
          </span>

          <CustomImage
            src="/AppStoreImage.png"
            alt="AppStoreImage"
            className={classNames(styles.storeIcon, {}, [styles['footer-menu_right-block_store-link']])}
          />

          <CustomImage src="/GooglePlayImage.png" alt="GooglePlayImage" className={styles.storeIcon} />
        </div>
      </div>
    </footer>
  );
});
