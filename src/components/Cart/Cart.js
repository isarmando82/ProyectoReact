import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import CartItem from '../CartItem/CartItem'; 
import { Link } from "react-router-dom";


const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No hay items en el carrito</h1>
        <button><Link to="http://localhost:3000/" className="nn">Hacer compras</Link></button>
        <button><Link to="/" className="nn">Limpiar Carrito</Link></button>
      </div>
    );
  }

  return (
    <div>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} /> 
       
      ))} 
      <h3>Total: ${total}</h3>
      <button className="nn" onClick={() => clearCart()} >
        Limpiar Carrito
      </button>
      <button type="button">
  <Link to="/checkOut" className="">CheckOut</Link>
      </button>
      
    </div>
  );
};

export default Cart;
