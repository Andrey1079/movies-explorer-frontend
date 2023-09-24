import './FilmSearchForm.css';
import Thumb from './Thumb/Thumb';
import SearchForm from './SearchForm/SearchForm';
import SectionTemplate from '../SectionTemplate/SectionTemplate';

export default function FilmSearchForm({ width }) {
  if (width <= '760') {
    return (
      <section className="search-film-section">
        <SectionTemplate place="search-film-section">
          <SearchForm place="search-film-section" />

          <Thumb
            text="Короткометражки"
            place="search-film-section"
          />
          <hr className="search-film-section__line"></hr>
        </SectionTemplate>
      </section>
    );
  } else {
    return (
      <section className="search-film-section">
        <SectionTemplate place="search-film-section">
          <SearchForm place="search-film-section">
            <Thumb
              text="Короткометражки"
              place="search-film-section"
            />
          </SearchForm>
          <hr className="search-film-section__line"></hr>
        </SectionTemplate>
      </section>
    );
  }
}
