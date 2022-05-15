import React from "react";
import "./contact.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__inner container">
        <div className="contact__block-left">
        <span className="contact__heading">S'inscrire à notre newsletter</span>
          <div className="contact__newsletter">
              <Form.Control
                id="TextInput"
                placeholder="votre adresse mail..."
              />
            <Button type="submit">S'inscrire</Button>
          </div>
        </div>
        <div className="contact__block-right"></div>
      </div>
    </div>
  );
};

export default Contact;
