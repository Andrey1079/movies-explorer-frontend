import './AuthForm.css';
import { Children, cloneElement, useState } from 'react';
import { useValidate } from '../../customHooks/useValidate';

export default function AuthForm({
  children,
  place,
  submitText,
  handleSubmit,
  noValidate,
  title,
  errorMessage,
}) {
  const { handleChange, resetForm, errors, isValid, values } = useValidate();
  const submit = (evt) => {
    evt.preventDefault();
    handleSubmit(values, evt);
    resetForm();
  };
  return (
    <form
      noValidate={noValidate}
      onSubmit={submit}
      className={`auth-form ${place}__auth-form `}
    >
      <h1 className="auth-form__title">{title}</h1>
      {Children.map(children, (child) => {
        return cloneElement(child, { onChange: handleChange, errors });
      })}
      <p className="auth-form__error-message">Тут будет сообщение об ошибке</p>
      <input
        disabled={noValidate ? false : isValid ? false : true}
        type="submit"
        className={`auth-form__submit auth-form__submit_place_${place}`}
        value={submitText}
      />
    </form>
  );
}
