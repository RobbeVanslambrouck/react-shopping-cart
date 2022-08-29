import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext, useState } from "react";
import Item from "../components/Item";
import shopItems from "../shopItems";
import CartContext from "../components/CartContext";
import "../styles/shop.css";

function Shop() {
  const [items, setItems] = useState(shopItems);
  const { cart, setCart } = useContext(CartContext);
  const addItemToCart = (item, amount) => {
    let newCart = [...cart];
    let itemIndex = newCart.findIndex((e) => e.id === item.id);
    if (itemIndex !== -1) {
      newCart[itemIndex].amount += parseInt(amount);
    } else {
      let newItem = item;
      newItem.amount = parseInt(amount);
      newCart.push(newItem);
    }
    setCart(newCart);
  };
  return (
    <div className="shop">
      <Header />
      <main>
        <ul className="shop-items">
          {items.map((item) => (
            <li key={item.id}>
              <Item item={item} onAddToCard={addItemToCart} />
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default Shop;
