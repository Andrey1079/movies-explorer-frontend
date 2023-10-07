import './SavedMovies.css';
import MovieContainer from '../MovieContainer/MovieContainer';
import { useState, useEffect } from 'react';
import SectionTemplate from '../SectionTemplate/SectionTemplate';
import FilmSearchForm from '../FilmSearchForm/FilmSearchForm';

export default function Movies({ width, movies }) {
  const [filmRequest, setFilmRequest] = useState('');
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [moviesArrayforMaping, setMoviesArrayforMaping] = useState(movies);
  useEffect(() => {
    setMoviesArrayforMaping(movies);
  }, []);

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
          moviesArrayforMaping={moviesArrayforMaping}
          amountTotal={moviesArrayforMaping.length}
        ></MovieContainer>
      </SectionTemplate>
    </main>
  );
}
