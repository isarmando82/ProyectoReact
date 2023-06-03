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
        <h1 className="cent">No hay items en el carrito</h1>
        <div className="b">
        <button className="rounded-button"><Link to="http://localhost:3000/" className="nn">Hacer compras</Link></button>
        <button className="rounded-button"><Link to="/" className="nn">Limpiar Carrito</Link></button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} /> 
       
      ))} 
      <h3 className="m">Total: ${total}</h3>
      <div className="b">
      <button className="nn rounded-button" onClick={() => clearCart()} >
        Limpiar Carrito
      </button>
      <button type="button" className="rounded-button">
  <Link to="/checkOut" className="nn">CheckOut</Link>
      </button>
      </div>
    </div>
  );
};

export default Cart;
