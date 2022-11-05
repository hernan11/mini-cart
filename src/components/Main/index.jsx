import React from "react";

//Components
import Products from "../Products";

const Main = ({ data, addToCart }) => {
  return (
    <main>
      <Products data={data} addToCart={addToCart} />
    </main>
  );
};

export default Main;
