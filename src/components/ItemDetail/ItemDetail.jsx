import "./ItemDetail.css";
import ItemCount from "../Contador/ItemCount";
import Card from "react-bootstrap/Card";
import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const ItemDetail = ({ id, img, title, description, stock, price }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  
  const { addItem } = useContext(CartContext)
  
  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = {
       id, title, description, price
    };
    addItem(item, quantity);
  };

  return (
    <>
      <div className="item-det">
        <Card className="item2">
          <Card.Img variant="top" src={img} className="item__img" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>{price}</Card.Text>
            <Card.Text>Stock {stock}</Card.Text>
            { 
              quantityAdded > 0 ? (
                <button><Link to="/cart" className="b">Terminar compra</Link></button>
              ) : (
                <ItemCount className="cont" stock={stock} initial={1} onAdd={handleOnAdd} />
              )
            }
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ItemDetail;
