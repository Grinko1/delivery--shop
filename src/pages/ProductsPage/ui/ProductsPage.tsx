import { memo } from 'react';
import cls from './ProductsPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Products } from 'entities/products';
import { useLocation } from 'react-router-dom';

interface ProductsPageProps {
  className?: string;
}

export const ProductsPage = memo((props: ProductsPageProps) => {
  const { className } = props;
  const { pathname } = useLocation();
  function extractCategory (pathname: string): string {
    const parts = pathname.split('/');
    return parts[parts.length - 1];
  }

  const category = extractCategory(pathname);

  return (
    <div className={classNames(cls.ProductsPage, {}, [className])}>
      products page
      <Products />
    </div>
  );
});
