import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0,
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotalQuantity = () => {
      let quantity = 0;
      cart.forEach((item) => {
        quantity += item.quantity;
      });
      return quantity;
    };

    const calculateTotal = () => {
      let totalPrice = 0;
      cart.forEach((item) => {
        totalPrice += item.price * item.quantity;
      });
      return totalPrice;
    };

    const newTotalQuantity = calculateTotalQuantity();
    const newTotal = calculateTotal();
    setTotalQuantity(newTotalQuantity);
    setTotal(newTotal);
  }, [cart]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      toast.error("El producto ya fue agregado");
    }
  };


  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        addItem: addItem,
        removeItem: removeItem,
        clearCart: clearCart,
        totalQuantity: totalQuantity,
        total: total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};