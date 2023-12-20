import { memo, useEffect } from 'react';
import cls from './ProductsPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Products, getProducts, getProductsError, getProductsIsLoading } from 'entities/products';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { initProductList } from 'entities/products/model/services/initProductList';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

interface ProductsPageProps {
  className?: string;
}

export const ProductsPage = memo((props: ProductsPageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    dispatch(initProductList(searchParams));
  }, [dispatch, searchParams]);
  const products = useSelector(getProducts);
  const isLoading = useSelector(getProductsIsLoading);
  const error = useSelector(getProductsError);
  return (
    <div className={classNames(cls.ProductsPage, {}, [className])}>
      products page
      <Products products={products} isLoading={isLoading} error={error} />
    </div>
  );
});
