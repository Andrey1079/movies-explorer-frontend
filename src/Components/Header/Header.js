import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css';
import Logo from '../Logo/Logo';
import AcountButton from '../AccountButton/AccountButton';
import BugrerButton from '../BurgerButton/BurgerButton';
import SectionTemplate from '../SectionTemplate/SectionTemplate';

export default function Header({ props }) {
  const { width, loggedIn, burgerButtonOnClick, headerPages } = props;
  const location = useLocation().pathname;
  const headerVisible = headerPages.includes(location);

  return (
    <header
      className={`header  ${headerVisible ? 'header_visible' : ''} ${
        location === '/'
          ? 'header_place_main'
          : location === '/profile'
          ? 'header_place_profile'
          : ''
      }`}
    >
      <SectionTemplate place="header">
        <nav className="header__navigation-menu">
          <ul
            className={`header__link-list ${
              loggedIn ? 'header__link-list_loggedIn' : ''
            }`}
          >
            <li className="header__list-item header__list-item_visible ">
              <Logo place="header" />
            </li>
            <li
              className={`header__list-item ${
                loggedIn ? 'header__list-item_visible' : ''
              } `}
            >
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  `header__link header__nav-link ${
                    isActive ? 'header__link_active' : ''
                  } `
                }
              >
                Фильмы
              </NavLink>
            </li>
            <li
              className={`header__list-item ${
                loggedIn ? 'header__list-item_visible' : ''
              } `}
            >
              <NavLink
                to="/saved-movies"
                className={({ isActive }) =>
                  `header__link header__nav-link ${
                    isActive ? 'header__link_active' : ''
                  }`
                }
              >
                Сохраненные фильмы
              </NavLink>
            </li>
            <li
              className={`header__list-item header__list-item_position_right ${
                !loggedIn ? 'header__list-item_visible' : ''
              } `}
            >
              <Link
                to="/signup"
                className={`header__link  `}
              >
                Регистрация
              </Link>
            </li>
            <li
              className={`header__list-item ${
                !loggedIn ? 'header__list-item_visible' : ''
              } `}
            >
              <Link
                to="/signin"
                className={`header__link header__link_type_enter header__link_position_right }`}
              >
                Войти
              </Link>
            </li>
            <li
              className={`header__list-item ${
                loggedIn && width > 768 && 'header__list-item_visible'
              }`}
            >
              <AcountButton />
            </li>
          </ul>
        </nav>
        {loggedIn && width <= 768 && (
          <BugrerButton
            onClick={burgerButtonOnClick}
            place="header"
          />
        )}
      </SectionTemplate>
    </header>
  );
}
