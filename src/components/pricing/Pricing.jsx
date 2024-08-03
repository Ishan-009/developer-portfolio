import Image1 from '../../assets/price-1.svg';
import Image2 from '../../assets/price-2.svg';
import Image3 from '../../assets/price-3.svg';
import './pricing.css';
function Pricing() {
  return (
    <section className="pricing container section">
      <h2 className="section__title">Pricing Plans</h2>
      <div className="pricing__container grid">
        <div className="pricing__item">
          <img src={Image1} alt="" className="pricing__image" />
          <h3 className="pricing__plan">Basic</h3>
          <p className="pricing__title">
            A Simple Option but powerful to manage your business
          </p>
          <p className="pricing__support">Email Support</p>
          <h3 className="price">
            <em>$</em>9<span>month</span>
          </h3>
          <button className="btn">Get Started</button>
        </div>
        <div className="pricing__item best">
          <span className="badge">Recommended</span>
          <img src={Image2} alt="" className="pricing__image" />
          <h3 className="pricing__plan">Premium</h3>
          <p className="pricing__title">
            Ultimate Product including app integration and more features{' '}
          </p>
          <p className="pricing__support">Mon-Fri Support </p>
          <h3 className="price">
            <em>$</em>15<span>month</span>
          </h3>
          <button className="btn">Get Started</button>
        </div>
        <div className="pricing__item">
          <img src={Image3} alt="" className="pricing__image" />
          <h3 className="pricing__plan">Ultimate</h3>
          <p className="pricing__title">
            A wise option for large companies and individuals{' '}
          </p>
          <p className="pricing__support">24/7 Support</p>
          <h3 className="price">
            <em>$</em>29<span>month</span>
          </h3>
          <button className="btn">Get Started</button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
