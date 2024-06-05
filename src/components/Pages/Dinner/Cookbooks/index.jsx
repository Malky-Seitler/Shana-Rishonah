import React from "react";
import { Container } from "reactstrap";
import { ContentWrap } from "../../Trips/StyledComponents";
import AdCard from "../../../AdCard";
import { CookbooksList } from "./cookbooks";
import CookbookCard from "./CookbookCard";
import ParentPage from "../../../layout/ParentPage";

const CookbooksPage = () => {
  const cookbooks = CookbooksList;
  return (
    <ParentPage>
      {cookbooks.map((c) => (
        <CookbookCard cookbook={c} />
      ))}
    </ParentPage>
  );
};
export default CookbooksPage;
