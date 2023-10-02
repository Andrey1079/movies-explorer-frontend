import './FilmSearchForm.css';
import Thumb from './Thumb/Thumb';
import SearchForm from './SearchForm/SearchForm';

export default function FilmSearchForm({ width }) {
  if (width <= '760') {
    return (
      <div className="search-film">
        <SearchForm place="search-film" />

        <Thumb
          text="Короткометражки"
          place="search-film"
        />
        <hr className="search-film__line"></hr>
      </div>
    );
  } else {
    return (
      <div className="search-film">
        <SearchForm place="search-film">
          <Thumb
            text="Короткометражки"
            place="search-film"
          />
        </SearchForm>
        <hr className="search-film__line"></hr>
      </div>
    );
  }
}
