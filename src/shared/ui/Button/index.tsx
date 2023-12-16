import { classNames } from 'shared/lib/classNames/classNames';
import styles from './styles.module.scss';
import { type ReactElement } from 'react';

interface buttonProps {
  disabled?: boolean;
  children: ReactElement | string;
  className?: string;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button' | undefined;
}

const Button = ({ disabled, children, className, onClick, type = 'button' }: buttonProps) => (
  <button
    className={classNames(styles.button, {}, [className])}
    onClick={onClick && onClick}
    type={type}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
