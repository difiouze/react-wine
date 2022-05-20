import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import './checkout.css'

const Checkout = () => {
  const { cart, removeItem, addToCart } = useContext(CartContext);

  return (
    <div className="checkout">
      <div className="checkout container">
        {cart.length > 0 ? cart.map((item, index) => (
          <div key={index}>
            <span>Nom article: {item.name} </span>
            <span>Price: {item.price * item.qty}</span>
            <>
        <div className="quantity-box">
          <div onClick={() => removeItem(item.id)} className="quantity-box-control quantity-box-decrement">
            <span>-</span>
          </div>
          <input className="quantity-box-input" placeholder={item.qty}></input>
          <div
            onClick={() => addToCart(item.name, item.image, item.description, item.price, item.id)}
            className="quantity-box-control quantity-box-increment"
          >
            <span>+</span>
          </div>
        </div>
      </>
          </div>
        )) : <span>Aucun article ajouté</span>}
      </div>
    </div>
  );
};

export default Checkout;
