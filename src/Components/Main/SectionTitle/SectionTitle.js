import './SectionTitle.css';

export default function SectionTitle({ place, text }) {
  return <h2 className={`title ${place}__title`}>{text}</h2>;
}
