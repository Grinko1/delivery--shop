import { memo, useEffect } from 'react';
import cls from './ProductList.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchPromotionalProduct } from 'entities/promotionalProducts/model/services/fetchPromotionalProduct';
import { useSelector } from 'react-redux';
import {
  getPromoError,
  getPromoIsLoading,
  getPromoProducts
} from 'entities/promotionalProducts/model/selectors/getPromotionalProduct';
import { ProductItem } from '../ProductItem/ProductItem';

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
