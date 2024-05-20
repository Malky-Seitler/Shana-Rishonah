import React, { useEffect, useState } from "react";
import ActivityCard from "./ActivityCard";
import { ContentWrap } from "./StyledComponents";
import { useParams } from "react-router-dom";
import { useActivityContext } from "../ActivityContext";
import { Container } from "reactstrap";

const FilteredPage = () => {
  const { type } = useParams();
  const { getListToUse, showSearch, filteredList, setFilteredList } =
    useActivityContext();

  const getList = async () => {
    await getListToUse(type).then((data) => {
      setFilteredList(data);
    });
  };
  useEffect(() => {
    if (type) {
      getList();
    }
  }, [type]);

  if (filteredList?.length === 0) {
    return;
  }

  return (
    <Container style={{ paddingRight: 24, paddingLeft: 24 }}>
      <div>
        <ContentWrap>
          {filteredList?.map((a) => {
            return <ActivityCard activity={a} />;
          })}
        </ContentWrap>
      </div>
    </Container>
  );
};
export default FilteredPage;
