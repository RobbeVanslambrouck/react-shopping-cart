import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContext from "./components/CartContext";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

const RouteSwitch = () => {
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cart, setCart }}>
        <Routes>
          <Route path="react-shopping-cart/" exact element={<Home />}></Route>
          <Route
            path="react-shopping-cart/home"
            exact
            element={<Home />}
          ></Route>
          <Route
            path="react-shopping-cart/shop"
            exact
            element={<Shop />}
          ></Route>
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default RouteSwitch;
