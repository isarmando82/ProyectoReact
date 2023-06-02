
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import mockProductos from "../../producto.json";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";

const getListItem = new Promise((res, rej) => {
  setTimeout(() => {
    res(mockProductos);
  }, 2000);
});

const ItemListContainer = () => {
  const [product, setProduct] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getListItem.then((res) => {
      if (categoryId) {
        const filteredProducts = res.Productos.filter(
          (product) => product.categoryId === categoryId
        );
        setProduct(filteredProducts);
      } else {
        setProduct(res.Productos);
      }
    });
  }, [categoryId]);

  return product.length > 0 ? (
    <ItemList listaProductos={product} />
  ) : (
    <Spinner variant="primary"/>
  );
};

export default ItemListContainer;