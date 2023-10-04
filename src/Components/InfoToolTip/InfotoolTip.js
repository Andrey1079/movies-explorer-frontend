import './InfotoolTip.css';
import okImage from '../../images/OK.svg';

export default function Infotooltip({ isToolTipOpen, handleButton, message }) {
  const closeTooltip = () => {
    handleButton('/');
  };
  return (
    <div className={`tooltip ${isToolTipOpen ? 'tooltip__visible' : ''}`}>
      <div className="tooltip__card">
        <h3 className="tooltip__message">Изменения сохранены</h3>
        <img
          className="tooltip__image"
          src={okImage}
          alt="Зеленая галочка"
        />
        <button
          onClick={closeTooltip}
          type="button"
          className="tooltip__button"
        >
          Ok
        </button>
      </div>
    </div>
  );
}
