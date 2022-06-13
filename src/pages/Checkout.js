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
      <div className="checkout__inner container">
        <div className="checkout__item-container">
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div key={index} className="checkout__item">
                <div className="checkout__img">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="checkout__information">
                  <span className="checkout__title">{item.name} </span>
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
                  <span className="checkout__price">{item.price * item.qty} €</span>

                </div>


              </div>
            ))
          ) : (
            <span>Aucun article ajouté</span>
          )}</div>

        <>
          {cart.length > 0 ? <div className="checkout__total">
            <span className="checkout__total-header">Prix total:</span>
            <span className="checkout__total-price">{totalPrice} €</span>
            <button onClick={clearCart}>Vider le panier</button>
            {totalPrice < 150 ?
              <span>Plus que {150 - totalPrice} euros pour bénéficier de la livraison gratuite</span>
              : <span>Vous bénéficiez de la livraison gratuite</span>}

          </div>
            : null
          }
        </>
      </div>



    </div>
  );
};

export default Checkout;
