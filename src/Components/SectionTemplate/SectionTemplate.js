import './SectionTemplate.css';

export default function SectionTemplate({ place, children }) {
  return (
    <section className={`section-template ${place}__section-template`}>
      {children}
    </section>
  );
}
