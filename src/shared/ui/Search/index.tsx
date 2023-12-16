import BasketWidget from '../BasketWidget';
import SearchInput from '../SearchInput';
import styles from './styles.module.scss';

const Search = () => {
  return (
    <div className={styles.container}>
      <SearchInput />

      <BasketWidget className={styles.basket} />
    </div>
  );
};

export default Search;
