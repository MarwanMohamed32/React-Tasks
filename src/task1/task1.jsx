import "./task1.css";
import { data } from "./data";

function Task1() {

  return (
    <div className="cards">
      {data.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.image} alt={card.title} />
          <h1>{card.title}</h1>
          <span>{card.category}</span>
          <span>{card.price}</span>
          <p>{card.description}</p>
          <span>{card.rating.rate}</span>
          <span>{card.rating.count}</span>
        </div>
      ))}
    </div>
  );
}

export default Task1;
