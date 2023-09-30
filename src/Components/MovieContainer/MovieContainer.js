import './MovieContainer.css';
import SectionTemplate from '../SectionTemplate/SectionTemplate';
import MovieCard from '../MovieCard/MovieCard';
import { useLocation } from 'react-router-dom';
import FilmSearchForm from '../FilmSearchForm/FilmSearchForm';

export default function MovieContainer({ cards, width }) {
  const location = useLocation().pathname;
  let arrayForMaping;
  if (location === '/saved-movies') {
    arrayForMaping = cards.filter((movie) => movie.isLiked === true);
  } else {
    arrayForMaping = cards;
  }
  const movies = arrayForMaping.map((movie) => {
    return (
      <li
        key={movie._id}
        className="card"
      >
        <MovieCard
          id={movie._id}
          img={movie.image}
          movieName={movie.nameRU}
          duration={movie.duration}
          isSaved={movie.isLiked}
        />
      </li>
    );
  });
  return (
    <>
      <FilmSearchForm width={width} />
      <section className="movie-container">
        <SectionTemplate place="movie-container">
          {arrayForMaping.length < 1 ? (
            <h2 className="movie-container__title">Ничего не нашлось :( </h2>
          ) : (
            <ul className="movie-container__list">{movies}</ul>
          )}
        </SectionTemplate>
      </section>
    </>
  );
}
