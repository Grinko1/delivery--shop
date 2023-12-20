import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Products.module.scss';
import { memo } from 'react';
import { ProductList } from '../ProductsList/ProductList';
import { type Product } from 'entities/products/model/types/productsSchema';

interface ProductsProps {
  className?: string;
  title?: string;
  products: Product[];
  isLoading: boolean;
  error?: string;
}

export const Products = memo((props: ProductsProps) => {
  const { title, products, isLoading, error, className } = props;

  return (
    <div className={classNames(cls.Products, {}, [className])}>
      {title && <h3 className={cls.header}>{title}</h3>}
      <ProductList products={products} isLoading={isLoading} error={error} />
    </div>
  );
});
