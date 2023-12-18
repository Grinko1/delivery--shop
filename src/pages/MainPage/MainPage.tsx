import { ArticleList } from 'entities/articles/ui/articleList/ArticleList';
import BonusProgram from 'entities/bonusProgram';
import { PopularCategory } from 'entities/categories';
import { Products } from 'entities/products';
import { PromotionalProduct } from 'entities/promotionalProducts/ui/PromotionalProduct';
import { RecipePreview } from 'entities/recipes';
import TopSlider from 'features/TopSlider';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

const MainPage = () => {
  return (
    <PageWrapper>
      <TopSlider />
      <PopularCategory />
      <PromotionalProduct />
      <Products title="Часто заказывают" />
      <RecipePreview />
      <BonusProgram />
      <ArticleList />
    </PageWrapper>
  );
};

export default MainPage;
