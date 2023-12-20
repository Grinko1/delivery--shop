import { memo } from 'react';
import cls from './PromotionalProduct.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ProductList } from './ProductList/ProductList';

interface PromotionalProductProps {
  className?: string;
}

export const PromotionalProduct = memo((props: PromotionalProductProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.PromotionalProduct, {}, [className])}>
      <h3 className={cls.header}>Акции</h3>
      <ProductList />
    </div>
  );
});
