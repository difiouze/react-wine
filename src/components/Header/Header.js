import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./NavBar/NavBar";
import Container from "react-bootstrap/Container";
import "../Header/header.css"

const Header = () => {

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 56);
    });
  }, []); 


  return (
    <div className={`header ${scroll ? "sticky" : ""}`}>
      <Container>
        <NavBar />
      </Container>
    </div>
  );
};

export default Header;
