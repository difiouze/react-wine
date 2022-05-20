import React, {useContext, useEffect, useState} from 'react';
import CartContext from '../../../context/CartContext'
import { Link } from "react-router-dom";
import './userpanel.css';


const Userpanel = () => {

  const { cart } = useContext(CartContext);
  const [quantity, setQuantity] = useState([0]);

useEffect(() => {
  let all = cart.map(e => e.qty);
  setQuantity(all.reduce((a,b) => a + b, 0))

}, [cart])

  return (
    <div className='userpanel'>
        <Link to='/'><img src='/img/user.png' alt='user'/></Link>
        <Link className='bag' to='/checkout'><img className="bag-icon" src="/img/bag.png" alt="bag"/><span className='bag-quantity'>{quantity}</span></Link>
    </div>
  )
}

export default Userpanel