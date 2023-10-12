import './AuthForm.css';
import { Children, cloneElement, useContext, useEffect } from 'react';
import { useValidate } from '../../customHooks/useValidate';
import { ErrorContext } from '../../context/ErrorContext';
import { useState } from 'react';
import ErrorMessages from '../../constants/ErrorsMessages';

export default function AuthForm({
  formInputInitialValues,
  children,
  place,
  submitText,
  handleSubmit,
  noValidate,
  title,
  submitRef,
}) {
  const [errorMessage, setErrorMessage] = useState('');
  const error = useContext(ErrorContext);
  const [valid, setValid] = useState(true);
  console.log(ErrorMessages.E400);
  const { handleChange, resetForm, errors, isValid, values } = useValidate(
    formInputInitialValues
  );
  const submit = (evt) => {
    evt.preventDefault();
    handleSubmit(values, evt);
  };
  useEffect(() => {
    resetForm(formInputInitialValues);
  }, [formInputInitialValues, resetForm]);
  useEffect(() => {
    switch (error) {
      case 400:
        setErrorMessage(ErrorMessages.E400);

        break;
      case 401:
        setErrorMessage(ErrorMessages.E401);

        break;
      case 409:
        setErrorMessage(ErrorMessages.E409);

        break;
      case 500:
        setErrorMessage(
          `${
            place === 'register'
              ? ErrorMessages.E500Register
              : place === 'login'
              ? ErrorMessages.E500Login
              : ErrorMessages.E500Profile
          }`
        );

        break;
      default:
        setErrorMessage('');
        break;
    }
  }, [error, place]);
  useEffect(() => {
    if (
      place === 'profile' &&
      values.name === formInputInitialValues.name &&
      values.email === formInputInitialValues.email
    ) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [values, formInputInitialValues, place]);
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
      <p className="auth-form__error-message">{errorMessage}</p>
      <input
        ref={submitRef}
        disabled={noValidate ? false : !valid ? true : isValid ? false : true}
        type="submit"
        className={`auth-form__submit auth-form__submit_place_${place}`}
        value={submitText}
      />
    </form>
  );
}
