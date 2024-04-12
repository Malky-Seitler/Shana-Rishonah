import React, { useState, createContext, useContext, useEffect } from "react";
import { Activities, Categories } from "./components/Trips";
import Header from "../src/components/Header.png";

const ActivityContext = createContext();

const ActivityContextComponent = ({ children }) => {
  const getImage = async (activity) => {
    try {
      const img = await import(
        `./pictures/${activity.name.replace(/\s/g, "").toLowerCase()}.jpg`
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
  const getListToUse = (type) => {
    const returnList = [];
    if (type) {
      const category = Categories.find((c) => c.name === type);
      if (category) {
        returnList = Activities.filter((a) => a.categoryId === category.id);
      }
    } else {
      returnList = Activities;
    }
    return returnList.map((r) => ({ ...r, image: getImage(r) }));
  };

  const getSearchedList = (searchValue) => {
    if (searchValue === "" || !searchValue) {
      return Activities;
    } else {
      return Activities?.filter((a) =>
        a.name.toLowerCase().includes(searchValue?.toLowerCase())
      );
    }
  };

  return (
    <ActivityContext.Provider
      value={{
        getListToUse,
        getSearchedList,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};

const useActivityContext = () => useContext(ActivityContext);

export { ActivityContextComponent, useActivityContext };
