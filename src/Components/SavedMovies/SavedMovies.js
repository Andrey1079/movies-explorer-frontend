import './SavedMovies.css';
import MovieContainer from '../MovieContainer/MovieContainer';
import { useState, useEffect } from 'react';
import SectionTemplate from '../SectionTemplate/SectionTemplate';
import FilmSearchForm from '../FilmSearchForm/FilmSearchForm';

export default function Movies({ width, movies }) {
  const [filmRequest, setFilmRequest] = useState('');
  const [formValue, setFormValue] = useState('');
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [moviesArrayforMaping, setMoviesArrayforMaping] = useState([]);
  const [message, setMessage] = useState('');

  // Эффект отфильтровывает в общем массиве фиьлмов сохраненные
  useEffect(() => {
    setMoviesArrayforMaping(movies);
  }, [movies]);

  // Эффект установки сообщения о поиске
  useEffect(() => {
    if (movies.length > 0 && moviesArrayforMaping.length < 1) {
      setMessage('Ничего не нашлось');
    } else {
      setMessage('');
    }
  }, [movies, moviesArrayforMaping]);

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

  return (
    <main className="saved-movies">
      <SectionTemplate place="saved-movies">
        <FilmSearchForm
          checkboxState={isShortFilm}
          checkboxSetter={setIsShortFilm}
          onChange={setFormValue}
          setRequest={setFilmRequest}
          value={formValue}
          width={width}
          place="saved-movies"
        />
        <p className="saved-movies__message">{message}</p>
        <MovieContainer
          place="saved-movies"
          moviesArrayforMaping={moviesArrayforMaping}
          amountTotal={moviesArrayforMaping.length}
        ></MovieContainer>
      </SectionTemplate>
    </main>
  );
}
