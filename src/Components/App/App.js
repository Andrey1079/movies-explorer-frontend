import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import useResize from '../../customHooks/useResize';

function App() {
  const windowWidth = useResize(100);
  return (
    <div className="page root">
      <Main width={windowWidth} />
    </div>
  );
}

export default App;
