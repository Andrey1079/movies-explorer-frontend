import './Portfolio.css';
import SectionTemplate from '../../SectionTemplate/SectionTemplate';
import { Link } from 'react-router-dom';
export default function Portfolio() {
  return (
    <section className="portfolio">
      <SectionTemplate place="portfolio">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__project-list">
          <li className="portfolio__project">
            <Link
              className="portfolio__link"
              to="https://andrey1079.github.io/how-to-learn/"
              target="blanc"
            >
              Статичный сайт
              <p className="portfolio__link-arrow">↗</p>
            </Link>
          </li>
          <li className="portfolio__project">
            <Link
              className="portfolio__link"
              to="https://github.com/Andrey1079/russian-travel"
              target="blanc"
            >
              Адаптивный сайт <p className="portfolio__link-arrow">↗</p>
            </Link>
          </li>
          <li className="portfolio__project">
            <Link
              className="portfolio__link"
              to="https://github.com/Andrey1079/react-mesto-auth"
              target="blanc"
            >
              Одностраничное приложение{' '}
              <p className="portfolio__link-arrow">↗</p>
            </Link>
          </li>
        </ul>
      </SectionTemplate>
    </section>
  );
}
