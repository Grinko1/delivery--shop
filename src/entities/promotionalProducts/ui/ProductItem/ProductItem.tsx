import { memo } from 'react';
import cls from './ProductItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { type ProductPromo } from 'entities/promotionalProducts/model/types/promotional';

interface ProductItemProps {
  className?: string;
  product: ProductPromo;
}

export const ProductItem = memo((props: ProductItemProps) => {
  const { className, product } = props;
  const discount = () => {
    const percent = product.price / 100;
    const diff = product.price - product.newPrice;
    return Math.floor(diff / percent);
  };

  return (
    <div className={classNames(cls.ProductItem, {}, [className])}>
      <div className={cls.discount}>{discount()}%</div>
      <img src={product.img} alt="" className={cls.img} />
      <p className={cls.name}>{product.name}</p>
      <div className={cls.prices}>
        <p className={cls.oldPrice}>{product.price}&#8381;</p>
        <p className={cls.newPrice}>{product.newPrice} &#8381;</p>
      </div>
    </div>
  );
});
