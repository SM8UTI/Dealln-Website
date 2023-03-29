import React from "react";

const AppContext = React.createContext();

const useGlobalContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ name: "lol" }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider, useGlobalContext };
