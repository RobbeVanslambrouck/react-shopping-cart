import React, { useState } from "react";

const Cart = (props) => {
  const [items, setItems] = useState([]);

  const handleClickCart = () => {
    if (props.onClick) {
      props.onClick(items);
    }
  };

  return (
    <div>
      <button onClick={handleClickCart}>
        <p className="sr-only">cart</p>
        <p className="item-count">{items.length}</p>
      </button>
    </div>
  );
};

export default Cart;
