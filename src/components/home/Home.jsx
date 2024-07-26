import Me from '../../assets/avatar-1.svg';
import HeaderSocials from './HeaderSocials';
import './home.css';
import Scrolldown from './Scrolldown';
import Shapes from './Shapes';

function Home() {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Ishan Moorjmalani</h1>
        <span className="home__education">I am a Full Stack Developer</span>
        <HeaderSocials />
        <a href="#contact" className="btn">
          Hire Me
        </a>
        <Scrolldown></Scrolldown>
      </div>
      <Shapes></Shapes>
    </section>
  );
}

export default Home;
