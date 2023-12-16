import { type ReactNode } from 'react';
import cls from './PageWrapper.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface PageWrapperProps {
  children?: ReactNode;
  className?: string;
}

export const PageWrapper = ({ children, className }: PageWrapperProps) => {
  return <div className={classNames(cls.PageWrapper, {}, [className])}>{children}</div>;
};
