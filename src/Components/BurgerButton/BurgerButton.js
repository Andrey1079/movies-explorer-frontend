import './BurgerButton.css';

export default function BugrerButton({ place, onClick }) {
  const handleClick = () => {
    onClick(true);
  };
  return (
    <div
      onClick={handleClick}
      className={`burger-button ${place}__burger-button`}
    >
      <div className="burger-button-top"></div>
      <div className="burger-button-middle"></div>
      <div className="burger-button-bottom"></div>
    </div>
  );
}
