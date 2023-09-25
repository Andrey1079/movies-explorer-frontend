import './Input.css';
export default function Input({
  type,
  minLength,
  maxLength,
  required,
  nameOfField,
  name,
}) {
  const errorMessage = '';
  return (
    <div className={`input`}>
      <label
        value={nameOfField}
        className="input__name"
        htmlFor={name}
      >
        {nameOfField}
      </label>
      <input
        name={name}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        type={type}
        className="input__field"
      ></input>
      <p className="input__error-message">{errorMessage ? errorMessage : ''}</p>
    </div>
  );
}
