import './Footer.css';
import SectionTemplate from '../SectionTemplate/SectionTemplate';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="footer">
      <SectionTemplate place="footer">
        <h3 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h3>
        <p className="footer__created-data">&copy; 2023</p>
        <ul className="footer__links-list">
          <Link
            className="footer__link"
            target="blanc"
          >
            Яндекс.Практикум
          </Link>
          <Link
            className="footer__link"
            target="blanc"
          >
            Github
          </Link>
        </ul>
      </SectionTemplate>
    </footer>
  );
}
