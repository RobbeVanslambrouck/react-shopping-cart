import "./styles/reset.css";
import "./styles/app.css";
import React from "react";
import ReactDOM from "react-dom/client";
import RouteSwitch from "./RouteSwitch";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);
