import './MovieContainer.css';
import SectionTemplate from '../SectionTemplate/SectionTemplate';
import MovieCard from '../MovieCard/MovieCard';
import { useLocation } from 'react-router-dom';

export default function MovieContainer({ moviesArray }) {
  const location = useLocation().pathname;
  console.log(location);
  let arrayForMaping;
  if (location === '/movies/saved') {
    arrayForMaping = moviesArray.filter((movie) => movie.isLiked === true);
  } else {
    arrayForMaping = moviesArray;
  }
  const movies = arrayForMaping.map((movie) => {
    return (
      <MovieCard
        img={movie.image}
        movieName={movie.nameRU}
        duration={movie.duration}
        isSaved={movie.isLiked}
      />
    );
  });
  return (
    <section className="movie-container">
      <SectionTemplate place="movie-container">
        <ul className="movie-container__list">{movies}</ul>
      </SectionTemplate>
    </section>
  );
}
