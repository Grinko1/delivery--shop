import { memo } from 'react';
import cls from './ProductsPageHeader.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getCategoryName } from 'entities/products';
import ArrowBack from 'shared/ui/ArrowBack';
import { Link } from 'react-router-dom';

interface ProductsPageHeaderProps {
  className?: string;
}

export const ProductsPageHeader = memo((props: ProductsPageHeaderProps) => {
  const { className } = props;
  const activeCategory = useSelector(getCategoryName);
  console.log(activeCategory, 'active cat');
  return (
    <div className={classNames(cls.ProductsPageHeader, {}, [className])}>
      <Link to="/catalog" className={cls.back}>
        <ArrowBack /> Назад
      </Link>

      <h3> {activeCategory}</h3>
    </div>
  );
});
