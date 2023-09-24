import './SectionTemplate.css';

export default function SectionTemplate({ place, children }) {
  return (
    <div className={`section-template ${place}__section-template`}>
      {children}
    </div>
  );
}
