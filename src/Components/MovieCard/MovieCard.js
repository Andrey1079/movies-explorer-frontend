import './MovieCard.css';
import { Link } from 'react-router-dom';
import { SavedMoviesIdContext } from '../../context/SavedMoviesIdContext';
import { DeleteMovieContext } from '../../context/DeleteMovieContext';
import { AddMovieContext } from '../../context/AddMovieContext';
import { useState, useContext, useEffect } from 'react';

export default function MovieCard({ movie }) {
  const { duration, image, trailerLink, nameRU, movieId } = movie;
  const savedMoviesId = useContext(SavedMoviesIdContext);
  const deleteMovie = useContext(DeleteMovieContext);
  const addMovie = useContext(AddMovieContext);
  const [isSaved, setIsSaved] = useState(true);
  useEffect(() => {
    savedMoviesId.includes(movieId) ? setIsSaved(true) : setIsSaved(false);
  }, [savedMoviesId, movieId]);
  const handleButton = () => {
    if (isSaved) {
      deleteMovie(movieId);
    } else {
      addMovie(movie);
    }
  };
  return (
    <>
      <Link
        to={trailerLink}
        className="card__container"
        target="blanc"
      >
        <img
          src={image}
          className="card__img"
          alt={`постер фильма ${nameRU}`}
        />
      </Link>
      <h2 className="card__movie-name">{nameRU}</h2>
      <p className="card__movie-duration">{`
      ${
        duration / 60 < 1
          ? `${duration}мин.`
          : `${Math.floor(duration / 60)}ч. ${duration % 60}мин.`
      }
    `}</p>
      <button
        onClick={handleButton}
        type="button"
        className={`card__button ${isSaved ? 'card__button_saved' : ''}`}
      ></button>
    </>
  );
}
