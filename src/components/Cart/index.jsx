import React from "react";
import styles from "./index.module.css";

//Boxicons
import { BiXCircle } from "react-icons/bi";

// Components
import CartItem from "../CartItem";

const Cart = ({
  cart,
  addToCart,
  delFromCart,
  clearCart,
  isOpen,
  closeCart,
}) => {
  let total = 0;
  return (
    <div className={`${styles.cart} ${isOpen && styles.isOpen}`}>
      <button className={styles.close} onClick={closeCart}>
        <BiXCircle />
      </button>
      <div className={styles.header}>
        <h2 className={styles.title}>Carrito</h2>
        <button className={styles.button} onClick={clearCart}>
          Limpiar
        </button>
      </div>
      {cart.length === 0 ? (
        <p className={styles.text}>No Hay Productos</p>
      ) : (
        <div className={styles.content}>
          {cart.map((item, index) => (
            <CartItem
              key={index}
              data={item}
              addToCart={addToCart}
              delFromCart={delFromCart}
            />
          ))}

          {cart.forEach((el) => {
            total += el.price * el.quantity;
          })}
          <p className={styles.total}>Total = {`$ ${total}`}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
