import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./productmodal.css";
import CartContext from "../../../context/CartContext";

const ProductModal = ({
  name,
  image,
  description,
  price,
  show,
  onHide,
  id,
}) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Modal
      {...{ name, image, description, price, show, onHide, id }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="card">
          <img src={image} alt={name} />
          <h3>{name}</h3>
          <span>{description}</span>
          <span>Price: {price}$</span>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={() => addToCart(name, image, description, price, id)}>
          Ajouter au panier
        </Button>
        <Button onClick={onHide}>Fermer</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
