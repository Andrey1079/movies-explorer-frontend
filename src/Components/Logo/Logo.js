import './Logo.css';
import logo from '../../images/logo.svg';

export default function Logo({ place }) {
  return (
    <img
      src={logo}
      className={`logo ${place}__logo`}
      alt="логотип"
    ></img>
  );
}
