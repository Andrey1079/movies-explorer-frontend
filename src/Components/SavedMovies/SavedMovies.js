import './SavedMovies.css';
import MovieContainer from '../MovieContainer/MovieContainer';
import { useState, useEffect, useContext } from 'react';
import SectionTemplate from '../SectionTemplate/SectionTemplate';
import FilmSearchForm from '../FilmSearchForm/FilmSearchForm';
import { SavedMoviesIdContext } from '../../context/SavedMoviesIdContext';

export default function Movies({ width, movies }) {
  const savedId = useContext(SavedMoviesIdContext);
  const [filmRequest, setFilmRequest] = useState('');
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [moviesArrayforMaping, setMoviesArrayforMaping] = useState(movies);
  useEffect(() => {
    setMoviesArrayforMaping(
      movies.filter((movie) => savedId.includes(movie.id))
    );
  }, [savedId, movies]);

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

  return (
    <main className="saved-movies">
      <SectionTemplate place="saved-movies">
        <FilmSearchForm
          submit={submitForm}
          checkboxState={isShortFilm}
          checkboxSetter={setIsShortFilm}
          onChange={setFilmRequest}
          value={filmRequest}
          width={width}
          place="saved-movies"
        />
        <MovieContainer
          place="saved-movies"
          moviesArrayforMaping={moviesArrayforMaping}
          amountTotal={moviesArrayforMaping.length}
        ></MovieContainer>
      </SectionTemplate>
    </main>
  );
}
