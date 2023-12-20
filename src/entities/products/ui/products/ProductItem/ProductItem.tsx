import { memo } from 'react';
import cls from './ProductItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { type Product } from 'entities/products/model/types/productsSchema';
import { Link } from 'react-router-dom';

interface ProductItemProps {
  className?: string;
  product: Product;
}

export const ProductItem = memo((props: ProductItemProps) => {
  const { className, product } = props;

  return (
    <Link to={`/product/${product.id}`} className={classNames(cls.ProductItem, {}, [className])}>
      <img src={product.img} alt="" className={cls.img} />
      <p className={cls.name}>{product.name}</p>
      <div className={cls.prices}>
        <p className={cls.newPrice}>{product.price}&#8381;</p>
      </div>
    </Link>
  );
});