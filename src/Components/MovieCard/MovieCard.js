import './MovieCard.css';
import { Link } from 'react-router-dom';

export default function MovieCard({
  movieName,
  duration,
  isSaved,
  img,
  trailerLink,
}) {
  return (
    <>
      <Link
        to={trailerLink}
        className="card__container"
        target="blanc"
      >
        <img
          src={img}
          className="card__img"
          alt={`постер фильма ${movieName}`}
        />
      </Link>
      <h2 className="card__movie-name">{movieName}</h2>
      <p className="card__movie-duration">{duration}</p>
      <button
        type="button"
        className={`card__button ${isSaved ? 'card__button_saved' : ''}`}
      ></button>
    </>
  );
}
