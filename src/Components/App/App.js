import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Main from '../Main/Main';
import BasicLayout from '../Layouts/BasicLayout/BasicLayout';
import useResize from '../../customHooks/useResize';
import FilmSearchForm from '../FilmSearchForm/FilmSearchForm';
import MovieContainer from '../MovieContainer/MovieContainer';
import moviesArray from '../../variables/movies';
import user from '../../variables/userInfo';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import NotFound from '../NotFound/NotFound';
import BurgerNavigationMenu from '../BurgerNavigationMenu/BurgerNavigationMenu';
import { IsLoading } from '../../context/IsLoadingContext';
import Preloader from '../Preloader/Preloader';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const navigate = useNavigate();
  const windowWidth = useResize(100);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isBurgerNavMenuOpened, setIsBurgerNavMenuOpened] = useState(false);
  const handleLogIn = (data) => {
    setIsLoggedIn(true);
    navigate('/', { replace: true });
  };
  useEffect(() => {
    setCurrentUser(user);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(true);
      setCards(moviesArray);
      setIsLoading(false);
    }
  }, [isLoggedIn]);

  const handleLogOut = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoggedIn(false);
      navigate('/signin', { replace: true });
      setIsLoading(false);
    }, 1000);
  };

  const handleSignUp = (data) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentUser(data);
      setIsLoading(false);
      navigate('/signin');
    }, 1000);
  };
  const handleChangeUserInfo = (changedUserInfo) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentUser(changedUserInfo);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <IsLoading.Provider value={isLoading}>
        <div className="page root">
          <BasicLayout
            burgerButtonOnClick={setIsBurgerNavMenuOpened}
            width={windowWidth}
            loggedIn={isLoggedIn}
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
      </IsLoading.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
