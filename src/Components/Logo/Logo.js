import './Logo.css';
import { Link } from 'react-router-dom';

export default function Logo({ place }) {
  return (
    <Link
      to="/"
      className={`logo logo_place_${place}`}
    ></Link>
  );
}
