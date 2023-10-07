import './MovieContainer.css';
import MovieCard from '../MovieCard/MovieCard';

export default function MovieContainer({ moviesArrayforMaping, amountTotal }) {
  // setStateOfPage({ ...{}, request: filmRequest, isShort: isShortFilm });

  // const [filmRequest, setFilmRequest] = useState('');
  // const [isShortFilm, setIsShortFilm] = useState(false);
  // const [settingsForRender, setSettingsForRender] = useState({});
  // const [amountTotal, setAmountTotal] = useState(0);
  // const [moviesArrayforMaping, setMoviesArrayforMaping] = useState([]);
  // const [stateOfPage, setStateOfPage] = useState({});
  // useEffect(() => {
  //   const { filmRequest, isShortFilm, moviesArrayforMaping, amountTotal } =
  //     JSON.parse(localStorage.getItem('moviesPage'));
  //   if (moviesArrayforMaping) {
  //     setFilmRequest(filmRequest);
  //     setIsShortFilm(isShortFilm);
  //     setMoviesArrayforMaping(moviesArrayforMaping);
  //     setAmountTotal(amountTotal);
  //   }
  // }, []);

  // // эффект контроля ширины экрана назначает набор переменных для отрисовки
  // useEffect(() => {
  //   setSettingsForRender(
  //     width > 768
  //       ? renderMoviesSettings.bigScreen
  //       : width > 520
  //       ? renderMoviesSettings.mediumScreen
  //       : renderMoviesSettings.smallScreen
  //   );
  // }, [width]);

  // // эффект устанавливает первоначальное количество карточек
  // useEffect(() => {
  //   setAmountTotal(settingsForRender.amountInit);
  // }, [settingsForRender.amountInit]);

  // // эффект записывает состояние страницы в переменнную
  // useEffect(() => {
  //   setStateOfPage({
  //     filmRequest,
  //     isShortFilm,
  //     moviesArrayforMaping,
  //     amountTotal,
  //   });
  // }, [filmRequest, isShortFilm, moviesArrayforMaping, amountTotal]);

  // // эффект записывает состояние страницы в localstorage
  // useEffect(() => {
  //   console.log('stateOfPage');
  //   localStorage.setItem('moviesPage', JSON.stringify(stateOfPage));
  // }, [stateOfPage]);

  // const handleButton = () => {
  //   setAmountTotal(amountTotal + settingsForRender.amountForAdd);
  // };
  // const submitForm = () => {
  //   setMoviesArrayforMaping(
  //     initialArray.filter((movie) =>
  //       filmRequest === ''
  //         ? isShortFilm
  //           ? movie.duration <= 40
  //           : movie.duration
  //         : (movie.nameRU.toLowerCase().includes(filmRequest.toLowerCase()) ||
  //             movie.nameEN.toLowerCase().includes(filmRequest.toLowerCase())) &&
  //           (isShortFilm ? movie.duration <= 40 : movie.duration)
  //     )
  //   );
  // };
  const movies = moviesArrayforMaping.slice(0, amountTotal).map((movie) => {
    return (
      <li
        key={movie.id}
        className="card"
      >
        <MovieCard
          img={`https://api.nomoreparties.co/${movie.image.url}`}
          movieName={movie.nameRU}
          duration={movie.duration}
          isSaved={movie.isLiked}
          trailerLink={movie.trailerLink}
        />
      </li>
    );
  });

  return <ul className="movie-container">{movies}</ul>;
}
