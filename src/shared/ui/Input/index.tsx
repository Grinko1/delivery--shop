import { classNames } from 'shared/lib/classNames/classNames';
import styles from './styles.module.scss';

interface inputProps {
  placeholder?: string;
  className?: string;
  name?: string;
  value?: string;
  type?: string;
  errorMessage?: string;
  onChange?: (event: any) => any;
}

const Input = ({ placeholder, name, className, errorMessage, value, type = 'text', onChange, ...props }: inputProps) => (
  <div className={classNames(styles.container, {}, [className])}>
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className={styles.input}
      {...props}
    />

    {errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
  </div>
);

export default Input;
