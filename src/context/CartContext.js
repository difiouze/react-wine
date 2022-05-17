import { createContext, useState, useEffect } from "react";
import bottles from '../data/wine-bottles';

const CartContext = createContext();

export const CartProvider = ( {children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (name, image, description, price) => {
        setCart(prevState => [...prevState, {name, image, description, price}])
    } 

    useEffect(()=> {
        console.log(cart)
    }, [cart])

    return (
        <CartContext.Provider value={{bottles, addToCart, cart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;