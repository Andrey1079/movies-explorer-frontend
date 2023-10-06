import { useContext } from 'react';
import { Link } from 'react-router-dom';

import './AccountButton.css';
import accountLogo from '../../images/account_logo.svg';
import { CurrentUserContext } from '../../context/CurrentUserContext';

export default function AcountButton({ onClick }) {
  const userData = useContext(CurrentUserContext);
  const userEmail = userData.email;
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Link
      onClick={handleClick}
      to="/profile"
      className="account-button"
    >
      <img
        className="account-button__img "
        src={accountLogo}
        alt="логотип аккаунта"
      ></img>
      {userEmail}
    </Link>
  );
}
