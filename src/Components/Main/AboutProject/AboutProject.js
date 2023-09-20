import './AboutProject.css';
import SectionTittle from '../SectionTitle/SectionTitle';

export default function AboutProject() {
  return (
    <section className="about-project">
      <SectionTittle
        text="О проекте"
        place="about-project"
      />
      <ul className="about-project__fact-list">
        <li className="about-project__facts">
          <h6 className="about-project__fact-title">
            Дипломный проект включал 5 этапов
          </h6>
          <p className="about-project__fact-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="about-project__facts">
          <h6 className="about-project__fact-title">
            На выполнение диплома ушло 5 недель{' '}
          </h6>
          <p className="about-project__fact-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
        <li className="about-project__facts">
          <div className="about-project__diagram">
            <p className="about-project__duration about-project__duration_part_back-end">
              1 неделя
            </p>
            <p className="about-project__project-section about-project__project-section_part_back-end">
              Back-end
            </p>
          </div>
          <div className="about-project__diagram">
            <p className="about-project__duration about-project__duration_part_front-end">
              4 недели
            </p>
            <p className="about-project__project-section about-project__project-section_part_front-end">
              Front-end
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
