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
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default RouteSwitch;
