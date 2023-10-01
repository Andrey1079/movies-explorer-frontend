import './NotFound.css';

import LayoutWithoutHeaderFooter from '../Layouts/LayoutWithoutHeaderFooter/LayoutWithoutHeaderFooter';

export default function NotFound({ navigate }) {
  return (
    <LayoutWithoutHeaderFooter
      linkText="Назад"
      place="not-found-page"
      handleLink={() => {
        navigate(-1);
      }}
    >
      <div className="not-found-page__text-container">
        <h1 className="not-found-page__title">404</h1>
        <p className="not-found-page__description">Страница не найдена</p>
      </div>
    </LayoutWithoutHeaderFooter>
  );
}
