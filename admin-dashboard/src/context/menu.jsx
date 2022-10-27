import { createContext, useState, useEffect } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuClass = isCollapsed ? "collapsed" : "";

  return (
    <MenuContext.Provider value={[{ menuClass, isCollapsed }, toggleMenu]}>
      {children}
    </MenuContext.Provider>
  );
};
