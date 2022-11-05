import React from "react";
import styles from "./index.module.css";

const Product = ({ data, addToCart }) => {
  const { id, name, img, price } = data;
  const imgUrl = new URL(`../../assets/images/${img}`, import.meta.url).href;
  return (
    <article className={styles.product}>
      <h3 className={styles.title}>{name}</h3>
      <figure className={styles.figure}>
        <img src={imgUrl} alt={name} />
      </figure>
      <p>$ {price}</p>
      <button className={styles.button} onClick={() => addToCart(id)}>
        Agregar
      </button>
    </article>
  );
};

export default Product;
