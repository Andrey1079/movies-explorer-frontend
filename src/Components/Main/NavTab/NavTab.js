import './NavTab.css';
import { HashLink } from 'react-router-hash-link';

export default function NavTab() {
  return (
    <nav className="navigation">
      <HashLink
        smooth
        to="#about-project"
        className="navigation__link"
      >
        О проекте
      </HashLink>
      <HashLink
        smooth
        to="#techs"
        className="navigation__link"
      >
        Технологии
      </HashLink>
      <HashLink
        smooth
        to="#about-student"
        className="navigation__link"
      >
        Студент
      </HashLink>
    </nav>
  );
}
