import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import AcountButton from '../AccountButton/AccountButton';
import BugrerButton from '../BurgerButton/BurgerButton';

export default function Header({ width, loggedIn, setIsLoggedIn }) {
  const location = useLocation().pathname;
  const handleLogIn = () => {
    if (loggedIn) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  };
  return (
    <header
      className={`header ${loggedIn ? 'header_loggedIn' : ''} ${
        location === '/' && 'header_place_main'
      }`}
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
        onClick={handleLogIn}
        className={`header__link header__link_type_enter header__link_position_right ${
          !loggedIn ? 'header__link_visible' : ''
        }`}
      >
        Войти
      </Link>
      {loggedIn && width > 768 && <AcountButton handleLogIn={handleLogIn} />}
      {loggedIn && width <= 768 && <BugrerButton place="header" />}
    </header>
  );
}
