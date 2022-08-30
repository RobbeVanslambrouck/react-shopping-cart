import { useContext, useState, useEffect } from "react";
import CartContext from "./CartContext";

const CartItem = ({ item }) => {
  const [amount, setAmount] = useState(item.amount);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    let newCart = [...cart];
    let index = newCart.findIndex((e) => e.id === item.id);
    newCart[index].amount = amount;
    setCart(newCart);
  }, [amount]);

  const handleIncrement = (e) => {
    setAmount(amount + 1);
  };

  const handleDecrement = (e) => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const handleAmountChange = (e) => {
    setAmount(parseInt(e.target.value));
  };

  return (
    <div className="cart-item">
      <img alt={item.name} src={item.imgUrl} />
      <p className="item-name">{item.name}</p>
      <div className="cart-amount">
        <button onClick={handleDecrement}>-</button>
        <input
          type="number"
          name="amount"
          onChange={handleAmountChange}
          min={1}
          value={amount}
        />
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
