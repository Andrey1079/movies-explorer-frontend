import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css';
import Logo from '../Logo/Logo';
import AcountButton from '../AccountButton/AccountButton';
import BugrerButton from '../BurgerButton/BurgerButton';

export default function Header({ props }) {
  const { width, loggedIn, burgerButtonOnClick, headerPages } = props;
  const location = useLocation().pathname;
  const headerVisible = headerPages.includes(location);

  return (
    <header
      className={`header ${loggedIn ? 'header_loggedIn' : ''} ${
        headerVisible ? 'header_visible' : ''
      }`}
    >
      <Logo place="header" />
      <NavLink
        to="/movies"
        className={({ isActive }) =>
          `header__link header__nav-link ${
            isActive ? 'header__link_active' : ''
          } ${loggedIn ? 'header__link_visible' : ''}`
        }
      >
        Фильмы
      </NavLink>
      <NavLink
        to="/saved-movies"
        className={({ isActive }) =>
          `header__link header__nav-link ${
            isActive ? 'header__link_active' : ''
          } ${loggedIn ? 'header__link_visible' : ''}`
        }
      >
        Сохраненные фильмы
      </NavLink>
      <Link
        to="/signup"
        className={`header__link header__link_position_right ${
          !loggedIn ? 'header__link_visible' : ''
        }`}
      >
        Регистрация
      </Link>
      <Link
        to="/signin"
        className={`header__link header__link_type_enter header__link_position_right ${
          !loggedIn ? 'header__link_visible' : ''
        }`}
      >
        Войти
      </Link>
      {loggedIn && width > 768 && <AcountButton />}
      {loggedIn && width <= 768 && (
        <BugrerButton
          onClick={burgerButtonOnClick}
          place="header"
        />
      )}
    </header>
  );
}
