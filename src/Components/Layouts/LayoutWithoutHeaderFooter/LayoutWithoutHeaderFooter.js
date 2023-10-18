import { Link } from 'react-router-dom';
import './LayoutWithoutHeaderFooter.css';

export default function LayoutWithoutHeaderFooter({
  children,
  text,
  linkText,
  path,
  place,
  handleLink,
}) {
  const onClickLink = () => {
    if (handleLink) {
      handleLink();
    }
  };

  return (
    <section
      className={`layout-without-header-footer ${
        place ? `${place}__layout-without-header-footer` : ''
      }`}
    >
      {children}

      <p className="layout-without-header-footer__text">
        {text}
        <Link
          onClick={onClickLink}
          to={path}
          className="layout-without-header-footer__link"
        >
          {linkText}
        </Link>
      </p>
    </section>
  );
}
