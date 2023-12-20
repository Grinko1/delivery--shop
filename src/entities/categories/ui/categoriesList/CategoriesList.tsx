import { memo, useCallback, useEffect, useState } from 'react';
import cls from './CategoriesList.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchCategories } from 'entities/categories/model/services/fetchCategories';
import { useSelector } from 'react-redux';
import { getCategories } from 'entities/categories/model/selectors/getCategories';
import { Link } from 'react-router-dom';
import { type Category } from 'entities/categories/model/types/category';
import { productsActions } from 'entities/products/model/slices/productsSlice';

interface CategoriesListProps {
  className?: string;
}

export const CategoriesList = memo((props: CategoriesListProps) => {
  const { className } = props;
  const [currentCat, setCurCat] = useState<Category | null>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  const categories = useSelector(getCategories);

  // @ts-expect-error dsf
  const handleShowSubcategory = useCallback((cat: Category, e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setCurCat(cat);
  }, []);

  const handleCloseSubcategory = () => {
    setCurCat(null);
  };
  const saveCategory = useCallback(
    (id: number) => {
      dispatch(productsActions.setCategory(id));
    },
    [dispatch]
  );
  return (
    <div onMouseLeave={handleCloseSubcategory}>
      <div className={classNames(cls.CategoriesList, {}, [className])}>
        {categories?.map((cat) => (
          <div
            className={cls.category}
            key={cat.id}
            onMouseEnter={(e) => {
              handleShowSubcategory(cat, e);
            }}
          >
            <img src={cat.img} alt="" className={cls.img} />
            {cat.title}
          </div>
        ))}
      </div>
      {currentCat?.subcategory && (
        <div className={cls.subcategory}>
          <h2>{currentCat?.title}</h2>
          <div className={cls.subList}>
            {currentCat?.subcategory?.map((item) => (
              <Link
                to={`/products/${item.link}`}
                key={item.id}
                className={cls.catLink}
                onClick={() => {
                  saveCategory(item.id);
                }}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});
