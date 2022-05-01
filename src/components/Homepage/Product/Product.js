import React from "react";

const Product = ({ name, description, price, image  }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <span>{description}</span>
      <span>Price: {price}$</span>
      <button>Buy product</button>
    </div>
  );
};

export default Product;
