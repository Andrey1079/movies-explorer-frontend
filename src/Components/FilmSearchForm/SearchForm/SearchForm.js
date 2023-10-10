import Thumb from '../Thumb/Thumb';
import './SearchForm.css';
import searchImage from '../../../images/search-form__placeholder.svg';

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
      <img
        src={searchImage}
        className="search-form__image"
        alt="иконка поиска"
      ></img>
      <input
        placeholder="Фильм"
        onChange={handleChange}
        value={value || ''}
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
