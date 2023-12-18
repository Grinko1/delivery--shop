import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Products.module.scss';
import { memo } from 'react';
import { ProductList } from '../ProductsList/ProductList';

interface ProductsProps {
  className?: string;
  title?: string;
}

export const Products = memo((props: ProductsProps) => {
  const { title, className } = props;

  return (
    <div className={classNames(cls.Products, {}, [className])}>
      {title && <h3 className={cls.header}>{title}</h3>}
      <ProductList />
    </div>
  );
});
