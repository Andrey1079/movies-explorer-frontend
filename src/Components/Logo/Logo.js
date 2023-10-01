import './Logo.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

export default function Logo({ place }) {
  return (
    <Link
      to="/"
      className={`logo ${place}__logo`}
    ></Link>
  );
}
