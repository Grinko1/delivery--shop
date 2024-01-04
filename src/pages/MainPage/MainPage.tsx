import { ArticleList } from 'entities/articles/ui/articleList/ArticleList';
import BonusProgram from 'entities/bonusProgram';
import { PopularCategory } from 'entities/categories';
import {
  Products,
  fetchPopularProducts,
  getPopularProducts,
  getProductsError,
  getProductsIsLoading
} from 'entities/products';
import { getPromoProducts } from 'entities/products/model/selectors/getPromoProducts/getPromoProducts';
import { RecipePreview } from 'entities/recipes';
import TopSlider from 'features/TopSlider';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Container } from 'shared/ui/Container/Container';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

const MainPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPopularProducts());
  }, [dispatch]);
  const promoProducts = useSelector(getPromoProducts);
  const products = useSelector(getPopularProducts);
  const isLoading = useSelector(getProductsIsLoading);
  const error = useSelector(getProductsError);
  return (
    <PageWrapper>
      <TopSlider />
      <PopularCategory />
      <Container>
        <Products title="Акции" products={promoProducts} isLoading={isLoading} error={error} />
        <Products title="Часто заказывают" products={products} isLoading={isLoading} error={error} />
      </Container>

      <RecipePreview />
      <BonusProgram />
      <ArticleList />
    </PageWrapper>
  );
};

export default MainPage;
