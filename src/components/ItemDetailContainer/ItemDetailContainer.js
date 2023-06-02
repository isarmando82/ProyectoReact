import "./ItemDetailContainer.css"; 
import mockProductos from "../../producto.json";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom'
const getProductById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          mockProductos.Productos.find(
            (producto) => producto.id === parseInt(productId)
          )
        );
      }, 2500);
    });
  };

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const {itemId} = useParams()

    useEffect (() => {
        getProductById(itemId)
        .then(response => {
            setProduct(response) 
        })
        .catch(error => {
            console.error(error)
        })
    },[itemId]);

    return (
        <div className='ItemDetailContainer'>
            {product ? <ItemDetail {...product} /> : <p>Loading...</p>}
        </div>
    );
};

export default ItemDetailContainer;