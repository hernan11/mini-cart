import React, { useContext } from "react";
import styles from "./index.module.css";

// components
import Header from "../components/Header";
import Main from "../components/Main";

//Context
import CartContext from "../context/CartContext";

const App = () => {
  const { products, cart, addToCart, delFromCart, clearCart } =
    useContext(CartContext);
  return (
    <div className={styles["container"]}>
      <Header
        cart={cart}
        addToCart={addToCart}
        delFromCart={delFromCart}
        clearCart={clearCart}
      />
      <Main data={products} addToCart={addToCart} />
    </div>
  );
};

export default App;
