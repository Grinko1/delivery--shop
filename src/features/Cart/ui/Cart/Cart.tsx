import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Cart.module.scss';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getCartProducts } from 'features/Cart/model/selectors/getCartProducts';
import { CartProductList } from '../CartProductList/CartProductList';
import { CartTotalWidget } from '../CartTotalWidget/CartTotalWidget';
import { PromotionalProduct } from 'entities/products';
import { Container } from 'shared/ui/Container/Container';
import { Link } from 'react-router-dom';
import ArrowBack from 'shared/ui/ArrowBack';

interface CartProps {
  className?: string;
}

export const Cart = memo((props: CartProps) => {
  const { className } = props;
  const products = useSelector(getCartProducts);
  return (
    <div className={classNames(cls.Cart, {}, [className])}>
      {products.length !== 0
        ? (
        <>
          <CartProductList products={products} />
          <CartTotalWidget />
        </>
          )
        : (
        <Container className={cls.emptyCart}>
          <Link to="/catalog" className={cls.link}>
            <ArrowBack /> К покупкам
          </Link>
          <div className={cls.cartInfo}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcx24Hhd6_-KRuqcnMxN3-YOww4TL08NdyHoOE3XDGXK3NVQ9E186reV2uZJJUf4FnpPw&usqp=CAU"
              alt=""
            />
            <p> Корзина пуста</p>
          </div>

          <PromotionalProduct />
        </Container>
          )}
    </div>
  );
});
