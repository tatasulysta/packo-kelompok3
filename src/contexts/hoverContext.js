import { createContext } from 'react';
import React, { useState } from 'react';
const ThemeContext = createContext({
  hover: false,
  setHover: () => {}
});
export const ThemeContextProvider = ({ children }) => {
  const [hover, setHover] = useState(false);
  const handleChange = (set) => {
    setHover(set);
  };
  return (
    <hoverContext
      value={{
        hover: false,
        handleChange: handleChange
      }}>
      {children}
    </hoverContext>
  );
};

export default ThemeContext;
