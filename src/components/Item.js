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
        <button onClick={handleAddToCart} className="to-cart">
          <svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M810.666667 298.666667h-128V256a170.666667 170.666667 0 0 0-341.333334 0v42.666667H213.333333a42.666667 42.666667 0 0 0-42.666666 42.666666v469.333334a128 128 0 0 0 128 128h426.666666a128 128 0 0 0 128-128V341.333333a42.666667 42.666667 0 0 0-42.666666-42.666666z m-384-42.666667a85.333333 85.333333 0 0 1 170.666666 0v42.666667h-170.666666z m341.333333 554.666667a42.666667 42.666667 0 0 1-42.666667 42.666666H298.666667a42.666667 42.666667 0 0 1-42.666667-42.666666V384h85.333333v42.666667a42.666667 42.666667 0 0 0 85.333334 0V384h170.666666v42.666667a42.666667 42.666667 0 0 0 85.333334 0V384h85.333333z" />
          </svg>
          <p className="sr-only">add to cart</p>
        </button>
      </div>
    </div>
  );
};

export default Item;
