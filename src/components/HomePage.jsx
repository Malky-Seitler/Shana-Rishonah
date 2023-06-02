import React from "react";
import ActivityCard from "./ActivityCard";
import { Activities } from "./Trips";

const HomePage = () => {
  return (
    <div>
      {Activities.map(a => {
        return <ActivityCard activity={a} />
      })}
    </div>
  );
};
export default HomePage;
