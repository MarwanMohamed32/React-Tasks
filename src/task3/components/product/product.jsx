import "./product.css";

export default function Product({ myProduct }) {
  return (
    <div className="card">
      <img src={myProduct.image} alt="Product" />
      <h1>{myProduct.title}</h1>
      <span>{myProduct.price}</span>
    </div>
  );
}
