import Image2 from '../../assets/backend.png';
import Image3 from '../../assets/devops.png';
import Image1 from '../../assets/frontend.png';
import './skills.css';
const data = [
  {
    id: 1,
    image: Image1,
    title: 'Frontend Development',
    description:
      'Crafting responsive and intuitive user interfaces using React.js and Next.js. Expertise in modern JavaScript (ES6+), HTML5, and CSS3 to create seamless user experiences.',
  },
  {
    id: 2,
    image: Image2,

    title: 'Backend Development',
    description:
      'Building robust server-side applications with Node.js and Express.js. Implementing RESTful APIs, WebSockets, and integrating various third-party services for scalable solutions.',
  },
  {
    id: 3,
    image: Image3,

    title: 'Database & DevOps',
    description:
      'Managing both SQL (PostgreSQL) and NoSQL (MongoDB) databases. Expertise in ORM tools like Prisma, and DevOps practices including AWS services, CI/CD pipelines, docker and containerization.',
  },
];

function Skills() {
  return (
    <section className="services container section" id="skills">
      <h2 className="section__title">Skills</h2>
      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => (
          <div className="services__card" key={id}>
            <img src={image} alt="" srcSet="" className="services__img" />
            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
