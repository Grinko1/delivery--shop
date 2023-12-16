import { classNames } from 'shared/lib/classNames/classNames';
import styles from './styles.module.scss';

interface textareaProps {
  placeholder?: string;
  className?: string;
  name?: string;
}

const Textarea = ({ placeholder, className, name }: textareaProps) => (
  <textarea name={name} className={classNames(styles.input, {}, [className])} placeholder={placeholder} />
);

export default Textarea;
