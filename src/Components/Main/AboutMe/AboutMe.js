import SectionTitle from '../SectionTitle/SectionTitle';
import userPhoto from '../../../images/user_photo.jpg';
import { Link } from 'react-router-dom';
import './AboutMe.css';
import SectionTemplate from '../../SectionTemplate/SectionTemplate';

export default function AboutMe() {
  return (
    <section className="about-me">
      <SectionTemplate place="about-me">
        <SectionTitle
          text="Студент"
          place="about-me"
        />

        <div className="about-me__info-block">
          <p className="about-me__name">Виталий</p>
          <p className="about-me__profession"> Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__info">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link className="about-me__link">Github</Link>
        </div>
        <div className="about-me__photo-container">
          <img
            className="about-me__photo"
            src={userPhoto}
            alt="фотография студента"
          />
        </div>
      </SectionTemplate>
    </section>
  );
}
