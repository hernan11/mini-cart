import { createContext, useReducer } from "react";

const CartContext = createContext();

// Reducers
import { cartInitState, cartReducer } from "../reducers/cartReducer";
import { TYPES } from "../actions/cartAction";

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitState);

  const { products, cart } = state;

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const delFromCart = (id, all = false) => {
    if (all) dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    else dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  const data = { products, cart, addToCart, delFromCart, clearCart };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartProvider };
export default CartContext;
