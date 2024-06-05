import React, { useState, createContext, useContext, useEffect } from "react";
import { Activities, Categories } from "./Trips";
import { cleanNameForPicture, getImage } from "../../../utils/helpers";

const ActivityContext = createContext();

const ActivityContextComponent = ({ children }) => {
  const getSearchedList = async (searchValue) => {
    if (searchValue === "" || !searchValue) {
      return getListToUse();
    } else {
      const filtered = Activities?.filter((a) =>
        a.name.toLowerCase().includes(searchValue?.toLowerCase())
      );
      for (const trip of filtered) {
        trip.img = await getImage(`${cleanNameForPicture(trip.name)}`);
      }
      return filtered;
    }
  };

  const getListToUse = async (type) => {
    let returnList = [];
    if (type) {
      const category = Categories.find((c) => c.name === type);
      if (category) {
        returnList = Activities.filter((a) => a.categoryId === category.id);
      }
    } else {
      returnList = Activities;
    }
    for (const trip of returnList) {
      trip.img = await getImage(`${cleanNameForPicture(trip.name)}`);
    }
    return returnList;
  };

  const [showSearch, setShowSearch] = useState(false);
  const [filteredList, setFilteredList] = useState([]);

  return (
    <ActivityContext.Provider
      value={{
        getSearchedList,
        showSearch,
        setShowSearch,
        filteredList,
        setFilteredList,
        getListToUse,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};

const useActivityContext = () => useContext(ActivityContext);

export { ActivityContextComponent, useActivityContext };
