import './AuthForm.css';
import { Children, cloneElement } from 'react';
import { useValidate } from '../../customHooks/useValidate';

export default function AuthForm({
  children,
  text,
  url,
  linkText,
  place,
  submitText,
}) {
  const { handleChange, resetForm, errors, isValid } = useValidate();
  const handleSubmit = () => {
    resetForm();
  };
  return (
    <form className={`auth-form ${place}__auth-form `}>
      {Children.map(children, (child) => {
        return cloneElement(child, { onChange: handleChange, errors });
      })}
      <input
        disabled={isValid ? false : true}
        onClick={handleSubmit}
        type="submit"
        className="auth-form__submit"
        value={submitText}
      />
    </form>
  );
}
