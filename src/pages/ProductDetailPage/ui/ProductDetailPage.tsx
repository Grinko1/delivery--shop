import { memo, useEffect } from 'react';
import cls from './ProductDetailPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchProduct } from '../model/services/fetchProduct';
import { useSelector } from 'react-redux';
import { getProduct } from '../model/selectors/getProduct';

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
  console.log(product);
  if (!id) {
    return <div>Failed to load </div>;
  }
  return <div className={classNames(cls.ProductDetailPage, {}, [className])}>details {id}</div>;
});
