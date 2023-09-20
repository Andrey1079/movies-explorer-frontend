import './TechLogo.css';

export default function TechLogo({ place, text }) {
  return <p className={`tech-logo tech-logo__${place}`}>{text}</p>;
}
