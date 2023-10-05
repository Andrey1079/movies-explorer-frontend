import './MovieContainer.css';
import SectionTemplate from '../SectionTemplate/SectionTemplate';
import MovieCard from '../MovieCard/MovieCard';
import FilmSearchForm from '../FilmSearchForm/FilmSearchForm';
import { useEffect, useState } from 'react';
import renderMoviesSettings from '../../variables/renderMoviesSettings';

export default function MovieContainer({
  initialArray,
  width,
  submitForm,
  filmRequest,
  setFilmRequest,
  isShortFilm,
  setIsShortFilm,
}) {
  //
  //
  // КОНТРОЛЬ ПЕРЕРЕНДЕРА
  console.log('ПЕРЕРЕНДЕР MOVIE-CONTAINER');

  //
  //
  //
  // setStateOfPage({ ...{}, request: filmRequest, isShort: isShortFilm });
  const [settingsForRender, setSettingsForRender] = useState({});
  const [amountOfAddedMovies, setAmountOfAddedMovies] = useState(0);
  const [amountTotal, setAmountTotal] = useState(0);
  const [moviesArrayforMaping, setMoviesArrayforMaping] = useState([]);

  useEffect(() => {
    console.log('useEffect width');
    setSettingsForRender(
      width > 768
        ? renderMoviesSettings.bigScreen
        : width > 520
        ? renderMoviesSettings.mediumScreen
        : renderMoviesSettings.smallScreen
    );
  }, [width]);
  useEffect(() => {
    console.log('useEffect initialArray');
    setAmountOfAddedMovies(0);
    setAmountTotal(settingsForRender.amountInit);
  }, [initialArray, settingsForRender.amountInit]);

  useEffect(() => {
    setMoviesArrayforMaping(initialArray.slice(0, amountTotal));
  }, [amountTotal, initialArray]);

  const handleButton = () => {
    setAmountTotal(amountTotal + settingsForRender.amountForAdd);
  };

  const movies = moviesArrayforMaping.map((movie) => {
    return (
      <li
        key={movie.id}
        className="card"
      >
        <MovieCard
          img={`https://api.nomoreparties.co/${movie.image.url}`}
          movieName={movie.nameRU}
          duration={movie.duration}
          isSaved={movie.isLiked}
          trailerLink={movie.trailerLink}
        />
      </li>
    );
  });

  return (
    <div className="movie-container">
      <SectionTemplate place="movie-container">
        <FilmSearchForm
          submit={submitForm}
          checkboxState={isShortFilm}
          checkboxSetter={setIsShortFilm}
          onChange={setFilmRequest}
          value={filmRequest}
          width={width}
          place="movie-container"
        />

        <ul className="movie-container__list">{movies}</ul>

        <button
          onClick={handleButton}
          type="button"
          className={`movie-container__button ${
            amountTotal < initialArray.length
              ? 'movie-container__button_visible'
              : ''
          }`}
        >
          Еще
        </button>
      </SectionTemplate>
    </div>
  );
}
