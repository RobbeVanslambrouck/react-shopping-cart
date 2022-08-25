import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import Item from "../components/Item";
import shopItems from "../shopItems";

function Shop() {
  const [items, setItems] = useState(shopItems);
  const addItemToCart = (item, amount) => {
    console.log(item.name, amount);
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
