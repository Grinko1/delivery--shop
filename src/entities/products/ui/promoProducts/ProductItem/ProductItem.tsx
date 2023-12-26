import { memo, useCallback } from 'react';
import cls from './ProductItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { type ProductPromo } from 'entities/products/model/types/promoProductsSchema';
import { Link } from 'react-router-dom';
import { Icon } from 'shared/ui/Icon/Icon';
import AddToCart from 'shared/assets/icons/AddToCart.svg';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { CartActions } from 'features/Cart';

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
  const dispatch = useAppDispatch();
  const handleAddToBasket = useCallback(() => {
    dispatch(CartActions.addToCart({ ...product, qtt: 1 }));
  }, [dispatch, product]);

  return (
    <div className={classNames(cls.ProductItem, {}, [className])}>
      <Link to={`/product/${product.id}`}>
        <div className={cls.discount}>{discount()}%L</div>
        <img src={product.img} alt="" className={cls.img} />
        <p className={cls.name}>{product.name}</p>
      </Link>

      <div className={cls.prices}>
        <p className={cls.oldPrice}>{product.price}&#8381;</p>
        <p className={cls.newPrice}>{product.newPrice} &#8381;</p>
        <div>
          <span className={cls.qttInCart}>1</span>
          <Icon Svg={AddToCart} className={cls.toBasket} clickable onClick={handleAddToBasket} />
        </div>
      </div>
    </div>
  );
});
