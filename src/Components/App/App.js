import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import useResize from '../../customHooks/useResize';
import FilmSearchForm from '../FilmSearchForm/FilmSearchForm';

function App() {
  const windowWidth = useResize(100);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="page root">
      <Header
        width={windowWidth}
        loggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <FilmSearchForm width={windowWidth} />
      {/* <Routes>
        <Route
          path="/"
          element={<Main />}
        ></Route>
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
