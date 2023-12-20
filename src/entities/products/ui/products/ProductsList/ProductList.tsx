import { memo } from 'react';
import cls from './ProductList.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ProductItem } from '../ProductItem/ProductItem';
import { type Product } from 'entities/products';

interface ProductListProps {
  className?: string;
  products: Product[];
  isLoading: boolean;
  error?: string;
  wrap: boolean;
}

export const ProductList = memo((props: ProductListProps) => {
  const { className, products, isLoading, error, wrap } = props;

  const reversedArr = [...products].reverse();
  if (error) {
    return null;
  }
  if (isLoading) {
    return <h3>Loadinh...</h3>;
  }
  return (
    <div className={classNames(cls.ProductList, { [cls.wrap]: wrap }, [className])}>
      {reversedArr?.map((item) => (
        <ProductItem product={item} key={item.id} />
      ))}
    </div>
  );
});
