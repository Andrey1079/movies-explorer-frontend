import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import useResize from '../../customHooks/useResize';

function App() {
  const windowWidth = useResize(100);
  return (
    <div className="page root">
      <Header
        place="main"
        width={windowWidth}
      />
    </div>
  );
}

export default App;
