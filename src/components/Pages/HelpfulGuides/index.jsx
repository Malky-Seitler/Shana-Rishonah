import React from "react";
import { Guides } from "./guides";
import { Container } from "reactstrap";
import { ContentWrap } from "../Trips/StyledComponents";
import AdCard from "../../AdCard";
import { GuideCardContainer } from "./StyledComponents";
import GuideCard from "./GuideCard";

const HelpfulGuides = () => {
  return (
    <div>
      <Container>
        <div>
          <ContentWrap>
            <AdCard />
            {Guides.map((r) => (
              <GuideCard guide={r} />
            ))}
          </ContentWrap>
        </div>
      </Container>
    </div>
  );
};
export default HelpfulGuides;
