import { createContext, useState, useEffect } from "react";
import bottles from "../data/wine-bottles";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (name, image, description, price, id) => {
    const exist = cart.find((x) => x.id === id);
    if (exist) {
      setCart(
        cart.map((x) => (x.id === id ? { ...exist, qty: exist.qty + 1 } : x))
      );
    } else {
      setCart((prevState) => [
        ...prevState,
        { name, image, description, price, id, qty: 1 },
      ]);
    }
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <CartContext.Provider value={{ bottles, addToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
