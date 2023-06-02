import { Item } from "../Item";
import "./ItemList.css";

export const ItemList = ({ listaProductos }) => {
  if (!listaProductos || listaProductos.length === 0) {
    return <p>Productos no encontrado</p>;
  }

  return (
    <div className="item-list">
      {listaProductos.map((producto) => (
        <Item
          key={producto.id}
          id={producto.id}
          img={producto.img}
          stock={producto.stock}
          description={producto.description}
          price={producto.price}
          title={producto.title}
          categoryId={producto.category}
         
        />
      ))}
    </div>
  );
};
