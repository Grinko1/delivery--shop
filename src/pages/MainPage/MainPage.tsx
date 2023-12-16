import { ArticleList } from 'entities/articles/ui/articleList/ArticleList';
import BonusProgram from 'entities/bonusProgram';
import PopularCategory from 'entities/popularCategories';
import { PromotionalProduct } from 'entities/promotionalProducts/ui/PromotionalProduct';
import TopSlider from 'features/TopSlider';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

const MainPage = () => {
  return (
    <PageWrapper>
      <TopSlider />
      <PopularCategory />
      <PromotionalProduct />
      <BonusProgram />
      <ArticleList />
    </PageWrapper>
  );
};

export default MainPage;
