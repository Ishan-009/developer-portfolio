function AboutBox() {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon fa-regular fa-calendar"></i>
        <div className="about__info">
          <h3 className="about__title">1.5+</h3>
          <span className="about__subtitle">Years of experience</span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon fa-solid fa-rocket"></i>
        <div className="about__info">
          <h3 className="about__title">15+</h3>
          <span className="about__subtitle">Projects completed</span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon fa-solid fa-laptop-code"></i>
        <div>
          <h3 className="about__title">10+</h3>
          <span className="about__subtitle">Technologies mastered</span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon fa-solid fa-code-branch"></i>
        <div>
          <h3 className="about__title">500</h3>
          <span className="about__subtitle">Code commits</span>
        </div>
      </div>
    </div>
  );
}

export default AboutBox;
