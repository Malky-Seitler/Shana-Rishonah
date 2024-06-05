import React from "react";
import { Container } from "reactstrap";
import { ContentWrap } from "../../Trips/StyledComponents";
import AdCard from "../../../AdCard";
import { CookbooksList } from "./cookbooks";
import CookbookCard from "./CookbookCard";

const CookbooksPage = () => {
  const cookbooks = CookbooksList;
  return (
    <div>
      <Container>
        <div>
          <ContentWrap>
            <AdCard />
            {cookbooks.map((c) => (
              <CookbookCard cookbook={c} />
            ))}
          </ContentWrap>
        </div>
      </Container>
    </div>
  );
};
export default CookbooksPage;
