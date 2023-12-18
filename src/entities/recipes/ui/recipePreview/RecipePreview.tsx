import { memo } from 'react';
import cls from './RecipePreview.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button';
import { Link } from 'react-router-dom';

interface RecipePreviewProps {
  className?: string;
}

export const RecipePreview = memo((props: RecipePreviewProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.RecipePreview, {}, [className])}>
      <h3 className={cls.header}>Рецепт дня</h3>
      <hr className={cls.hr} />
      <div className={cls.recipe}>
        <img src="https://static.insales-cdn.com/r/zRSfomlhXGk/rs:fit:600:600:1/plain/images/articles/1/5705/4445769/large_%D0%B1%D0%BE%D0%BB%D0%BE%D0%BD%D1%8C%D0%B5%D0%B7%D0%B5.jpg@webp" />
        <div className={cls.text}>
          <h3>Паста Болоньезе</h3>
          <p>Оригинальная, самая лучшая, праздник каждый день! Паста болоньезе — классический рецепт Итальянской кухни!</p>
          <div className={cls.btns}>
            <Button>Читать </Button>
            <Link className={cls.reedMore} to="recipes">
              Больше рецептов
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});
