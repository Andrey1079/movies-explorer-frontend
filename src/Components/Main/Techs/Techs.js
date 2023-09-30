import './Techs.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import SectionTemplate from '../../SectionTemplate/SectionTemplate';

export default function Techs() {
  return (
    <section
      id="techs"
      className="techs"
    >
      <SectionTemplate place="techs">
        <SectionTitle
          text="Технологии"
          place="techs"
        />
        <h3 className="techs__quantity">7 технологий</h3>
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__list">
          <li className="techs__list-item">HTML</li>
          <li className="techs__list-item">CSS</li>
          <li className="techs__list-item">JS</li>
          <li className="techs__list-item">React</li>
          <li className="techs__list-item">Git</li>
          <li className="techs__list-item">Express.js</li>
          <li className="techs__list-item">mongoDB</li>
        </ul>
      </SectionTemplate>
    </section>
  );
}
