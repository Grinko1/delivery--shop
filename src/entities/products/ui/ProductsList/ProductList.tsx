import { memo, useEffect } from 'react';
import cls from './ProductList.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ProductItem } from '../ProductItem/ProductItem';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getProducts, getProductsError, getProductsIsLoading } from '../../model/selectors/getProducts';
import { useSearchParams } from 'react-router-dom';
import { initProductList } from '../../model/services/initProductList';

interface ProductListProps {
  className?: string;
  category?: string;
}

export const ProductList = memo((props: ProductListProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(initProductList(searchParams));
  }, [dispatch, searchParams]);
  const products = useSelector(getProducts);
  const isLoading = useSelector(getProductsIsLoading);
  const error = useSelector(getProductsError);

  const reversedArr = [...products].reverse();
  if (error) {
    return null;
  }
  if (isLoading) {
    return <h3>Loadinh...</h3>;
  }
  return (
    <div className={classNames(cls.ProductList, {}, [className])}>
      {reversedArr?.map((item) => (
        <ProductItem product={item} key={item.id} />
      ))}
    </div>
  );
});
