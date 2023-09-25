import './MovieContainer.css';
import SectionTemplate from '../SectionTemplate/SectionTemplate';
import { useMemo } from 'react';
import MovieCard from '../MovieCard/MovieCard';

export default function MovieContainer({ moviesArray }) {
  const movies = moviesArray.map((movie) => {
    return (
      <MovieCard
        img={movie.image}
        movieName={movie.nameRU}
        duration={movie.duration}
        isSaved={movie.isLiked}
      />
    );
  });
  console.log(movies);
  return (
    <section className="movie-container">
      <SectionTemplate place="movie-container">
        <ul className="movie-container__list">{movies}</ul>
      </SectionTemplate>
    </section>
  );
}
