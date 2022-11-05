import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.module.css";
import { CartProvider } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);