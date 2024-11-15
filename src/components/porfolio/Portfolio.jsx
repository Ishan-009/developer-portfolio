import React, { useState } from 'react';
import Menu from './Menu';
import './portfolio.css';

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const [activeCategory, setActiveCategory] = useState('Everything');
  const [loading, setLoading] = useState(false);

  const filterItem = (category) => {
    setLoading(true);
    setActiveCategory(category);

    setTimeout(() => {
      if (category === 'Everything') {
        setItems(Menu);
      } else {
        const updatedMenu = Menu.filter(
          (currentElem) => currentElem.category === category
        );
        setItems(updatedMenu);
      }
      setLoading(false);
    }, 300);
  };

  const categories = ['Everything', 'Frontend', 'Backend', 'Fullstack'];

  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <div className="work__filters">
        {categories.map((category) => (
          <span
            key={category}
            className={`work__item ${
              activeCategory === category ? 'active' : ''
            }`}
            onClick={() => filterItem(category)}
          >
            {category}
          </span>
        ))}
      </div>

      <div className="work__container grid">
        {items.length > 0 ? (
          items.map(({ id, image, title, category, link }) => (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt={title} className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href={link} className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          ))
        ) : (
          <div className="work__not-found">
            <h3>No items found </h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
