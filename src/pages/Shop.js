import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext, useState } from "react";
import Item from "../components/Item";
import shopItems from "../shopItems";
import CartContext from "../components/CartContext";

function Shop() {
  const [items, setItems] = useState(shopItems);
  const { cart, setCart } = useContext(CartContext);
  const addItemToCart = (item, amount) => {
    let newCart = Object.assign({}, cart);
    if (newCart[item.id]) {
      newCart[item.id] += parseInt(amount);
    } else {
      newCart[item.id] = amount;
    }
    setCart(newCart);
  };
  return (
    <div className="shop">
      <Header />
      <main>
        <p>shop</p>
        <ul>
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
