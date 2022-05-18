import React from "react";
import Button from 'react-bootstrap/Button'
import ProductModal from "../ProductModal/ProductModal";

const Product = ( {bottle} ) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="card">
      <img src={bottle.image} alt={bottle.name} />
      <h3>{bottle.name}</h3>
      <span>{bottle.description}</span>
      <span>Price: {bottle.price}$</span>
      <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
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
      />
    </>
    </div>
  );
};

export default Product;
