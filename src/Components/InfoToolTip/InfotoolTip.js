import './InfotoolTip.css';
import okImage from '../../images/OK.svg';
import notOkImage from '../../images/notOk.svg';

export default function Infotooltip({ isToolTipOpen, handleButton, data }) {
  return (
    <div className={`tooltip ${isToolTipOpen ? 'tooltip__visible' : ''}`}>
      <div className="tooltip__card">
        <h3 className="tooltip__message">{data.message}</h3>
        <img
          className="tooltip__image"
          src={data.status === 'ok' ? okImage : notOkImage}
          alt="значек результата"
        />
        <button
          onClick={handleButton}
          type="button"
          className="tooltip__button"
        >
          Ok
        </button>
      </div>
    </div>
  );
}
