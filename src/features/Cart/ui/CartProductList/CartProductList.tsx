import { memo, useCallback } from 'react';
import cls from './CartProductList.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { type ProductInCart } from '../../model/types/CartSchema';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { CartActions } from 'features/Cart/model/slices/CartSlice';
import { CartProductItem } from '../CartProductItem/CartProductItem';

interface CartProductListProps {
  className?: string;
  products: ProductInCart[];
}

export const CartProductList = memo((props: CartProductListProps) => {
  const { className, products } = props;
  const dispatch = useAppDispatch();

  const handleAddToBasket = useCallback(
    (product: ProductInCart) => {
      dispatch(CartActions.addToCart({ ...product, qtt: 1 }));
    },
    [dispatch]
  );
  const handleDecreaseCount = useCallback(
    (product: ProductInCart) => {
      if (product.qtt > 0) {
        dispatch(CartActions.removeFromCart({ ...product, qtt: 1 }));
      }
    },
    [dispatch]
  );
  return (
    <div className={classNames(cls.CartProductList, {}, [className])}>
      {products.map((item) => (
        <CartProductItem
          key={item.id}
          product={item}
          handleDecreaseCount={handleDecreaseCount}
          handleAddToBasket={handleAddToBasket}
        />
      ))}
    </div>
  );
});
