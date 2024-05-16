import React, { useState, createContext, useContext, useEffect } from "react";
import { Activities, Categories } from "./components/Trips";

const ActivityContext = createContext();

const ActivityContextComponent = ({ children }) => {
  const getSearchedList = (searchValue) => {
    if (searchValue === "" || !searchValue) {
      return Activities;
    } else {
      return Activities?.filter((a) =>
        a.name.toLowerCase().includes(searchValue?.toLowerCase())
      );
    }
  };

  const [showSearch, setShowSearch] = useState(false);

  return (
    <ActivityContext.Provider
      value={{
        getSearchedList,
        showSearch,
        setShowSearch,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};

const useActivityContext = () => useContext(ActivityContext);

export { ActivityContextComponent, useActivityContext };
