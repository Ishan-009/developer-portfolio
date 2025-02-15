import Card from './Card';
import Data from './Data';
import './resume.css';
function Resume() {
  return (
    <section className="resume container section" id="experience">
      <h2 className="section__title">Experience</h2>

      <div className="resume__container grid">
        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === 'education') {
              return (
                <Card
                  key={index}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
          })}
        </div>
        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === 'experience') {
              return (
                <Card
                  key={index}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}

export default Resume;
