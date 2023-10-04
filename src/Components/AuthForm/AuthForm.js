import './AuthForm.css';
import { Children, cloneElement, useContext } from 'react';
import { useValidate } from '../../customHooks/useValidate';
import { AuthErrorContext } from '../../context/AuthErrorContext';
import authErrorMessages from '../../variables/authErrorMessages';

export default function AuthForm({
  formInputInitialValues,
  children,
  place,
  submitText,
  handleSubmit,
  noValidate,
  title,
}) {
  const authError = useContext(AuthErrorContext);
  let authErrorMessage;
  switch (authError) {
    case 400:
      authErrorMessage = authErrorMessages.badRequest;
      break;
    case 401:
      authErrorMessage = authErrorMessages.token;
      break;
    case 409:
      authErrorMessage = authErrorMessages.conflict;
      break;
    case 500:
      authErrorMessage = authErrorMessages.serever;
      break;
    default:
      authErrorMessage = '';
      break;
  }
  const { handleChange, resetForm, errors, isValid, values } = useValidate(
    formInputInitialValues
  );

  const submit = (evt) => {
    evt.preventDefault();
    handleSubmit(values, evt);
    resetForm(formInputInitialValues);
  };
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
      <p className="auth-form__error-message">{authErrorMessage}</p>
      <input
        disabled={noValidate ? false : isValid ? false : true}
        type="submit"
        className={`auth-form__submit auth-form__submit_place_${place}`}
        value={submitText}
      />
    </form>
  );
}
