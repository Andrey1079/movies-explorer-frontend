import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import './BurgerNavigationMenu.css';
import AccountButton from '../AccountButton/AccountButton';

export default function BurgerNavigationMenu({ isOpen, setIsOpen }) {
  const burgerNavMenu = useRef();
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div
      ref={burgerNavMenu}
      className={`burger-navigation-page ${
        isOpen ? 'burger-navigation-page_visible' : ''
      }`}
    >
      <nav className="burger-navigation-page__menu">
        <button
          type="button"
          onClick={handleClose}
          className="burger-navigation-page__button"
        ></button>
        <ul className="burger-navigation-page__lilnk-list">
          <li className="burger-navigation-page__list-item">
            <NavLink
              onClick={handleClose}
              to="/"
              className={({ isActive }) =>
                `burger-navigation-page__link ${
                  isActive ? 'burger-navigation-page__link_active' : ''
                }`
              }
            >
              Главная
            </NavLink>
          </li>
          <li className="burger-navigation-page__list-item">
            <NavLink
              onClick={handleClose}
              to="/movies"
              className={({ isActive }) =>
                `burger-navigation-page__link ${
                  isActive ? 'burger-navigation-page__link_active' : ''
                }`
              }
            >
              Фильмы
            </NavLink>
          </li>
          <li className="burger-navigation-page__list-item">
            <NavLink
              onClick={handleClose}
              to="/saved-movies"
              className={({ isActive }) =>
                `burger-navigation-page__link ${
                  isActive ? 'burger-navigation-page__link_active' : ''
                }`
              }
            >
              Сохраненные фильмы
            </NavLink>
          </li>
        </ul>
        <AccountButton onClick={handleClose} />
      </nav>
    </div>
  );
}
