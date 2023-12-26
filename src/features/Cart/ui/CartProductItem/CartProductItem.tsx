import { memo } from 'react';
import cls from './CartProductItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { type ProductInCart } from 'features/Cart/model/types/CartSchema';

interface CartProductItemProps {
  className?: string;
  product: ProductInCart;
  handleDecreaseCount: (product: ProductInCart) => void;
  handleAddToBasket: (product: ProductInCart) => void;
}

export const CartProductItem = memo((props: CartProductItemProps) => {
  const { className, product, handleDecreaseCount, handleAddToBasket } = props;
  return (
    <div className={classNames(cls.CartProductItem, {}, [className])}>
      <img src={product.img} alt="" />
      <b className={cls.productName}>{product.name}</b>
      <div className={cls.control}>
        <button
          onClick={() => {
            handleDecreaseCount(product);
          }}
        >
          -
        </button>
        <p>{product.qtt} шт</p>
        <button
          onClick={() => {
            handleAddToBasket(product);
          }}
        >
          +
        </button>
      </div>

      <p className={cls.productPrice}>{product.price * product.qtt} &#8381;</p>
    </div>
  );
});
