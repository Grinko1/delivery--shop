import { classNames } from 'shared/lib/classNames/classNames';
import { Header } from 'widgets/Header';
import { Suspense } from 'react';
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import { Footer } from 'widgets/Footer/Footer';
import AboutPage from 'pages/AboutPage';
import { Help } from 'pages/Help/Help';
import { ArticleDetails } from 'entities/articles/ui/articleList/ArticleDetails';
import { CatalogPage } from 'pages/CatalogPage/ui/CatalogPage';
import { ProductsPage } from 'pages/ProductsPage';
import { ProductDetailPage } from 'pages/ProductDetailPage';
import { CartPage } from 'pages/CartPage';

const App = () => {
  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="">
        <Header />
        <Routes>
          <Route path="*" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/help" element={<Help />} />
          <Route path="/article/:id" element={<ArticleDetails />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/products/:title" element={<ProductsPage />} />
          <Route path="product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
