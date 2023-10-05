import './Movies.css';
import MovieContainer from '../MovieContainer/MovieContainer';
import { useState } from 'react';

export default function Movies({ width, movies }) {
  const [filmRequest, setFilmRequest] = useState('');
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [searchResalt, setSearchResalt] = useState([]);
  //   const [stateOfPage, setStateOfPage] = useState({});
  const submitForm = () => {
    // setStateOfPage({ ...{}, request: filmRequest, isShort: isShortFilm });
    setSearchResalt(
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
    <main className="moives">
      <MovieContainer
        initialArray={searchResalt}
        width={width}
        submitForm={submitForm}
        filmRequest={filmRequest}
        setFilmRequest={setFilmRequest}
        isShortFilm={isShortFilm}
        setIsShortFilm={setIsShortFilm}
      ></MovieContainer>
    </main>
  );
}
