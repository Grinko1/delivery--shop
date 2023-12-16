import { memo } from 'react';
import cls from './LoginPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface LoginPageProps {
  className?: string;
}

export const LoginPage = memo((props: LoginPageProps) => {
  const { className } = props;
  return <div className={classNames(cls.LoginPage, {}, [className])}></div>;
});
