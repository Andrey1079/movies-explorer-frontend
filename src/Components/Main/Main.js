import './Main.css';
import Header from '../Header/Header';
import Promo from './Promo/Promo';
export default function Main({ width }) {
  return (
    <main className="main">
      <Header
        place="main"
        width={width}
      />
      <Promo />
    </main>
  );
}
