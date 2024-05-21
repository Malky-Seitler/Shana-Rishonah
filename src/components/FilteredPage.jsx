import React, { useEffect, useState } from "react";
import ActivityCard from "./ActivityCard";
import { ContentWrap } from "./StyledComponents";
import { useParams } from "react-router-dom";
import LightAd from "./ads/lightsad.png";
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
    <div>
      <div>
        <img src={LightAd} style={{ width: 350, position: "absolute" }} />
      </div>
      <Container style={{ paddingRight: 24, paddingLeft: 24 }}>
        <div>
          <ContentWrap>
            {filteredList?.map((a) => {
              return <ActivityCard activity={a} />;
            })}
          </ContentWrap>
        </div>
      </Container>
    </div>
  );
};
export default FilteredPage;
