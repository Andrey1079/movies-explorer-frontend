import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import useResize from '../../customHooks/useResize';
import FilmSearchForm from '../FilmSearchForm/FilmSearchForm';
import MovieContainer from '../MovieContainer/MovieContainer';
import moviesArray from '../../variables/movies';
import Register from '../Register/Register';
import Login from '../Login/Login';

function App() {
  const windowWidth = useResize(100);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="page root">
      {/* <Header
        width={windowWidth}
        loggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      /> */}

      <Routes>
        <Route
          path="/signin"
          element={<Login />}
        ></Route>
        <Route
          path="/signup"
          element={<Register />}
        ></Route>
        <Route
          path="/movies"
          element={
            <>
              <FilmSearchForm width={windowWidth} />
              <MovieContainer moviesArray={moviesArray} />
            </>
          }
        ></Route>
        <Route
          path="/"
          element={<Main />}
        ></Route>
        <Route
          path="/movies"
          element={
            <>
              <FilmSearchForm width={windowWidth} />
              <MovieContainer moviesArray={moviesArray} />
            </>
          }
        ></Route>
        <Route
          path="/movies/saved"
          element={
            <>
              <FilmSearchForm width={windowWidth} />
              <MovieContainer moviesArray={moviesArray} />
            </>
          }
        ></Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
