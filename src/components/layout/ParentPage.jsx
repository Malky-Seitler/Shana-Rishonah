import React from "react";
import { Container } from "reactstrap";
import { ContentWrap } from "./StyledComponents";
import AdCard from "../AdCard";

const ParentPage = ({ children }) => {
  return (
    <div>
      <Container>
        <div>
          <ContentWrap>
            {/* <AdCard /> */}
            {children}
          </ContentWrap>
        </div>
      </Container>
    </div>
  );
};
export default ParentPage;
