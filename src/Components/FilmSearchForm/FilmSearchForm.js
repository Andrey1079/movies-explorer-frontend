import './FilmSearchForm.css';
import Thumb from './Thumb/Thumb';
import SearchForm from './SearchForm/SearchForm';

export default function FilmSearchForm({
  width,
  place,
  onChange,
  value,
  checkboxSetter,
  checkboxState,
  submit,
}) {
  if (width <= '760') {
    return (
      <div className={`search-film-form ${place}__search-film-form`}>
        <SearchForm
          place="search-film-form"
          onChange={onChange}
          value={value}
          submit={submit}
        />

        <Thumb
          checkboxSetter={checkboxSetter}
          checkboxState={checkboxState}
          text="Короткометражки"
          place="search-film-form"
        />

        <hr className="search-film-form__line"></hr>
      </div>
    );
  } else {
    return (
      <div className="search-film-form">
        <SearchForm
          place="search-film-form"
          onChange={onChange}
          value={value}
          submit={submit}
        >
          <Thumb
            checkboxSetter={checkboxSetter}
            checkboxState={checkboxState}
            text="Короткометражки"
            place="search-film-form"
          />
        </SearchForm>

        <hr className="search-film-form__line"></hr>
      </div>
    );
  }
}
