import { useState } from 'react';
import styles from './styles.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface counterProps {
  className?: string;
}

const Counter = ({ className }: counterProps) => {
  const [countValue, setCountValue] = useState(0);

  const handleIncrement = () => {
    setCountValue(countValue + 1);
  };

  const handleDecrement = () => {
    if (!countValue) return;

    setCountValue(countValue - 1);
  };

  return (
    <div className={classNames(styles['count-actions'], {}, [className])}>
      <button className={styles['count-button']} onClick={handleDecrement}>
        <img width={15} height={2} src="/MinusIcon.svg" alt="MinusIcon" />
      </button>

      <span className={styles['count-value']}>{countValue}</span>

      <button className={styles['count-button']} onClick={handleIncrement}>
        <img width={15} height={15} src="/PlusIcon.svg" alt="PlusIcon" />
      </button>
    </div>
  );
};

export default Counter;
