import React from "react";
import './about.css';

const About = () => {
  return (
    <div className="about">
      <div className="about__inner container">
        <div className="about__block-left">
          <img src="img/about.png" alt="about"/>
        </div>
        <div className="about__block-right">
        <div className="about__block-right-title">
          <h3>Qui sommes nous ?</h3>
        </div>
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
        </div>
      </div>
    </div>
  );
};

export default About;
