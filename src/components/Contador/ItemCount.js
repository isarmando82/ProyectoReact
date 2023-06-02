import "../Contador/ItemCount.css"
import React, { useState } from 'react';

function ItemCount({ stock, initial, onAdd }) {
    const [quantity, setQuantity] = useState(initial);
  
    const decrement = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
  
    const increment = () => {
      if (quantity < stock) {
        setQuantity(quantity + 1);
      }
    };
  
    return (
      <div className="m-4">
        <button className="m-4 p-2 col" onClick={decrement}>-</button>
        <span className="p-4">{quantity}</span>
        <button className="m-4 p-2 col" onClick={increment}>+</button>
        <button className="m-3 p-2 flex col"onClick={() => onAdd(quantity)} disabled={!stock}> AGREGAR AL CARRITO </button>
      </div>
    );
  }
  
  export default ItemCount;

