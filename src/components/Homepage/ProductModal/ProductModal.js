import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./productmodal.css";
import CartContext from "../../../context/CartContext";
import { Link } from "react-router-dom";

const ProductModal = ({
  name,
  image,
  description,
  price,
  show,
  onHide,
  id,
  notify
}) => {
  const { addToCart } = useContext(CartContext);

  const chainedFunction = () => {
    addToCart(name, image, description, price, id); 
    notify();
  }

  return (
    <Modal
      {...{ name, image, description, price, show, onHide, id }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="card product-modal">
          <div className="product-modal__left">
            <img className="product-modal__img" src={image} alt={name} />
          </div>
          <div className="product-modal__right">
            <span className="product-modal__name">{name}</span>
            <p className="product-modal__description">{description}</p>
            <span className="product-modal__price">Prix: {price}€</span>
            <Button
              className="product-modal__btn"
              onClick={chainedFunction}
            >
              Ajouter au panier
            </Button>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer className="product-modal__footer">
        <button
          onClick={onHide}
          className="btn btn-secondary product-modal__back"
        >
          Continuer mes achats
        </button>
        <Link to="/checkout">
          <button className="btn btn-primary product-modal__checkout">
            Régler mes achats &gt;
          </button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
