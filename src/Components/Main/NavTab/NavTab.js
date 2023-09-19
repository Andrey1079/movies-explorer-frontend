import './NavTab.css';
import { Link } from 'react-router-dom';

export default function NavTab() {
  return (
    <nav className="navigation">
      <Link
        href="#about-project"
        className="navigation__link"
      >
        О проекте
      </Link>
      <Link
        href="#stack"
        className="navigation__link"
      >
        Технологии
      </Link>
      <Link
        href="#about-student"
        className="navigation__link"
      >
        Студент
      </Link>
    </nav>
  );
}
