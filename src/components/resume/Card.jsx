function Card(props) {
  return (
    <div className="timeline__item">
      <i className={props.icon}></i>
      <span className="timeline__date">{props.year}</span>
      <h5 className="timeline__title">{props.title}</h5>
      <p className="timeline__text">{props.desc}</p>
    </div>
  );
}

export default Card;
