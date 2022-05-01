import React from "react";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { fetchProducts } from '../services/storefront'
import Product from "./Product";

const Products = () => {
  const [productsList, setProductsList] = useState([]);

  let category = "electronics";

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts(category);
      setProductsList(products);
    };
    getProducts();
  });

  return (
    <div className="card-container">
      {productsList.length > 0 ? (
        productsList.map((product, key) => (
          <Product
            key={product.id}
            name={product.title}
            image={product.image}
            description={product.description}
            price={product.price}
          />
        ))
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

export default Products;
