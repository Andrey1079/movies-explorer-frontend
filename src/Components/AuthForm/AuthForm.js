import './AuthForm.css';
import { Children, cloneElement, useContext, useEffect } from 'react';
import { useValidate } from '../../customHooks/useValidate';
import { ErrorContext } from '../../context/ErrorContext';

export default function AuthForm({
  formInputInitialValues,
  children,
  place,
  submitText,
  handleSubmit,
  noValidate,
  title,
}) {
  const authError = useContext(ErrorContext);
  const { handleChange, resetForm, errors, isValid, values } = useValidate(
    formInputInitialValues
  );
  const submit = (evt) => {
    evt.preventDefault();
    handleSubmit(values, evt, resetForm);
    resetForm(formInputInitialValues);
  };
  useEffect(() => {
    resetForm(formInputInitialValues);
  }, [formInputInitialValues, resetForm]);
  return (
    <form
      noValidate={noValidate}
      onSubmit={submit}
      className={`auth-form ${place}__auth-form `}
    >
      <h1 className="auth-form__title">{title}</h1>
      {Children.map(children, (child) => {
        return cloneElement(child, {
          onChange: handleChange,
          errors,
          values,
        });
      })}
      <p className="auth-form__error-message">{authError}</p>
      <input
        disabled={noValidate ? false : isValid ? false : true}
        type="submit"
        className={`auth-form__submit auth-form__submit_place_${place}`}
        value={submitText}
      />
    </form>
  );
}
