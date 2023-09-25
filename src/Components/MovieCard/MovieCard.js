import { useLocation } from 'react-router-dom';
import './MovieCard.css';

export default function MovieCard({ movieName, duration, isSaved, img }) {
  const location = useLocation().pathname;
  return (
    <li className="card">
      <img
        src={img}
        className="card__img"
        alt="постер фильма"
      />
      <p className="card__movie-name">{movieName}</p>
      <p className="card__movie-duration">{duration}</p>
      <button
        className={`card__button ${isSaved ? 'card__button_saved' : ''} ${
          location === '/movies/saved' ? 'card__button_location_saved' : ''
        } `}
      ></button>
    </li>
  );
}
