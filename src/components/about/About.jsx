import Image from '../../assets/avatar-2.svg';
import './about.css';
import AboutBox from './AboutBox';
function About() {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me </h2>
      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Ishan Moorjmalani, Software Engineer from India. I am
              passionate about building software applications and custom
              solutions to the problems of the world.
            </p>
            <a href="" className="btn">
              Download CV
            </a>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills_titles">
                <div className="skills__name">Development</div>
                <span className="skills__number ">90%</span>
              </div>
              <div className="skills__bar ">
                <span className="skills__percentage development"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills_titles">
                <div className="skills__name">UI/UX Design</div>
                <span className="skills__number ">70%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage ui-ux"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills_titles">
                <div className="skills__name">Photography</div>
                <span className="skills__number ">60%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage photography"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
}

export default About;
