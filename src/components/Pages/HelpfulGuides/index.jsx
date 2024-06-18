import React from "react";
import { Guides } from "./guides";
import GuideCard from "./GuideCard";
import ParentPage from "../../layout/ParentPage";

const HelpfulGuides = () => {
  const guides = Guides;

  return (
    <ParentPage>
      {guides.map((r) => (
        <GuideCard guide={r} />
      ))}
    </ParentPage>
  );
};
export default HelpfulGuides;
