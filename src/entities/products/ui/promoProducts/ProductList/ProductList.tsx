import { memo, useEffect } from 'react';
import cls from './ProductList.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProductItem } from '../ProductItem/ProductItem';
import { fetchPromotionalProduct } from 'entities/products/model/services/promoProducts/fetchPromotionalProduct';
import {
  getPromoError,
  getPromoIsLoading,
  getPromoProducts
} from 'entities/products/model/selectors/getPromoProducts/getPromoProducts';

interface ProductListProps {
  className?: string;
}

export const ProductList = memo((props: ProductListProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPromotionalProduct());
  }, [dispatch]);
  const products = useSelector(getPromoProducts);
  const isLoading = useSelector(getPromoIsLoading);
  const error = useSelector(getPromoError);

  if (error) {
    return null;
  }
  if (isLoading) {
    return <h3>Loadinh...</h3>;
  }
  return (
    <div className={classNames(cls.ProductList, {}, [className])}>
      {products?.map((item) => (
        <ProductItem product={item} key={item.id} />
      ))}
    </div>
  );
});
