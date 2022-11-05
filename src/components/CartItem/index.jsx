import React from "react";
import styles from "./index.module.css";

//Boxicons
import { BiPlus, BiMinus, BiTrash } from "react-icons/bi";

const CartItem = ({ data, addToCart, delFromCart }) => {
  const { id, name, img, price, quantity } = data;
  const imgUrl = new URL(`../../assets/images/${img}`, import.meta.url).href;
  return (
    <article className={styles.cartItem}>
      <h3 className={styles.title}>{name}</h3>
      <figure className={styles.figure}>
        <img src={imgUrl} alt={name} />
      </figure>
      <p>
        $ {price} x {quantity}
      </p>
      <div>
        <button className={styles.button} onClick={() => addToCart(id)}>
          <BiPlus />
        </button>
        <button className={styles.button} onClick={() => delFromCart(id)}>
          <BiMinus />
        </button>
        <button className={styles.button} onClick={() => delFromCart(id, true)}>
          <BiTrash />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
