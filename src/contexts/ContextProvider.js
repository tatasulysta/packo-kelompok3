import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const ContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false); //belong to Cart

  return (
    <CartContext.Provider value={{ isCartOpen, setIsCartOpen }}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

export default ContextProvider;
