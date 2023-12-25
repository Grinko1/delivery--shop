import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Cart.module.scss';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getCartProducts } from 'features/Cart/model/selectors/getCartProducts';
import { CartProductList } from '../CartProductList/CartProductList';

interface CartProps {
  className?: string;
}

export const Cart = memo((props: CartProps) => {
  const { className } = props;
  const products = useSelector(getCartProducts);
  return (
    <div className={classNames(cls.Cart, {}, [className])}>
      <CartProductList products={products} />
    </div>
  );
});
