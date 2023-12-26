import { memo, useCallback } from 'react';
import cls from './ProductItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { type Product } from 'entities/products/model/types/productsSchema';
import { Link } from 'react-router-dom';
import { Icon } from 'shared/ui/Icon/Icon';
import AddToCart from 'shared/assets/icons/AddToCart.svg';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { CartActions } from 'features/Cart';

interface ProductItemProps {
  className?: string;
  product: Product;
}

export const ProductItem = memo((props: ProductItemProps) => {
  const { className, product } = props;
  const dispatch = useAppDispatch();
  const handleAddToBasket = useCallback(() => {
    dispatch(CartActions.addToCart({ ...product, qtt: 1 }));
  }, [dispatch, product]);
  return (
    <div className={classNames(cls.ProductItem, {}, [className])}>
      <Link to={`/product/${product.id}`}>
        <img src={product.img} alt="" className={cls.img} />
        <p className={cls.name}>{product.name}</p>
      </Link>
      <div className={cls.prices}>
        <p className={cls.newPrice}>{product.price}&#8381;</p>
        <div>
          <span className={cls.qttInCart}>1</span>
          <Icon Svg={AddToCart} className={cls.toBasket} clickable onClick={handleAddToBasket} />
        </div>
      </div>
    </div>
  );
});
