import React, { useContext } from "react";
import CartContext from "../context/CartContext";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="checkout">
      <div className="checkout container">
        {cart.map((item) => (
          <>
            <span>Nom article: {item.name} </span>
            <span>Quantité: {item.qty} </span>
          </>
        ))}
      </div>
    </div>
  );
};

export default Checkout;
