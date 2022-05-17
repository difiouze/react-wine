import React, {useContext} from 'react';
import CartContext from '../../../context/CartContext'
import { Link } from "react-router-dom"


const Userpanel = () => {

  const { cart } = useContext(CartContext);

  return (
    <div>
        <Link to='/'>Login</Link>
        <Link to='/checkout'>{cart.length}</Link>
    </div>
  )
}

export default Userpanel