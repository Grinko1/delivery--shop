import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CartPage.module.scss';
import { memo } from 'react';
import { Cart } from 'features/Cart';

interface CartPageProps {
  className?: string;
}

export const CartPage = memo((props: CartPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.CartPage, {}, [className])}>
      <Cart />
    </div>
  );
});
