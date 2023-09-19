import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import Logo from '../Logo/Logo';
import AcountButton from '../account/AccountButton';

export default function Header() {
  const loggedIn = false;
  return (
    <header className={`header ${loggedIn ? 'header_loggedIn' : ''}`}>
      <Logo place="header" />
      <NavLink
        className={({ isActive }) =>
          `header__link ${isActive ? 'header__link_active' : ''} ${
            loggedIn ? 'header__link_visible' : ''
          }`
        }
      >
        Фильмы
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `header__link ${isActive ? 'header__link_active' : ''} ${
            loggedIn ? 'header__link_visible' : ''
          }`
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
      {loggedIn ? <AcountButton></AcountButton> : ''}
    </header>
  );
}
