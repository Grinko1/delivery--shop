/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useEffect, useState } from 'react';

import styles from './styles.module.scss';

// import { UserContext } from '../../contexts/userContext';
// import { registration, login } from '../../http/userAPI';
import { useLocation, Link } from 'react-router-dom';
import Logo from 'shared/ui/Logo';
import Input from 'shared/ui/Input';
import Button from 'shared/ui/Button';

const validateEmail = (email: string) => {
  const re =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return re.test(String(email).toLowerCase());
};

const Auth = () => {
  //   const { setIsAuth, setUser, isAuth } = useContext(UserContext) || {};

  const setIsAuth = (a: boolean) => {};
  const setUser = (a: any) => {};
  //   const isAuth = false;

  const { pathname } = useLocation();
  //   const { asPath, push } = useRouter();

  const isLoginPage = pathname === '/login';

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    // if (!isAuth && pathname !== '/login' && pathname !== '/registration') {
    //   //   push('/login');
    // }
  }, []);

  const handleSubmit = () => {
    if (!validateEmail(emailValue)) {
      setEmailError('Введите корректный email');

      if (!passwordValue) setPasswordError('Введите пароль');

      return;
    }

    let user;

    try {
      if (isLoginPage) {
        // user = await login(emailValue, passwordValue);
      } else {
        // user = await registration(emailValue, passwordValue);
      }

      setIsAuth(true);
      setUser(user);
      //   push('/');
    } catch (error) {
      //   alert(error?.response?.data?.message);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <Logo />

        <form className={styles.form}>
          <Input
            name="email"
            placeholder="Email"
            errorMessage={emailError}
            value={emailValue}
            onChange={(event) => {
              if (emailValue) {
                setEmailError('');
              }
              setEmailValue(event.target.value);
            }}
          />
          <Input
            name="password"
            placeholder="Пароль"
            errorMessage={passwordError}
            value={passwordValue}
            onChange={(event) => {
              if (passwordValue) {
                setPasswordError('');
              }

              setPasswordValue(event.target.value);
            }}
          />
          <Button onClick={handleSubmit}>{isLoginPage ? 'Вход' : 'Регистрация'}</Button>
        </form>

        {isLoginPage
          ? (
          <span>
            Еще нет аккаунта?
            <Link to="/registration">
              <a className={styles.link}> Регистрация</a>
            </Link>
          </span>
            )
          : (
          <span>
            Уже есть аккаунт?
            <Link to="/login">
              <a className={styles.link}> Войти</a>
            </Link>
          </span>
            )}
      </div>
    </>
  );
};

export default Auth;
