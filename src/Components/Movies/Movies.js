import './Movies.css';
import MovieContainer from '../MovieContainer/MovieContainer';
import { useState, useEffect, useContext } from 'react';
import SectionTemplate from '../SectionTemplate/SectionTemplate';
import FilmSearchForm from '../FilmSearchForm/FilmSearchForm';
import renderMoviesSettings from '../../variables/renderMoviesSettings';
import { LoadingContext } from '../../context/LoadingContext';
// import { ErrorContext } from '../../context/ErrorContext';
import moviesApi from '../../utils/MoviesApi';

export default function Movies({ width }) {
  const [movies, setMovies] = useState([]);
  const [filmRequest, setFilmRequest] = useState('');
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [settingsForRender, setSettingsForRender] = useState({});
  const [amountTotal, setAmountTotal] = useState(0);
  const [moviesArrayforMaping, setMoviesArrayforMaping] = useState([]);
  const [stateOfPage, setStateOfPage] = useState({});
  const [message, setMessage] = useState('');
  const setIsLoading = useContext(LoadingContext);
  // const error = useContext(ErrorContext);

  // эффект восстанавливает состояние страницы, при наличии данных в локалсторадж
  useEffect(() => {
    if (localStorage.getItem('moviesPage')) {
      const { filmRequest, isShortFilm, moviesArrayforMaping, amountTotal } =
        JSON.parse(localStorage.getItem('moviesPage'));

      setFilmRequest(filmRequest);
      setIsShortFilm(isShortFilm);
      setMoviesArrayforMaping(moviesArrayforMaping);
      setAmountTotal(amountTotal);
    }
  }, []);

  // Эффект устанавливает сообщение об ошибке
  // useEffect(() => {
  //   setMessage(error);
  // }, [error]);

  // эффект контроля ширины экрана назначает набор переменных для отрисовки
  useEffect(() => {
    setSettingsForRender(
      width > 1100
        ? renderMoviesSettings.bigScreen
        : width > 900
        ? renderMoviesSettings.bigScreenS
        : width > 520
        ? renderMoviesSettings.mediumScreen
        : renderMoviesSettings.smallScreen
    );
  }, [width]);

  // эффект устанавливает первоначальное количество карточек
  useEffect(() => {
    setAmountTotal(settingsForRender.amountInit);
  }, [settingsForRender.amountInit]);

  // эффект записывает состояние страницы в переменнную
  useEffect(() => {
    setStateOfPage({
      filmRequest,
      isShortFilm,
      moviesArrayforMaping,
      amountTotal,
    });
  }, [filmRequest, isShortFilm, moviesArrayforMaping, amountTotal]);

  // эффект записывает состояние страницы в localstorage
  useEffect(() => {
    if (moviesArrayforMaping.length > 0) {
      localStorage.setItem('moviesPage', JSON.stringify(stateOfPage));
    }
  }, [stateOfPage, moviesArrayforMaping]);

  const searchMovie = (movies) => {
    const result = movies.filter((movie) =>
      filmRequest === ''
        ? isShortFilm
          ? movie.duration <= 40
          : movie.duration
        : (movie.nameRU.toLowerCase().includes(filmRequest.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(filmRequest.toLowerCase())) &&
          (isShortFilm ? movie.duration <= 40 : movie.duration)
    );

    setMoviesArrayforMaping(result);
    console.log(movies);
    if (result.length < 1) {
      setMessage('ничего не нашлось :(');
    } else {
      setMessage('');
    }
  };

  function submitForm() {
    if (movies.length < 1) {
      setIsLoading(true);
      moviesApi
        .getMovies()
        .then((movies) => {
          setMovies(movies);
          searchMovie(movies);
        })
        .catch((err) => {
          setMessage(
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
          );
          console.log(err);
        })
        .finally(() => setIsLoading(false));
    } else {
      searchMovie(movies);
    }
  }
  const handleButton = () => {
    setAmountTotal(amountTotal + settingsForRender.amountForAdd);
  };
  return (
    <main className="movies">
      <SectionTemplate place="movies">
        <FilmSearchForm
          submit={submitForm}
          checkboxState={isShortFilm}
          checkboxSetter={setIsShortFilm}
          onChange={setFilmRequest}
          value={filmRequest}
          width={width}
          place="movies"
        />

        <p className="movies__message">{message}</p>
        <MovieContainer
          place="movies"
          moviesArrayforMaping={moviesArrayforMaping}
          amountTotal={amountTotal}
        ></MovieContainer>
        <button
          onClick={handleButton}
          type="button"
          className={`movies__button ${
            amountTotal < moviesArrayforMaping.length
              ? 'movies__button_visible'
              : ''
          }`}
        >
          Еще
        </button>
      </SectionTemplate>
    </main>
  );
}
