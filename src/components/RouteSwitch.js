import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/home" element={<App />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
