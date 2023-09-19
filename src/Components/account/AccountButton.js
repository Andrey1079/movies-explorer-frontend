import './AccountButton.css';
import accountLogo from '../../images/account_logo.svg';

export default function AcountButton() {
  const userEmail = 'dunayev@yandex.ru';
  return (
    <button className="account-button">
      <img
        className="account-button__img "
        src={accountLogo}
        alt="логотип аккаунта"
      ></img>
      {userEmail}
    </button>
  );
}
