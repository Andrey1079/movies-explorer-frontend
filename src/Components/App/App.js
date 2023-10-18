import './App.css';
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Main from '../Main/Main';
import BasicLayout from '../Layouts/BasicLayout/BasicLayout';
import useResize from '../../customHooks/useResize';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { ErrorContext } from '../../context/ErrorContext';
import { SavedMoviesIdContext } from '../../context/SavedMoviesIdContext';
import { DeleteMovieContext } from '../../context/DeleteMovieContext';
import { AddMovieContext } from '../../context/AddMovieContext';
import { LoadingContext } from '../../context/LoadingContext';
import { ToolTipSettingsContext } from '../../context/ToolTipSettingsContext';
import { SetToolTipOpenContext } from '../../context/SetToolTipOpenContext';
import NotFound from '../NotFound/NotFound';
import BurgerNavigationMenu from '../BurgerNavigationMenu/BurgerNavigationMenu';
import Preloader from '../Preloader/Preloader';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import mainApi from '../../utils/MainApi';
import Infotooltip from '../InfoToolTip/InfotoolTip';
import MESSAGES from '../../constants/messages';

function App() {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const windowWidth = useResize(100);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [error, setError] = useState('');
  const [isBurgerNavMenuOpened, setIsBurgerNavMenuOpened] = useState(false);
  const [isToolTipOpen, setIsToolTipOpen] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedMoviesId, setSavedMoviesId] = useState([]);
  const [tooltipData, setToolTipData] = useState({ message: '', status: '' });

  // -------------------------------------------------------------Функции для работы с данными пользователя

  const handleLogIn = (signInData) => {
    setIsLoading(true);
    mainApi
      .signIn(signInData)
      .then((token) => {
        localStorage.setItem('token', token.token);
        // setIsLoggedIn(true);
        getStartData();
        navigate('/movies');
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  };
  const handleSignUp = (signUpData) => {
    setIsLoading(true);
    const password = signUpData.password;
    mainApi
      .signUp(signUpData)
      .then((newUserData) =>
        mainApi.signIn({ email: newUserData.email, password }).then((token) => {
          // setIsLoggedIn(true);
          localStorage.setItem('token', token.token);
          getStartData();
          navigate('/movies');
        })
      )
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      })
      .finally(() => setIsLoading(false));
  };

  const handleChangeUserInfo = (changedUserInfo) => {
    setIsLoading(true);
    mainApi
      .changeUserInfo(changedUserInfo)
      .then((updatedUserData) => {
        setCurrentUser(updatedUserData);
        setToolTipData({ message: MESSAGES.USER_DATA_UPDATED, status: 'ok' });
        setIsToolTipOpen(true);
      })
      .catch((err) => setError(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const getStartData = () => {
    setIsLoading(true);
    mainApi
      .getStartData()
      .then((startData) => {
        setIsLoggedIn(true);
        const [savedMovies, userData] = startData;
        setCurrentUser(userData);
        setSavedMovies(savedMovies);
      })
      .catch((err) => {
        setIsLoggedIn(false);
        setError(err);
      })
      .finally(() => setIsLoading(false));
  };
  const handleLogOut = () => {
    setIsLoggedIn(false);
    localStorage.clear();
  };

  // -------------------------------------------------------------Функции для работы с фильмами

  const deleteMovie = (id) => {
    const _id = savedMovies.find((savedMovie) => {
      return savedMovie.movieId === id;
    })._id;
    mainApi
      .deleteMovie(_id)
      .then(() => {
        setSavedMovies(
          savedMovies.filter((movie) => {
            return movie.movieId !== id;
          })
        );
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  };

  const saveMovie = (newMovie) => {
    mainApi
      .saveMovie(newMovie)
      .then((savedMovie) => {
        setSavedMovies([savedMovie, ...savedMovies]);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  };

  // -------------------------------------------------------------функция закрытия tooltipa
  const toolTipClose = () => {
    setIsToolTipOpen(false);
  };

  // -------------------------------------------------------------Эффекты

  // обнуляет сообщение об ошибке при переходе на другую страницу
  useEffect(() => {
    setError('');
  }, [location]);

  //получает массив сохраненных фильмов и данные пользователя
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getStartData();
    } else {
      setIsLoggedIn(false);
      localStorage.clear();
    }
  }, []);

  //получает массив id сохраненных фильмов
  useEffect(() => {
    setSavedMoviesId(
      savedMovies.map((savedMovie) => {
        return savedMovie.movieId;
      })
    );
  }, [savedMovies]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <ErrorContext.Provider value={error}>
        <SavedMoviesIdContext.Provider value={savedMoviesId}>
          <DeleteMovieContext.Provider value={deleteMovie}>
            <AddMovieContext.Provider value={saveMovie}>
              <LoadingContext.Provider value={setIsLoading}>
                <ToolTipSettingsContext.Provider value={setToolTipData}>
                  <SetToolTipOpenContext.Provider value={setIsToolTipOpen}>
                    {isLoggedIn === null ? (
                      <Preloader />
                    ) : (
                      <div className="page">
                        <BasicLayout
                          burgerButtonOnClick={setIsBurgerNavMenuOpened}
                          width={windowWidth}
                          loggedIn={isLoggedIn}
                          headerPages={[
                            '/',
                            '/profile',
                            '/movies',
                            '/saved-movies',
                          ]}
                          footerPages={['/', '/movies', '/saved-movies']}
                        >
                          <Routes>
                            <Route
                              exact
                              path="/signin"
                              element={
                                isLoggedIn ? (
                                  <Navigate
                                    to="/"
                                    replace
                                  />
                                ) : (
                                  <Login handleSubmit={handleLogIn} />
                                )
                              }
                            ></Route>
                            <Route
                              exact
                              path="/signup"
                              element={
                                isLoggedIn ? (
                                  <Navigate
                                    to="/"
                                    replace
                                  />
                                ) : (
                                  <Register handleSubmit={handleSignUp} />
                                )
                              }
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
                                  element={Movies}
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
                                  element={SavedMovies}
                                  movies={savedMovies}
                                />
                              }
                            ></Route>
                            <Route
                              path={'*'}
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
                          data={tooltipData}
                          isToolTipOpen={isToolTipOpen}
                          handleButton={toolTipClose}
                        ></Infotooltip>
                      </div>
                    )}
                  </SetToolTipOpenContext.Provider>
                </ToolTipSettingsContext.Provider>
              </LoadingContext.Provider>
            </AddMovieContext.Provider>
          </DeleteMovieContext.Provider>
        </SavedMoviesIdContext.Provider>
      </ErrorContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
