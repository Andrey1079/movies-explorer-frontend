import './Movies.css';
import MovieContainer from '../MovieContainer/MovieContainer';
import { useState, useEffect, useContext } from 'react';
import SectionTemplate from '../SectionTemplate/SectionTemplate';
import FilmSearchForm from '../FilmSearchForm/FilmSearchForm';
import RenderMoviesSettings from '../../constants/RenderMoviesSettings';
import { LoadingContext } from '../../context/LoadingContext';
import { SetToolTipOpenContext } from '../../context/SetToolTipOpenContext';
import { ToolTipSettingsContext } from '../../context/ToolTipSettingsContext';
import moviesApi from '../../utils/MoviesApi';
import ErrorMessages from '../../constants/ErrorsMessages';

export default function Movies({ width }) {
  const [movies, setMovies] = useState([]);
  const [filmRequest, setFilmRequest] = useState('');
  const [formValue, setFormValue] = useState('');

  const [isShortFilm, setIsShortFilm] = useState(false);
  const [settingsForRender, setSettingsForRender] = useState({});
  const [amountTotal, setAmountTotal] = useState(0);
  const [moviesArrayforMaping, setMoviesArrayforMaping] = useState([]);
  const [stateOfPage, setStateOfPage] = useState({});
  const [message, setMessage] = useState('');
  const setIsLoading = useContext(LoadingContext);
  const setIsToolTipOpen = useContext(SetToolTipOpenContext);
  const setToolTipSettings = useContext(ToolTipSettingsContext);

  // эффект устанавливает первоначальное количество карточек
  useEffect(() => {
    setAmountTotal(settingsForRender.amountInit);
  }, [settingsForRender.amountInit]);
  // эффект устанавливает первоначальное количество карточек
  useEffect(() => {
    if (movies.length < 1 && filmRequest !== '') {
      setIsLoading(true);
      moviesApi
        .getMovies()
        .then((movies) => {
          setMovies(movies);
        })
        .catch((err) => {
          setToolTipSettings({
            message: ErrorMessages.E500Movies,
            status: 'notOk',
          });
          setIsToolTipOpen(true);

          console.log(err);
        })
        .finally(() => setIsLoading(false));
    }
  }, [filmRequest, movies, setIsLoading, setIsToolTipOpen, setToolTipSettings]);

  // Эффект фильтрует массив при изменении данных
  useEffect(() => {
    setMoviesArrayforMaping(
      movies.filter(
        (movie) =>
          (movie.nameRU.toLowerCase().includes(filmRequest.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(filmRequest.toLowerCase())) &&
          (isShortFilm ? movie.duration <= 40 : movie.duration)
      )
    );
  }, [isShortFilm, filmRequest, movies]);

  // функция для кнопки ЕЩЕ
  const handleButton = () => {
    setAmountTotal(amountTotal + settingsForRender.amountForAdd);
  };

  // эффект контроля ширины экрана назначает набор переменных для отрисовки
  useEffect(() => {
    setSettingsForRender(
      width > 1100
        ? RenderMoviesSettings.bigScreen
        : width > 900
        ? RenderMoviesSettings.bigScreenS
        : width > 520
        ? RenderMoviesSettings.mediumScreen
        : RenderMoviesSettings.smallScreen
    );
  }, [width]);

  // эффект восстанавливает состояние страницы, при наличии данных в локалсторадж
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('moviesPage'))) {
      const {
        filmRequest,
        isShortFilm,
        moviesArrayforMaping,
        amountTotal,
        movies,
      } = JSON.parse(localStorage.getItem('moviesPage'));
      setFormValue(filmRequest);
      setIsShortFilm(isShortFilm);
      setMoviesArrayforMaping(moviesArrayforMaping);
      setAmountTotal(amountTotal);
      setMovies(movies);
    }
  }, []);

  // эффект записывает состояние страницы в переменнную
  useEffect(() => {
    setStateOfPage({
      filmRequest,
      isShortFilm,
      moviesArrayforMaping,
      amountTotal,
      movies,
    });
  }, [filmRequest, isShortFilm, moviesArrayforMaping, amountTotal, movies]);

  // эффект записывает состояние страницы в localstorage
  useEffect(() => {
    if (stateOfPage.moviesArrayforMaping) {
      localStorage.setItem('moviesPage', JSON.stringify(stateOfPage));
    }
  }, [stateOfPage]);

  // Эффект установки сообщения о поиске
  useEffect(() => {
    if (movies.length > 0 && moviesArrayforMaping.length < 1) {
      setMessage(ErrorMessages.MoviesNotFound);
    } else {
      setMessage('');
    }
  }, [movies, moviesArrayforMaping]);

  return (
    <main className="movies">
      <SectionTemplate place="movies">
        <FilmSearchForm
          checkboxState={isShortFilm}
          checkboxSetter={setIsShortFilm}
          onChange={setFormValue}
          setRequest={setFilmRequest}
          value={formValue}
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
