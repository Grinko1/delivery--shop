import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Catalog.module.scss';
import { memo, useEffect } from 'react';
import { CategoriesList } from 'entities/categories';
import { Products, PromotionalProduct, getPopularProducts } from 'entities/products';
import { useSelector } from 'react-redux';
import { getProductsError, getProductsIsLoading } from 'entities/products/model/selectors/getProducts/getProducts';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchPopularProducts } from 'entities/products/model/services/popularProducts/fetchPopularProducts';

interface CatalogProps {
  className?: string;
}

export const Catalog = memo((props: CatalogProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPopularProducts(''));
  }, [dispatch]);
  const products = useSelector(getPopularProducts);
  const isLoading = useSelector(getProductsIsLoading);
  const error = useSelector(getProductsError);

  return (
    <div className={classNames(cls.Catalog, {}, [className])}>
      <CategoriesList />
      <div className={cls.content}>
        <PromotionalProduct />
        <Products title="Часто заказывают" products={products} isLoading={isLoading} error={error} />
      </div>
    </div>
  );
});
