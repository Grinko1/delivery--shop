import { memo, useEffect } from 'react';
import cls from './ProductsPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  Products,
  PromotionalProduct,
  getPopularProducts,
  getProducts,
  getProductsError,
  getProductsIsLoading,
  initProductList
} from 'entities/products';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { ProductsPageHeader } from './ProductsPageHeader/ProductsPageHeader';
import { Container } from 'shared/ui/Container/Container';

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
  const popularProducts = useSelector(getPopularProducts);
  const isLoading = useSelector(getProductsIsLoading);
  const error = useSelector(getProductsError);
  return (
    <div className={classNames(cls.ProductsPage, {}, [className])}>
      <ProductsPageHeader />
      <Container>
        <Products products={products} isLoading={isLoading} error={error} />
      </Container>
      <Container>
        <PromotionalProduct />
      </Container>
      <Container>
        <Products title="Часто заказывают" wrap products={popularProducts} isLoading={isLoading} error={error} />
      </Container>
    </div>
  );
});
