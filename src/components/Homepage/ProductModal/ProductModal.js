import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import './productmodal.css';

const ProductModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {console.log("props", props)}
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="card">
          <img src={props.image} alt={props.name} />
          <h3>{props.name}</h3>
          <span>{props.description}</span>
          <span>Price: {props.price}$</span>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fermer</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
