import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

export default function BasicLayout({ children, ...props }) {
  return (
    <>
      <Header props={props} />
      {children}
      <Footer />
    </>
  );
}
