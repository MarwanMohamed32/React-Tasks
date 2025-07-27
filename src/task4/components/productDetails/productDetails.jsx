import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './productDetails.css'

export default function ProductDetails() {
  const myParams = useParams();

  const [myProduct, setMyProduct] = useState({});

  async function getProduct() {
    const response = await fetch(
      `https://fakestoreapi.com/products/${myParams.id}`
    );
    const data = await response.json();

    setMyProduct(data);
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="layout">
      <div className="card">
        <img src={myProduct.image} alt="image" />
        <h2>{myProduct.title}</h2>
        <p>{myProduct.description}</p>
      </div>
    </div>
  );
}
