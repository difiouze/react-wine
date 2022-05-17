import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"
import './navbar.css'

const NavBar = () => {

  return (
    <>
      <Navbar>
          <Nav className="me-auto">
            <Link to="/pricing">Pricing</Link>
            <Link to="/about">About</Link>
          </Nav>
      </Navbar>
    </>
  );
};

export default NavBar;
