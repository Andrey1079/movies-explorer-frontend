import './CheckBox.css';

export default function ChecBox({
  text,
  place,
  checkboxSetter,
  checkboxState,
}) {
  const handleCheck = () => {
    checkboxSetter(!checkboxState);
  };
  return (
    <label
      className={`checkbox 
        ${place ? `${place}__checkbox` : ''}
        `}
      htmlFor="checkbox"
    >
      <input
        checked={checkboxState}
        onChange={handleCheck}
        id="checkbox"
        name="short-moivie"
        type="checkbox"
        className="checkbox__hidden-element"
      />
      <span className="checkbox__pseudo-checkbox">
        <span className="checkbox__circle-thumb-element"></span>
      </span>

      <span className="checkbox__text">{text}</span>
    </label>
  );
}
