import { memo } from 'react';
import styles from './ArticleList.module.scss';
import CustomImage from 'shared/ui/CustomImage';
import { MOKK_HELPFULL } from 'shared/consts/common';
import MokkHelpfullImage from './MokkHelpfullImage.png';
import { Link } from 'react-router-dom';

interface UsefulInfoProps {
  className?: string;
}

export const ArticleList = memo((props: UsefulInfoProps) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.header}> Полезное</h3>

      <div className={styles.content}>
        {MOKK_HELPFULL.map((item: any, index: number) => (
          <div className={styles.item} key={index}>
            <CustomImage src={MokkHelpfullImage} alt="MokkHelpfullImage" className={styles.cover} />
            <h6 className={styles.title}>{item.title}</h6>
            <p className={styles.description}>{item.description}</p>
            <Link to={`article/${item.title}`} className={styles['read-more']}>
              Читать далее
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
});
