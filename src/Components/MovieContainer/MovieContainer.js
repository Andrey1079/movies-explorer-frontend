import './MovieContainer.css';
import MovieCard from '../MovieCard/MovieCard';

export default function MovieContainer({ moviesArrayforMaping, amountTotal }) {
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
            image: `${
              movie.image.url
                ? `https://api.nomoreparties.co${movie.image.url}`
                : movie.image
            }`,
            trailerLink: movie.trailerLink,
            thumbnail: `${
              movie.image.previewUrl
                ? `https://api.nomoreparties.co${
                    movie.image.previewUrl.split('\n')[0]
                  }`
                : movie.thumbnail
            }`,
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
