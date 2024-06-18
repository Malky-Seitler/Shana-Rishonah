import React from "react";
import ParentPage from "../../../layout/ParentPage";
import { Tips } from "./TipsAndTricks";
import TipsCard from "./TipsCard";

const TipsAndTricks = () => {
  return (
    <ParentPage>
      {Tips.map((t) => (
        <TipsCard tip={t} />
      ))}
    </ParentPage>
  );
};
export default TipsAndTricks;
