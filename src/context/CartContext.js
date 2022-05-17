import { createContext, useState, useEffect } from "react";
import bottles from '../data/wine-bottles';

const CartContext = createContext();

export const CartProvider = ( {children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (name) => {
        setCart(prevState => [...prevState, {name}])
    } 

    useEffect(()=> {
        console.log(cart)
    }, [cart])

    return (
        <CartContext.Provider value={{bottles, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;