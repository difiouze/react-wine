import React from 'react';
import './quantitybox.css';

const QuantityBox = () => {
  return (
    <div className="quantity-box">
      <div className='quantity-box-control quantity-box-decrement'><span>-</span></div>
      <input className='quantity-box-input'  />
      <div  className='quantity-box-control quantity-box-increment'><span>+</span></div>
    </div>
  )
}

export default QuantityBox