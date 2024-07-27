import { useState } from 'react';
import Menu from './Menu';
import './portfolio.css';

function Portfolio() {
  const [items, setItems] = useState(Menu);
  const filterItem = (category) => {
    if (category == 'Everything') {
      setItems(Menu);
      return;
    }

    const updatedMenu = Menu.filter((currentElem) => {
      return currentElem.category === category;
    });
    setItems(updatedMenu);
  };
  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <div className="work__filters">
        <span className="work__item" onClick={() => filterItem('Everything')}>
          Everything
        </span>
        <span className="work__item" onClick={() => filterItem('Frontend')}>
          Frontend
        </span>
        <span className="work__item" onClick={() => filterItem('Backend')}>
          Backend
        </span>
        <span className="work__item" onClick={() => filterItem('Fullstack')}>
          Fullstack
        </span>
        <span className="work__item" onClick={() => filterItem('Creative')}>
          Creative
        </span>
        <span className="work__item" onClick={() => filterItem('Art')}>
          Art
        </span>
        <span className="work__item" onClick={() => filterItem('Design')}>
          Design
        </span>
        <span className="work__item" onClick={() => filterItem('Branding')}>
          Branding
        </span>
      </div>

      <div className="work__container grid">
        {items.length === 0 ? (
          <div className="no-items-message">No items found</div>
        ) : (
          items.map((elem) => {
            const { id, image, title, category } = elem;
            return (
              <div className="work__card" key={id}>
                <div className="work__thumbnail">
                  <img src={image} alt="" className="work__img" />
                  <div className="work__mask"></div>
                </div>
                <span className="work__category">{category}</span>
                <h3 className="work__title">{title}</h3>
                <a href="#" className="work__button">
                  <i className="icon-link work__button-icon"></i>
                </a>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}

export default Portfolio;
