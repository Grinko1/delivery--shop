import { ArticleList } from 'entities/articles/ui/articleList/ArticleList';
import BonusProgram from 'entities/bonusProgram';
import { PopularCategory } from 'entities/categories';
import { Products, getPopularProducts, getProductsError, getProductsIsLoading } from 'entities/products';
import { fetchPopularProducts } from 'entities/products/model/services/fetchPopularProducts';
import { PromotionalProduct } from 'entities/promotionalProducts/ui/PromotionalProduct';
import { RecipePreview } from 'entities/recipes';
import TopSlider from 'features/TopSlider';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

const MainPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPopularProducts(''));
  }, [dispatch]);
  const products = useSelector(getPopularProducts);
  const isLoading = useSelector(getProductsIsLoading);
  const error = useSelector(getProductsError);
  return (
    <PageWrapper>
      <TopSlider />
      <PopularCategory />
      <PromotionalProduct />
      <Products title="Часто заказывают" products={products} isLoading={isLoading} error={error} />
      <RecipePreview />
      <BonusProgram />
      <ArticleList />
    </PageWrapper>
  );
};

export default MainPage;
