import React, { useEffect } from "react";
import ActivityCard from "./ActivityCard";
import {
  ActionButton,
  ContentWrap,
  FeedbackButton,
  PageNumber,
  PagesWrap,
} from "./StyledComponents";
import { useParams } from "react-router-dom";
import { useActivityContext } from "../ActivityContext";
import { Container } from "reactstrap";

const FilteredPage = () => {
  const { getListToUse } = useActivityContext();
  const { type } = useParams();
  getListToUse(type);
  useEffect(() => {}, [type]);

  if (filteredList?.length === 0) {
    return;
  }

  return (
    <Container style={{ paddingRight: 24, paddingLeft: 24 }}>
      <div>
        <ContentWrap>
          {filteredList.map((a) => {
            return <ActivityCard activity={a} />;
          })}
        </ContentWrap>
      </div>
    </Container>
  );
};
export default FilteredPage;
