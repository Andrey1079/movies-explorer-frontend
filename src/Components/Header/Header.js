import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import Logo from '../Logo/Logo';
import AcountButton from '../account/AccountButton';
import BugrerButton from '../BurgerButton/BurgerButton';

export default function Header({ width, place }) {
  const loggedIn = true;
  return (
    <header
      className={`header ${
        loggedIn ? 'header_loggedIn' : ''
      } header_place_${place}`}
    >
      <Logo place="header" />
      <NavLink
        className={({ isActive }) =>
          `header__link header__nav-link ${
            isActive ? 'header__link_active' : ''
          } ${loggedIn ? 'header__link_visible' : ''}`
        }
      >
        Фильмы
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `header__link header__nav-link ${
            isActive ? 'header__link_active' : ''
          } ${loggedIn ? 'header__link_visible' : ''}`
        }
      >
        Сохраненные фильмы
      </NavLink>
      <Link
        className={`header__link header__link_position_right ${
          !loggedIn ? 'header__link_visible' : ''
        }`}
      >
        Регистрация
      </Link>
      <Link
        className={`header__link header__link_type_enter header__link_position_right ${
          !loggedIn ? 'header__link_visible' : ''
        }`}
      >
        Войти
      </Link>
      {loggedIn && width > 768 ? <AcountButton></AcountButton> : ''}
      {loggedIn && width < 768 ? (
        <BugrerButton place="header"></BugrerButton>
      ) : (
        ''
      )}
    </header>
  );
}
