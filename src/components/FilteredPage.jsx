import React, { useEffect, useState } from "react";
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
import { Categories, Activities } from "./Trips";
import Header from "./Header.png";
import { SearchWrapper } from "./layout/StyledComponents";
import { Input } from "semantic-ui-react";

const FilteredPage = () => {
  const getImage = async (activity) => {
    try {
      const img = await import(
        `./pictures/${activity.name.replace(/\s/g, "").toLowerCase()}.jpg`
      );

      if (img) {
        return img.default;
      } else {
        return Header;
      }
    } catch (e) {
      return Header;
    }
  };
  const getListToUse = async (type) => {
    let returnList = [];
    if (type) {
      const category = Categories.find((c) => c.name === type);
      if (category) {
        returnList = Activities.filter((a) => a.categoryId === category.id);
      }
    } else {
      returnList = Activities;
    }
    for (const trip of returnList) {
      trip.img = await getImage(trip);
    }
    return returnList;
  };

  const [filteredList, setFilteredList] = useState();
  const { type } = useParams();
  const { getSearchedList, showSearch } = useActivityContext();

  useEffect(() => {
    if (type) {
      getListToUse(type).then((data) => {
        setFilteredList(data);
      });
    }
  }, [type]);

  if (filteredList?.length === 0) {
    return;
  }

  return (
    <Container style={{ paddingRight: 24, paddingLeft: 24 }}>
      {showSearch && (
        <SearchWrapper
          onChange={async (e) => {
            const data = await getSearchedList(e.target.value);
            setFilteredList(data);
          }}
        >
          <Input icon="search" placeholder="Search..." />
        </SearchWrapper>
      )}
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
