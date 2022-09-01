import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import Cart from "./Cart";
import CartModal from "./CartModal";

const Header = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const onClickCart = () => {
    setModalIsVisible(true);
  };

  return (
    <header>
      <h1 className="logo">
        <Link to="/react-shopping-cart/">some shop</Link>
      </h1>

      <nav>
        <ul>
          <li>
            <Link to="/react-shopping-cart/home">home</Link>
          </li>
          <li>
            <Link to="/react-shopping-cart/shop">shop</Link>
          </li>
          <li>
            <Cart onClick={onClickCart} />
          </li>
        </ul>
      </nav>
      {modalIsVisible && <CartModal setIsVisible={setModalIsVisible} />}
    </header>
  );
};

export default Header;
