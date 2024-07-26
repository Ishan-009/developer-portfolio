function AboutBox() {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-fire"></i>
        <div>
          <h3 className="about__title">198</h3>
          <span className="about__subtitle">Project Completed</span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon icon-cup"></i>
        <div>
          <h3 className="about__title ">5670</h3>
          <span className="about__subtitle">Cups of Coffees</span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon icon-people"></i>
        <div>
          <h3 className="about__title">400+</h3>
          <span className="about__subtitle">Satisfied Clients</span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon icon-badge"></i>
        <div>
          <h3 className="about__title ">5</h3>
          <span className="about__subtitle">Nominee Winners</span>
        </div>
      </div>
    </div>
  );
}

export default AboutBox;
