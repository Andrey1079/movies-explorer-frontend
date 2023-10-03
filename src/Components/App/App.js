import './App.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Main from '../Main/Main';
import BasicLayout from '../Layouts/BasicLayout/BasicLayout';
import useResize from '../../customHooks/useResize';
import MovieContainer from '../MovieContainer/MovieContainer';
import moviesArray from '../../variables/movies';
import user from '../../variables/userInfo';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { AuthErrorContext } from '../../context/AuthErrorContext';
import NotFound from '../NotFound/NotFound';
import BurgerNavigationMenu from '../BurgerNavigationMenu/BurgerNavigationMenu';
// import { IsLoading } from '../../context/IsLoadingContext';
import Preloader from '../Preloader/Preloader';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import authentification from '../../utils/Authentification';

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

  const handleLogIn = (signInData) => {
    setIsLoading(true);
    authentification
      .signIn(signInData)
      .then((token) => {
        localStorage.setItem('token', token.token);
        setIsLoggedIn(true);
        navigate('/', { replace: true });
        checkToken();
      })
      .catch((err) => setAuthError(err))
      .finally(() => setIsLoading(false));
  };

  const checkToken = () => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setIsLoading(true);
      authentification
        .checkToken(savedToken)
        .then((userData) => setCurrentUser(userData))
        .catch((err) => setAuthError(err))
        .finally(() => setIsLoading(false));
    }
  };
  useEffect(() => {
    setAuthError({});
  }, [location]);
  useEffect(() => {
    setCurrentUser(user);
  }, []);

  useEffect(() => {
    setCards(moviesArray);
    setIsLoading(false);
  }, []);

  const handleLogOut = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoggedIn(false);
      setIsLoading(false);
    }, 1000);
  };

  const handleSignUp = (signUpData) => {};
  // setTimeout(() => {
  //     setCurrentUser(signInData);
  //     setIsLoading(false);
  //     navigate('/signin');
  //   }, 1000);
  // };
  const handleChangeUserInfo = (changedUserInfo) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentUser(changedUserInfo);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <AuthErrorContext.Provider value={authError}>
        {/* <IsLoading.Provider value={isLoading}> */}
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
        </div>
        {/* </IsLoading.Provider> */}
      </AuthErrorContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
