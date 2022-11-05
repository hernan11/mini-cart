import { useState } from "react";

export const useCart = (initilValue = false) => {
  const [isOpen, setIsOpen] = useState(initilValue);

  const openCart = () => setIsOpen(true);

  const closeCart = () => setIsOpen(false);

  return [isOpen, openCart, closeCart];
};
