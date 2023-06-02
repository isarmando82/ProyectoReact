import "../CartWidget/CartWidget.css";
import cart from './assets/cart.svg';
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);
    return (
       <Link to="/cart" className="nn">
       
           
                <img src={cart} alt="cart-widget"/>
                {totalQuantity} 
           
      </Link> 
    );
}

export default CartWidget;