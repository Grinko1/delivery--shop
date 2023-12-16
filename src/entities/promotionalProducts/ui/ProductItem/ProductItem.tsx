import { memo } from 'react';
import cls from './ProductItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface ProductItemProps {
  className?: string;
}

export const ProductItem = memo((props: ProductItemProps) => {
  const { className } = props;
  return <div className={classNames(cls.ProductItem, {}, [className])}>item</div>;
});
