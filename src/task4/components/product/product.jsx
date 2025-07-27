import { Link } from "react-router-dom";
import "./product.css";

export default function Product({ myProduct }) {
  return (
    <Link to={`/products/${myProduct.title}/${myProduct.id}`} className="card">
      <img src={myProduct.image} alt="Product" />
      <h1>{myProduct.title}</h1>
      <span>{myProduct.price}</span>
    </Link>
  );
}
