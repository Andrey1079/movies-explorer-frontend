import './Main.css';
import Header from '../Header/Header';
import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import SectionTemplate from '../SectionTemplate/SectionTemplate';

export default function Main({ width }) {
  return (
    <main className="main">
      <Header
        place="main"
        width={width}
      />
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <SectionTemplate place="about-me" />
    </main>
  );
}
