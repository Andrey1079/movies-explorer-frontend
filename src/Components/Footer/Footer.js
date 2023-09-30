import './Footer.css';
import { useLocation } from 'react-router-dom';
import SectionTemplate from '../SectionTemplate/SectionTemplate';
import { Link } from 'react-router-dom';
export default function Footer() {
  const location = useLocation().pathname;
  return (
    <footer
      className={`footer ${
        location === '/profile'
          ? 'footer_invisible'
          : location === '/signin'
          ? 'footer_invisible'
          : location === '/signup'
          ? 'footer_invisible'
          : ''
      }`}
    >
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
