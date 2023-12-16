import { classNames } from 'shared/lib/classNames/classNames';
import styles from './styles.module.scss';
import Input from '../Input';
import Button from '../Button';
import SearchHeartIcon from 'shared/assets/icons/SearchHeartIcon.svg';
import { Icon } from '../Icon/Icon';

interface searchInputProps {
  className?: string;
}

const SearchInput = ({ className }: searchInputProps) => (
  <div className={classNames(styles.wrapper, {}, [className])}>
    <Icon Svg={SearchHeartIcon} className={styles.icon} />
    <Input placeholder="Начните вводить название..." className={styles.input} />

    <Button className={styles.button}>Найти</Button>
  </div>
);

export default SearchInput;
