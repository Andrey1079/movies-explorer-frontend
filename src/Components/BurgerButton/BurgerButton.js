import './BurgerButton.css';

export default function BugrerButton({ place }) {
  return (
    <div className={`burger-button burger-button_place_${place}`}>
      <div className="burger-button-top"></div>
      <div className="burger-button-middle"></div>
      <div className="burger-button-bottom"></div>
    </div>
  );
}
