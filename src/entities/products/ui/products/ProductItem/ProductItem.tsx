import { memo, useCallback, useMemo } from 'react';
import cls from './ProductItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { type Product } from 'entities/products/model/types/productsSchema';
import { Link } from 'react-router-dom';
import { Icon } from 'shared/ui/Icon/Icon';
import AddToCart from 'shared/assets/icons/AddToCart.svg';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { CartActions, getIdsInCart } from 'features/Cart';
import { useSelector } from 'react-redux';

interface ProductItemProps {
  className?: string;
  product: Product;
}

export const ProductItem = memo((props: ProductItemProps) => {
  const { className, product } = props;
  const dispatch = useAppDispatch();
  const ids = useSelector(getIdsInCart);
  const discount = () => {
    const percent = product.price / 100;
    if (product.newPrice) {
      const diff = product.price - product.newPrice;
      return Math.floor(diff / percent);
    }
    return false;
  };
  const handleAddToBasket = useCallback(() => {
    dispatch(CartActions.addToCart({ ...product, qtt: 1 }));
  }, [dispatch, product]);
  const inCart = useMemo(() => {
    const index = ids.findIndex((item) => item === product.id);
    return index > -1;
  }, [ids, product.id]);
  return (
    <div className={classNames(cls.ProductItem, {}, [className])}>
      <Link to={`/product/${product.id}`}>
        {discount() && <div className={cls.discount}>{discount()}%</div>}
        <img src={product.img} alt="" className={cls.img} />
        <p className={cls.name}>{product.name}</p>
      </Link>
      <div className={cls.prices}>
        {product.newPrice
          ? (
          <>
            <p className={cls.oldPrice}>{product.price}&#8381;</p>
            <p className={cls.newPrice}>{product.newPrice}&#8381;</p>
          </>
            )
          : (
          <p className={cls.newPrice}>{product.price}&#8381;</p>
            )}
        <div>
          {inCart && <span className={cls.qttInCart}> &#10004;</span>}
          <Icon Svg={AddToCart} className={cls.toBasket} clickable onClick={handleAddToBasket} />
        </div>
      </div>
    </div>
  );
});
