import React, { useContext } from 'react'
import CartContext from '../context/CartContext';

const Checkout = () => {

  const { cart } = useContext(CartContext);

  return (
    <div className='checkout'>
      <div className='checkout container'>
      {cart.map(item => (
        <span>{item.name}</span>
      ))}
      </div>
    </div>
  )
}

export default Checkout;