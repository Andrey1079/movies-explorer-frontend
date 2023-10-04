import './Input.css';
export default function Input({
  type,
  minLength,
  maxLength,
  required,
  nameOfField,
  name,
  onChange,
  errors,
  readonly,
  values,
  value,
}) {
  const errorMessage = errors[name];
  return (
    <div className={`input`}>
      <label
        className="input__name"
        htmlFor={name}
      >
        {nameOfField}

        <input
          value={values?.[name] || ''}
          autoComplete={name}
          readOnly={readonly}
          onChange={onChange}
          name={name}
          id={name}
          minLength={minLength}
          maxLength={maxLength}
          required={required}
          type={type}
          className="input__field"
          placeholder={
            nameOfField === 'E-mail' ? 'example@mail.ru' : nameOfField
          }
        ></input>
      </label>
      <p className="input__error-message">{errorMessage ? errorMessage : ''}</p>
    </div>
  );
}
