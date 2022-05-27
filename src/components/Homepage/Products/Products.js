import React, { useContext } from "react";
import Product from "../Product/Product";
import "../Products/products.css";
import CartContext from "../../../context/CartContext";

const Products = ( {notify} ) => {
const { bottles } = useContext(CartContext);

  return (
    <div className="products">
      <div className="products__inner container">
      {bottles.map((bottle, index) => (
          <Product bottle={bottle} key={index} notify={notify}
            />
      ))}
      </div>
    </div>
  );
};

export default Products; 
