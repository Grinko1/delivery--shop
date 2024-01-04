import { memo, useEffect } from 'react';
import cls from './ProductDetailPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchProduct } from '../model/services/fetchProduct';
import { useSelector } from 'react-redux';
import { getProduct, getProductError, getProductIsLoading } from '../model/selectors/getProduct';
import { Container } from 'shared/ui/Container/Container';
import { ProductDetails } from 'entities/productDetails';

interface ProductDetailPageProps {
  className?: string;
}

export const ProductDetailPage = memo((props: ProductDetailPageProps) => {
  const { className } = props;
  const { id } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProduct(id || '1'));
  }, [dispatch, id]);
  const product = useSelector(getProduct);
  const isLoading = useSelector(getProductIsLoading);
  const error = useSelector(getProductError);
  if (!id) {
    return <div>Failed to load </div>;
  }
  if (isLoading) {
    return <div className={cls.ProductDetailPage}>Loading...</div>;
  }
  if (error) {
    return <div>Failed to load </div>;
  }
  return (
    <Container className={classNames(cls.ProductDetailPage, {}, [className])}>
      <ProductDetails product={product} />{' '}
    </Container>
  );
});
