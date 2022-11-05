import React from "react";
import styles from "./index.module.css";

//Components
import Product from "../Product";

const Products = ({ data, addToCart }) => {
  return (
    <>
      <h2 className={styles.title}>Productos</h2>
      <section className={styles.products}>
        {data.map((product) => (
          <Product key={product.id} data={product} addToCart={addToCart} />
        ))}
      </section>
    </>
  );
};

export default Products;
