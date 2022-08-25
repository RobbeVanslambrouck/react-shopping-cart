import { useState } from "react";

const Item = ({ item, onAddToCard }) => {
  const [amount, setAmount] = useState(1);
  const handleAddToCart = () => {
    onAddToCard && onAddToCard(item, amount);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="item">
      <p>{item.name}</p>
      <img alt={item.name} src={item.imgUrl} />
      <input
        type="number"
        name="amount"
        onChange={handleAmountChange}
        min={1}
        value={amount}
      />
      <button onClick={handleAddToCart}>add to cart</button>
    </div>
  );
};

export default Item;
