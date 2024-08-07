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
              I'm Ishan Moorjmalani, a Full-Stack Software Engineer from India
              passionate about building innovative digital solutions. I
              specialize in transforming complex requirements into efficient,
              scalable applications.
            </p>
            <div className="resume-btn-div">
              <a href="" className="resume-btn btn">
                Download CV
              </a>
            </div>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills_titles">
                <div className="skills__name">Frontend Development</div>
                <span className="skills__number ">70%</span>
              </div>
              <div className="skills__bar ">
                <span className="skills__percentage frontend"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills_titles">
                <div className="skills__name">Backend Development</div>
                <span className="skills__number ">85%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage backend"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills_titles">
                <div className="skills__name">Devops and Cloud</div>
                <span className="skills__number ">70%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage devops-cloud"></span>
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
