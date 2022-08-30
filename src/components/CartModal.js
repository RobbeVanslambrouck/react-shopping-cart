import { useContext } from "react";
import CartContext from "./CartContext";
import "../styles/cartModal.css";
import CartItem from "./CartItem";

const CartModal = ({ setIsVisible = () => {} }) => {
  const { cart, setCart } = useContext(CartContext);

  const price = cart.reduce((prev, curr) => prev + curr.price * curr.amount, 0);
  const handleCheckout = () => {
    setIsVisible(false);
    // go to checkout
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  return (
    <div className="modal">
      <div className="cart-items">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <div className="total-price">
        <span>&#8364;</span> {Math.round(price * 100) / 100}
      </div>
      <div className="actions">
        <button onClick={handleCheckout}>checkout</button>
        <button onClick={handleCancel}>add more</button>
      </div>
    </div>
  );
};

export default CartModal;
