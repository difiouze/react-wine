import React from "react";
import Button from 'react-bootstrap/Button'
import ProductModal from "../ProductModal/ProductModal";

const Product = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="card">
      <img src={props.bottle.image} alt={props.bottle.name} />
      <h3>{props.bottle.name}</h3>
      <span>{props.bottle.description}</span>
      <span>Price: {props.bottle.price}$</span>
      <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        En savoir plus
      </Button>

      <ProductModal
        name={props.bottle.name}
        image={props.bottle.image}
        description={props.bottle.description}
        price={props.bottle.price}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
    </div>
  );
};

export default Product;
