import './NavTab.css';
import { HashLink } from 'react-router-hash-link';

export default function NavTab() {
  return (
    <nav className="navigation">
      <ul className="navigation__link-list">
        <li className=" navigation__list-item">
          <HashLink
            smooth
            to="#about-project"
            className="navigation__link"
          >
            О проекте
          </HashLink>
        </li>
        <li className=" navigation__list-item">
          <HashLink
            smooth
            to="#techs"
            className="navigation__link"
          >
            Технологии
          </HashLink>
        </li>
        <li className=" navigation__list-item">
          <HashLink
            smooth
            to="#about-student"
            className="navigation__link"
          >
            Студент
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}
