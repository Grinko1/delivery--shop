import { memo, useCallback } from 'react';
import cls from './CartProductList.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { type ProductInCart } from '../../model/types/CartSchema';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { CartActions } from 'features/Cart/model/slices/CartSlice';

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
        <div key={item.id} className={cls.productItem}>
          <img src={item.img} alt="" />
          <b>{item.name}</b>
          <div className={cls.control}>
            <button>-</button>
            <p>{item.qtt} шт</p>
            <button>+</button>
          </div>

          <p>{item.price * item.qtt} &#8381;</p>
        </div>
      ))}
    </div>
  );
});
