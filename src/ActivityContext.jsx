import React, { useState, createContext, useContext, useEffect } from "react";
import { Activities, Categories } from "./components/Pages/Trips/Trips";
import Header from "./components/Pages/Trips/Header.png";

const ActivityContext = createContext();

const ActivityContextComponent = ({ children }) => {
  const getImage = async (activity) => {
    try {
      const img = await import(
        `./components/pictures/${activity.name
          .replace(/\s/g, "")
          .toLowerCase()}.jpg`
      );

      if (img) {
        return img.default;
      } else {
        return Header;
      }
    } catch (e) {
      return Header;
    }
  };
  const getSearchedList = async (searchValue) => {
    if (searchValue === "" || !searchValue) {
      return getListToUse();
    } else {
      const filtered = Activities?.filter((a) =>
        a.name.toLowerCase().includes(searchValue?.toLowerCase())
      );
      for (const trip of filtered) {
        trip.img = await getImage(trip);
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
      trip.img = await getImage(trip);
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
