import React from "react";
import NavBar from "./NavBar/NavBar";
import Container from "react-bootstrap/Container";
import "../Header/header.css"

const Header = () => {
  return (
    <div className="header">
      <Container>
        <NavBar />
      </Container>
    </div>
  );
};

export default Header;
