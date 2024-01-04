import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Catalog.module.scss';
import { memo } from 'react';
import { CategoriesList } from 'entities/categories';
import { Products, getPopularProducts, getPromoProducts } from 'entities/products';
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
  const products = useSelector(getPopularProducts);
  const promoProducts = useSelector(getPromoProducts);
  const isLoading = useSelector(getProductsIsLoading);
  const error = useSelector(getProductsError);

  if (!products.length) {
    dispatch(fetchPopularProducts());
  }
  return (
    <div className={classNames(cls.Catalog, {}, [className])}>
      <CategoriesList />
      <div className={cls.content}>
        <Products title="Часто заказывают" products={products} isLoading={isLoading} error={error} />
        {promoProducts && <Products title="Акции" products={promoProducts} isLoading={isLoading} error={error} />}
      </div>
    </div>
  );
});
