import './Logo.css';
import logo from '../../images/logo.svg';

export default function Logo({ place }) {
  return (
    <img
      src={logo}
      className={`logo logo_place_${place}`}
      alt="логотип"
    ></img>
  );
}
