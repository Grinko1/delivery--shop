import { memo } from 'react';
import cls from './CartTotalWidget.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import { getCartTotal, getCartTotalQtt } from 'features/Cart/model/selectors/getCartProducts';

interface CartTotalWidgetProps {
  className?: string;
}

export const CartTotalWidget = memo((props: CartTotalWidgetProps) => {
  const { className } = props;
  const total = useSelector(getCartTotal);
  const totalQtt = useSelector(getCartTotalQtt);
  return (
    <div className={classNames(cls.CartTotalWidget, {}, [className])}>
      <p>Всего {totalQtt} товара</p>
      <p>На сумму {total}</p>
      <Button>Оформить</Button>
    </div>
  );
});
