import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Logo = () => {
  return (
    <Navbar.Brand href="/">
      <img
        src="img/logo.png"
        width="40"
        height="40"
        alt="logo"
      />
    </Navbar.Brand>
  )
}

export default Logo