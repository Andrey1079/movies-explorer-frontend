import './App.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Main from '../Main/Main';
import BasicLayout from '../Layouts/BasicLayout/BasicLayout';
import useResize from '../../customHooks/useResize';
import MovieContainer from '../MovieContainer/MovieContainer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { AuthErrorContext } from '../../context/AuthErrorContext';
import NotFound from '../NotFound/NotFound';
import BurgerNavigationMenu from '../BurgerNavigationMenu/BurgerNavigationMenu';
import Preloader from '../Preloader/Preloader';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import authentification from '../../utils/Authentification';
import Infotooltip from '../InfoToolTip/InfotoolTip';

function App() {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const windowWidth = useResize(100);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authError, setAuthError] = useState('');
  const [isBurgerNavMenuOpened, setIsBurgerNavMenuOpened] = useState(false);
  const [isToolTipOpen, setIsToolTipOpen] = useState(false);

  // -------------------------------------------------------------Функции для работы с данными пользователя
  const handleLogIn = (signInData) => {
    setIsLoading(true);
    authentification
      .signIn(signInData)
      .then((token) => {
        localStorage.setItem('token', token.token);
        checkToken('');
      })
      .catch((err) => setAuthError(err))
      .finally(() => setIsLoading(false));
  };
  const handleSignUp = (signUpData) => {
    setIsLoading(true);
    const password = signUpData.password;

    authentification
      .signUp(signUpData)
      .then((newUserData) =>
        authentification
          .signIn({ email: newUserData.email, password })
          .then((token) => {
            localStorage.setItem('token', token.token);
            checkToken('movies');
          })
      )
      .catch((err) => {
        setAuthError(err);
        setIsLoading(false);
      })
      .finally(() => setIsLoading(false));
  };

  const handleChangeUserInfo = (changedUserInfo) => {
    setIsLoading(true);
    authentification
      .changeUserInfo(changedUserInfo)
      .then((updatedUserData) => {
        setCurrentUser(updatedUserData);
      })
      .catch((err) => setAuthError(err))
      .finally(() => {
        setIsLoading(false);
        setIsToolTipOpen(true);
      });
  };

  const checkToken = (path) => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setIsLoading(true);
      authentification
        .checkToken(savedToken)
        .then((userData) => {
          setIsLoggedIn(true);
          setCurrentUser(userData);
          navigate(`/${path}`, { replace: true });
        })
        .catch((err) => setAuthError(err))
        .finally(() => setIsLoading(false));
    }
  };
  const handleLogOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
  };

  // -------------------------------------------------------------Эффекты
  useEffect(() => {
    setAuthError('');
  }, [location]);

  useEffect(() => {
    checkToken('');
  }, []);
  // -------------------------------------------------------------Закрытие tooltipa
  const toolTipClose = (path) => {
    setIsToolTipOpen(false);
    navigate(path);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <AuthErrorContext.Provider value={authError}>
        <div className="page root">
          <BasicLayout
            burgerButtonOnClick={setIsBurgerNavMenuOpened}
            width={windowWidth}
            loggedIn={isLoggedIn}
            headerPages={['/', '/profile', '/movies', '/saved-movies']}
            footerPages={['/', '/movies', '/saved-movies']}
          >
            <Routes>
              <Route
                exact
                path="/signin"
                element={<Login handleSubmit={handleLogIn} />}
              ></Route>
              <Route
                exact
                path="/signup"
                element={<Register handleSubmit={handleSignUp} />}
              ></Route>
              <Route
                exact
                path="/"
                element={<Main />}
              ></Route>
              <Route
                exact
                path="/profile"
                element={
                  <ProtectedRoute
                    loggedIn={isLoggedIn}
                    handleSubmit={handleChangeUserInfo}
                    handleLink={handleLogOut}
                    element={Profile}
                  />
                }
              ></Route>

              <Route
                exact
                path="/movies"
                element={
                  <ProtectedRoute
                    loggedIn={isLoggedIn}
                    width={windowWidth}
                    cards={cards}
                    element={MovieContainer}
                  />
                }
              ></Route>
              <Route
                exact
                path="/saved-movies"
                element={
                  <ProtectedRoute
                    loggedIn={isLoggedIn}
                    width={windowWidth}
                    cards={cards}
                    element={MovieContainer}
                  />
                }
              ></Route>
              <Route
                path="*"
                element={<NotFound navigate={navigate} />}
              ></Route>
            </Routes>
          </BasicLayout>
          <BurgerNavigationMenu
            isOpen={isBurgerNavMenuOpened}
            setIsOpen={setIsBurgerNavMenuOpened}
          />
          <Preloader isLoading={isLoading} />
          <Infotooltip
            isToolTipOpen={isToolTipOpen}
            handleButton={toolTipClose}
          ></Infotooltip>
        </div>
      </AuthErrorContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
