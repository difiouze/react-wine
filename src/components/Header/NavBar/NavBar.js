import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import './navbar.css'

const NavBar = () => {
  return (
    <>
      <Navbar>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
      </Navbar>
    </>
  );
};

export default NavBar;
