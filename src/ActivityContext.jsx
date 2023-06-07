import React, { useState, createContext, useContext, useEffect } from "react";
import { Activities, Categories } from "./components/Trips";
import { useParams } from "react-router-dom";

const ActivityContext = createContext();

const ActivityContextComponent = ({ children }) => {
  const [fullActivityList, setFullActivityList] = useState([]);

  const getListToUse = (type) => {
    let activitiesToUse = Activities;
    if (type) {
      const category = Categories.find((c) => c.name === type);
      if (category) {
        activitiesToUse = activitiesToUse.filter(
          (a) => a.categoryId === category.id
        );
        if (activitiesToUse?.length < 1) {
          activitiesToUse = Activities;
        }
      }
    }
    setFullActivityList(activitiesToUse);
  };

  const getSearchedList = (searchValue) => {
    if (searchValue === "" || !searchValue) {
      setFullActivityList(Activities);
    } else {
      setFullActivityList(
        Activities?.filter((a) =>
          a.name.toLowerCase().includes(searchValue?.toLowerCase())
        )
      );
    }
  };

  return (
    <ActivityContext.Provider
      value={{
        fullActivityList,
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
