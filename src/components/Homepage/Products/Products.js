import React from "react";
import { useState } from "react";
import WineBottles from "../../../data/wine-bottles";
import Product from "../Product/Product";
import "../Products/products.css";

const Products = () => {
  const [bottles] = useState(WineBottles);

  //console.log(bottles);

  return (
    <div className="products">
      <div className="products__inner container">
      {bottles.map((bottle) => (
          <Product 
            name={bottle.name} 
            description={bottle.description} 
            key={bottle.id} 
            price={bottle.price} 
            image={bottle.image}/>
      ))}
      </div>
    </div>
  );
};

export default Products; 
