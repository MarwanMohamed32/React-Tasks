import { useEffect, useState } from "react";
import Product from "../product/product";
import "./productsScreen.css";

export default function ProductsScreen() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data)
    setProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="products-list">
      <h1>List Of Products!</h1>
      {products.map((product) => (
        <Product key={product.id} myProduct={product} />
      ))}
    </div>
  );
}
