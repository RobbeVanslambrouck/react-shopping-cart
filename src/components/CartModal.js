const CartModal = ({ setIsVisible = () => {}, items = [] }) => {
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
      <p>{items.length}</p>
    </div>
  );
};

export default CartModal;
