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
  const [moviesArrayforMaping, setMoviesArrayforMaping] = useState([]);
  const [message, setMessage] = useState('');

  // Эффект отфильтровывает в общем массиве фиьлмов сохраненные
  useEffect(() => {
    setMoviesArrayforMaping(movies);
  }, [movies]);

  const submitForm = () => {
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

    if (result.length < 1) {
      setMessage('ничего не нашлось :(');
    } else {
      setMessage('');
    }
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
