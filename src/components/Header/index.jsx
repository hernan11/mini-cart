import React from "react";
import styles from "./index.module.css";

//Boxicons
import { BiCart } from "react-icons/bi";

//Components
import Cart from "../Cart";

// Custom Hooks
import { useCart } from "../../hooks/useCart";

const Header = ({ cart, addToCart, delFromCart, clearCart }) => {
  const [isOpen, openCart, closeCart] = useCart(false);
  return (
    <header className={styles.header}>
      <span className={styles.logo}>MiniCart</span>
      <button className={styles.button} onClick={openCart}>
        <BiCart />
        <span className={styles.badge}>{cart.length}</span>
      </button>
      <Cart
        cart={cart}
        addToCart={addToCart}
        delFromCart={delFromCart}
        clearCart={clearCart}
        isOpen={isOpen}
        closeCart={closeCart}
      />
    </header>
  );
};

export default Header;
