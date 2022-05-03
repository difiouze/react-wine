import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img src="img/logo.png" width="40" height="40" alt="logo" />
    </Link>
  );
};

export default Logo;
