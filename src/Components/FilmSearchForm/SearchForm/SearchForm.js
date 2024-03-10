import { useContext } from 'react';
import './SearchForm.css';
import searchImage from '../../../images/search-form__placeholder.svg';
import { SetToolTipOpenContext } from '../../../context/SetToolTipOpenContext';
import { ToolTipSettingsContext } from '../../../context/ToolTipSettingsContext';
import ERROR_MESSAGES from '../../../constants/ErrorsMessages';

export default function SearchForm({
  place,
  children,
  onChange,
  value,
  setRequest,
}) {
  const setIsToolTipOpen = useContext(SetToolTipOpenContext);
  const setToolTipSettings = useContext(ToolTipSettingsContext);

  const handleChange = (evt) => {
    onChange(evt.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (value === '') {
      setToolTipSettings({
        message: ERROR_MESSAGES.EMPTY_REQUEST,
        status: 'notOk',
      });
      setIsToolTipOpen(true);
    } else {
      setRequest(value);
    }
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
