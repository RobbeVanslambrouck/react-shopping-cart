import React, { useContext, useState } from "react";
import CartContext from "./CartContext";

const Cart = (props) => {
  const { cart, setCart } = useContext(CartContext);

  const handleClickCart = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <div>
      <button onClick={handleClickCart}>
        <p className="sr-only">cart</p>
        <p className="item-count">{Object.keys(cart).length}</p>
      </button>
    </div>
  );
};

export default Cart;
