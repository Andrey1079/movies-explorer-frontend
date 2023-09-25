import './AuthForm.css';
import { Link } from 'react-router-dom';

export default function AuthForm({
  children,
  text,
  url,
  linkText,
  place,
  submitText,
}) {
  return (
    <form className={`auth-form ${place}__auth-form `}>
      {children}
      <input
        type="submit"
        className="auth-form__submit"
        value={submitText}
      />
      {/* <p className="form__text">
        {text}{' '}
        <Link
          path={url}
          className="form__link"
        >
          {linkText}
        </Link>
      </p> */}
    </form>
  );
}
