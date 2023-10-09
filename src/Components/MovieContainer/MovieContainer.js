import './MovieContainer.css';
import MovieCard from '../MovieCard/MovieCard';

export default function MovieContainer({
  savedMovies,
  moviesArrayforMaping,
  amountTotal,
  place,
}) {
  const movies = moviesArrayforMaping.slice(0, amountTotal).map((movie) => {
    return (
      <li
        key={movie.id || movie._id}
        className="card"
      >
        <MovieCard
          movie={{
            duration: movie.duration,
            country: movie.country,
            director: movie.director,
            year: movie.year,
            description: movie.description,
            image:
              // place === 'movies'
              //   ?
              `https://api.nomoreparties.co${movie.image.url}`,
            // : movie.image
            trailerLink: movie.trailerLink,
            thumbnail:
              // place === 'movies'
              // ?
              `https://api.nomoreparties.co${
                movie.image.previewUrl.slice('/n')[0]
              }`,
            // : movie.image.previewUrl
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
            movieId: movie.id || movie?.movieId,
          }}
        />
      </li>
    );
  });

  return <ul className="movie-container">{movies}</ul>;
}
