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
  inputRef,
  readonly,
}) {
  const errorMessage = errors[name];

  return (
    <div className={`input`}>
      <label
        value={nameOfField}
        className="input__name"
        htmlFor={name}
      >
        {nameOfField}

        <input
          autoComplete="true"
          readOnly={readonly}
          ref={inputRef}
          onChange={onChange}
          name={name}
          id={name}
          minLength={minLength}
          maxLength={maxLength}
          required={required}
          type={type}
          className="input__field"
        ></input>
      </label>
      <p className="input__error-message">{errorMessage ? errorMessage : ''}</p>
    </div>
  );
}
