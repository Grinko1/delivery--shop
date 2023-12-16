import { memo } from 'react';
import styles from './PopularCategory.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import CustomImage from 'shared/ui/CustomImage';

interface PopularCategoryProps {
  className?: string;
}

export const PopularCategory = memo((props: PopularCategoryProps) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Популярные категории</h3>

      <div className={styles.grid}>
        <div className={classNames(styles.first, {}, [styles['horizontal-block']])}>
          <CustomImage
            src={'https://kazanreporter.ru/uploads/pictures/572b1c6fcc10f.jpg'}
            alt="VitaminsCoverImage"
            className={styles.img}
          />

          <span className={classNames(styles['block-title'], {}, [styles['block-title_first']])}>Бакалея</span>
        </div>
        <div className={classNames(styles.second, {}, [styles['horizontal-block']])}>
          <CustomImage
            src={'https://www.san-victor.com.ua/upload/images/blog/10-faktov-o-vode.jpg'}
            alt="VitaminsCoverImage"
          />
          <span className={classNames(styles['block-title'], {}, [styles['block-title_second']])}>Вода и напитки</span>
        </div>

        <div className={classNames(styles.third, {}, [styles['horizontal-block']])}>
          <CustomImage src={'https://www.holcom.ru/img/1467249475422_bulletin.jpg'} alt="VitaminsCoverImage" />
          <span className={classNames(styles['block-title'], {}, [styles['block-title_third']])}>Заморозка</span>
        </div>
        <div className={classNames(styles.fourth, {}, [styles['horizontal-block']])}>
          <CustomImage
            src={'https://www.torrefacto.ru/upload/uf/bdb/bdbdeef87ed237d79d7e70ee1f9974d8.jpg'}
            alt="VitaminsCoverImage"
          />
          <span className={classNames(styles['block-title'], {}, [styles['block-title_fourth']])}>Чай и кофе</span>
        </div>

        <div className={styles.fifth}>
          <CustomImage
            src={'https://ss.sport-express.ru/userfiles/materials/181/1812257/volga.jpg'}
            alt="VitaminsCoverImage"
          />

          <span className={classNames(styles['block-title'], {}, [styles['block-title_fifth']])}>Овощи и фрукты</span>
        </div>
      </div>
    </div>
  );
});
