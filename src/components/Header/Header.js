import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./NavBar/NavBar";
import Logo from "./Logo/Logo";
import "./header.css"

const Header = () => {

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 56);
    });
  }, []); 


  return (
    <div className={`header ${scroll ? "sticky" : ""}`}>
      <div className="header__inner container">
        <Logo />
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
