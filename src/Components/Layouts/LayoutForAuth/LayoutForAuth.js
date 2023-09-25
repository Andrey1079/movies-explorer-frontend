import Logo from '../../Logo/Logo';
import { Link } from 'react-router-dom';
import './LayoutForAuth.css';

export default function LayoutForAuth({
  children,
  title,
  text,
  linkText,
  path,
}) {
  return (
    <section className="layout-for-auth">
      <Logo place="layout-for-auth" />
      <h1 className="layout-for-auth__title">{title}</h1>
      {children}
      <p className="layout-for-auth__text">
        {text}
        <Link
          to={path}
          className="layout-for-auth__link"
        >
          {linkText}
        </Link>
      </p>
    </section>
  );
}
