import { useContext } from "react";
import CartContext from "./CartContext";

const CartModal = ({ setIsVisible = () => {} }) => {
  const { cart, setCart } = useContext(CartContext);

  const handleCheckout = () => {
    setIsVisible(false);
    // go to checkout
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  return (
    <div className="modal">
      <button onClick={handleCheckout}>checkout</button>
      <button onClick={handleCancel}>add more</button>
      <p>{Object.keys(cart).length}</p>
    </div>
  );
};

export default CartModal;
