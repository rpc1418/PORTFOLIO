import React, { createContext, useState } from "react";

// This context will manage the visibility of the pop-up across components
const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <PopupContext.Provider value={{ isPopupVisible, setIsPopupVisible }}>
      {children}
    </PopupContext.Provider>
  );
};

export default PopupContext;
