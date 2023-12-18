import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Catalog.module.scss';
import { memo } from 'react';
import { CategoriesList } from 'entities/categories';
import { PromotionalProduct } from 'entities/promotionalProducts';
import { Products } from 'entities/products';

interface CatalogProps {
  className?: string;
}

export const Catalog = memo((props: CatalogProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.Catalog, {}, [className])}>
      <CategoriesList />
      <div className={cls.content}>
        <PromotionalProduct />
        <Products title="Часто заказывают" />
      </div>
    </div>
  );
});
