import Image1 from '../../assets/blog-1.svg';
import './blogs.css';
import Image2 from '../../assets/blog-2.svg';
import Image3 from '../../assets/blog-3.svg';
function Blogs() {
  return (
    <section className="blog section container" id="blog">
      <h2 className="section__title">Latest Blogs</h2>
      <div className="grid blog__container">
        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#">
              <span className="blog__category">Business</span>
            </a>
            <a href="#">
              <img className="blog__img" src={Image2} />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">
              5 things to know when starting business
            </h3>
            <div className="blog__meta">
              <span>10 June 2024</span>
              <span className="blog__dot">.</span>
              <span>Ishan</span>
            </div>
          </div>
        </div>
        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#">
              <span className="blog__category">Hot Takes</span>
            </a>
            <a href="#">
              <img className="blog__img" src={Image3} />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">
              Misconcepts about AI and how to overcome software Developers
            </h3>
            <div className="blog__meta">
              <span>10 July 2024</span>
              <span className="blog__dot">.</span>
              <span>Ishan</span>
            </div>
          </div>
        </div>
        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#">
              <span className="blog__category">Tech Reviews</span>
            </a>
            <a href="#">
              <img className="blog__img" src={Image1} />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">
              Best App Development Tools for your Projects.{' '}
            </h3>
            <div className="blog__meta">
              <span>9 feburary 2024</span>
              <span className="blog__dot">.</span>
              <span>Ishan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
