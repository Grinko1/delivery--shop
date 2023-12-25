import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProductDetails.module.scss';
import { memo, useCallback, useState } from 'react';
import { type Product } from 'entities/products';
import Button from 'shared/ui/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { CartActions } from 'features/Cart';

interface ProductDetailsProps {
  className?: string;
  product?: Product;
}

export const ProductDetails = memo((props: ProductDetailsProps) => {
  const { className, product } = props;
  const [count, setCount] = useState(0);
  const [showQuantity, setShowQuantity] = useState(false);
  const dispatch = useAppDispatch();

  const handleAddToBasket = useCallback(() => {
    setCount(count + 1);
    setShowQuantity(true);
    if (product?.id) {
      dispatch(CartActions.addToCart({ ...product, qtt: 1 }));
    }
  }, [count, dispatch, product]);
  const handleDecreaseCount = useCallback(() => {
    if (count > 0) {
      setCount(count - 1);
      if (product?.id) {
        dispatch(CartActions.removeFromCart({ ...product, qtt: 1 }));
      }
    }
  }, [count, dispatch, product]);
  return (
    <div className={classNames(cls.ProductDetails, {}, [className])}>
      <div className={cls.productPhoto}>
        <img src={product?.img} alt="" />
      </div>
      <div className={cls.productInfo}>
        <h2>{product?.name}</h2>
        <p>{product?.title}</p>
        <div className={cls.price}>
          <p>{product?.weigth}</p>
          <p>{product?.price}&#8381;</p>
        </div>
        <Button onClick={handleAddToBasket}>Добавить в корзину</Button>
        <div className={classNames(cls.qttToCart, { [cls.show]: showQuantity })}>
          <button onClick={handleDecreaseCount}>-</button>
          {count}
          <button onClick={handleAddToBasket}>+</button>
        </div>
      </div>
    </div>
  );
});
