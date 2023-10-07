import './Movies.css';
import MovieContainer from '../MovieContainer/MovieContainer';
import { useState, useEffect } from 'react';
import SectionTemplate from '../SectionTemplate/SectionTemplate';
import FilmSearchForm from '../FilmSearchForm/FilmSearchForm';
import renderMoviesSettings from '../../variables/renderMoviesSettings';

export default function Movies({ width, movies }) {
  const [filmRequest, setFilmRequest] = useState('');
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [settingsForRender, setSettingsForRender] = useState({});
  const [amountTotal, setAmountTotal] = useState(0);
  const [moviesArrayforMaping, setMoviesArrayforMaping] = useState([]);
  const [stateOfPage, setStateOfPage] = useState({});
  useEffect(() => {
    const { filmRequest, isShortFilm, moviesArrayforMaping, amountTotal } =
      JSON.parse(localStorage.getItem('moviesPage'));
    if (moviesArrayforMaping) {
      setFilmRequest(filmRequest);
      setIsShortFilm(isShortFilm);
      setMoviesArrayforMaping(moviesArrayforMaping);
      setAmountTotal(amountTotal);
    }
  }, []);

  // эффект контроля ширины экрана назначает набор переменных для отрисовки
  useEffect(() => {
    setSettingsForRender(
      width > 768
        ? renderMoviesSettings.bigScreen
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
    console.log('stateOfPage');
    localStorage.setItem('moviesPage', JSON.stringify(stateOfPage));
  }, [stateOfPage]);

  const submitForm = () => {
    setMoviesArrayforMaping(
      movies.filter((movie) =>
        filmRequest === ''
          ? isShortFilm
            ? movie.duration <= 40
            : movie.duration
          : (movie.nameRU.toLowerCase().includes(filmRequest.toLowerCase()) ||
              movie.nameEN.toLowerCase().includes(filmRequest.toLowerCase())) &&
            (isShortFilm ? movie.duration <= 40 : movie.duration)
      )
    );
  };
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
        <MovieContainer
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
