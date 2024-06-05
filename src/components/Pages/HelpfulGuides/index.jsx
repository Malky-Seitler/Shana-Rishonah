import React from "react";
import { Guides } from "./guides";
import { Container } from "reactstrap";
import { ContentWrap } from "../Trips/StyledComponents";
import AdCard from "../../AdCard";
import { GuideCardContainer } from "./StyledComponents";
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
