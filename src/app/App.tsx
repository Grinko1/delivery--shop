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
// import { useDispatch, useSelector } from 'react-redux';
// import { getUserInited, userActions } from 'entities/User';

const App = () => {
  // const dispatch = useDispatch();
  // const inited = useSelector(getUserInited);
  // useEffect(() => {
  //   dispatch(userActions.initAuthData());
  // }, [dispatch]);

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="">
        <Header />
        <div className="content-page">
          <Routes>
            <Route path="*" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/help" element={<Help />} />
            <Route path="article/:id" element={<ArticleDetails />} />
          </Routes>
        </div>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
