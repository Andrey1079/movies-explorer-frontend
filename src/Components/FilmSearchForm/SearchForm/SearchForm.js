import Thumb from '../Thumb/Thumb';
import './SearchForm.css';

export default function SearchForm({
  place,
  children,
  onChange,
  value,
  submit,
}) {
  const handleChange = (evt) => {
    onChange(evt.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`search-form ${place ? `${place}__search-form` : ''}`}
    >
      <input
        // required
        onChange={handleChange}
        value={value || ''}
        minLength="1"
        id="search-input"
        type="text"
        className="search-form__input"
      ></input>
      <label
        className="search-form__label-for-search-input"
        htmlFor="search-input"
      ></label>
      <input
        className="search-form__submit"
        type="submit"
        value=""
      ></input>
      {children}
    </form>
  );
}
