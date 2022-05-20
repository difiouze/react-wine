import React, {useContext, useEffect, useState} from 'react';
import CartContext from '../../../context/CartContext'
import { Link } from "react-router-dom"


const Userpanel = () => {

  const { cart } = useContext(CartContext);
  const [quantity, setQuantity] = useState([0]);

useEffect(() => {
  let all = cart.map(e => e.qty);
  setQuantity(all.reduce((a,b) => a + b, 0))

}, [cart])

  return (
    <div>
        <Link to='/'>Login</Link>
        <Link to='/checkout'>{quantity}</Link>
    </div>
  )
}

export default Userpanel