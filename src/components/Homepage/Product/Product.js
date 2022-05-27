import React from "react";
import Button from 'react-bootstrap/Button'
import ProductModal from "../ProductModal/ProductModal";
import "./product.css";

const Product = ( {bottle, notify} ) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="card bottle">
      <img src={bottle.image} alt={bottle.name} />
      <span className="bottle__name">{bottle.name}</span>
      <p className="bottle__description">{bottle.description}</p>
      <span className="bottle__price">Prix: {bottle.price}€</span>
      <>
      <Button className="bottle__button" variant="primary" onClick={() => setModalShow(true)}>
        Voir le produit
      </Button>

      <ProductModal
        name={bottle.name}
        image={bottle.image}
        description={bottle.description}
        price={bottle.price}
        id={bottle.id}
        show={modalShow}
        onHide={() => setModalShow(false)}
        notify={notify}
      />
    </>
    </div>
  );
};

export default Product;
