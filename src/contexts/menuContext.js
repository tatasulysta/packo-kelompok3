import { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

const MenuContextProvider = ({ children }) => {
  const [menuExpanded, setMenuExpanded] = useState({ imgUrl: '', price: 0, name: '' });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ menuExpanded, setMenuExpanded, isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  return useContext(MenuContext);
};

export default MenuContextProvider;
