import SearchInput from 'shared/ui/SearchInput';
import styles from './styles.module.scss';
import BasketWidget from 'shared/ui/BasketWidget';

const Search = () => {
  return (
    <div className={styles.container}>
      <SearchInput />
      <BasketWidget className={styles.basket} />
    </div>
  );
};

export default Search;
