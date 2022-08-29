import { useState } from "react";

const Item = ({ item, onAddToCard }) => {
  const [amount, setAmount] = useState(1);
  const handleAddToCart = () => {
    onAddToCard && onAddToCard(item, amount);
  };

  const handleAmountChange = (e) => {
    setAmount(parseInt(e.target.value));
  };

  return (
    <div className="shop-item">
      <img alt={item.name} src={item.imgUrl} />
      <p className="item-name">{item.name}</p>
      <div className="item-price">
        <span>&#8364;</span>
        {item.price}
      </div>
      <div className="item-cart">
        <input
          type="number"
          name="amount"
          onChange={handleAmountChange}
          min={1}
          value={amount}
        />
        <button onClick={handleAddToCart}>add to cart</button>
      </div>
    </div>
  );
};

export default Item;
