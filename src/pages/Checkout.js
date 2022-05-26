import React, { useContext, useState, useEffect } from "react";
import CartContext from "../context/CartContext";
import "./checkout.css";

const Checkout = () => {
  const { cart, removeItem, addToCart, clearCart } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState([0]);

  useEffect(() => {
    let totalItems = cart.map((e) => e.qty * e.price);
    setTotalPrice(totalItems.reduce((a, b) => a + b, 0));
  }, [cart]);

  return (
    <div className="checkout">
      <div className="checkout container">
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index}>
              <span>Nom article: {item.name} </span>
              <span>Price: {item.price * item.qty}</span>
              <>
                <div className="quantity-box">
                  <div
                    onClick={() => removeItem(item.id)}
                    className="quantity-box-control quantity-box-decrement"
                  >
                    <span>-</span>
                  </div>
                  <input
                    className="quantity-box-input"
                    placeholder={item.qty}
                  ></input>
                  <div
                    onClick={() =>
                      addToCart(
                        item.name,
                        item.image,
                        item.description,
                        item.price,
                        item.id
                      )
                    }
                    className="quantity-box-control quantity-box-increment"
                  >
                    <span>+</span>
                  </div>
                </div>
              </>
            </div>
          ))
        ) : (
          <span>Aucun article ajouté</span>
        )}
      </div>
      <div className="total-price container">
        <span>Prix total: {totalPrice}</span>
        <button onClick={clearCart}>Vider le panier</button>
      </div>
    </div>
  );
};

export default Checkout;
