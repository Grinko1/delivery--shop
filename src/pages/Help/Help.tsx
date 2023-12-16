import { memo } from 'react';
import styles from './Help.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import MinusIcon from 'shared/assets/icons/MinusIcon.svg';
import PopularQuestions from 'entities/popularQuestions';
interface HelpProps {
  className?: string;
}

export const Help = memo((props: HelpProps) => {
  const { className } = props;
  return (
    <div className={classNames(styles.Help, {}, [className])}>
      <h1 className={styles.title}>Популярные вопросы</h1>

      <div className={styles.content}>
        <div className={styles.menu}>
          <div className={styles['menu-title']} style={{ color: '#269E9C' }}>
            <Icon Svg={MinusIcon} className={styles.minusIcon} />
            Популярные вопросы
          </div>
        </div>

        <PopularQuestions />
      </div>
    </div>
  );
});
