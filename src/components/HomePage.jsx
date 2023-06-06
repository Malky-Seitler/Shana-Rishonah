import React, { useEffect } from "react";
import ActivityCard from "./ActivityCard";
import { Activities, Categories } from "./Trips";
import {
  ActionButton,
  ContentWrap,
  PageNumber,
  PagesWrap,
} from "./StyledComponents";
import { useParams } from "react-router-dom";
import { useState } from "react";

const HomePage = () => {
  const { type } = useParams();
  const [fullActivityList, setFullActivityList] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const getListToUse = () => {
    let activitiesToUse = Activities;
    if (type) {
      const category = Categories.find((c) => c.name === type);
      if (category) {
        activitiesToUse = activitiesToUse.filter(
          (a) => a.categoryId === category.id
        );
        if (activitiesToUse?.length < 1) {
          activitiesToUse = Activities;
        }
      }
    }
    setFullActivityList(activitiesToUse);
  };
  useEffect(() => {
    getListToUse();
  }, []);

  return (
    <div>
      <ContentWrap>
        {fullActivityList
          .slice(
            pageNumber,
            pageNumber + 6 > fullActivityList.length
              ? fullActivityList.length
              : pageNumber + 6
          )
          .map((a) => {
            return <ActivityCard key={a.address} activity={a} />;
          })}
      </ContentWrap>
      <PagesWrap>
        <ActionButton
          disabled={pageNumber < 6}
          onClick={() => setPageNumber(pageNumber - 6)}
        >
          PREV
        </ActionButton>
        {/* HANDLE THESE CLICKS AND PAGINATION */}
        <PageNumber>{pageNumber + 1}</PageNumber>
        <PageNumber>{pageNumber + 2}</PageNumber>
        <PageNumber>{pageNumber + 3}</PageNumber>
        <ActionButton
          disabled={pageNumber >= fullActivityList.length - 6}
          onClick={() => setPageNumber(pageNumber + 6)}
        >
          NEXT
        </ActionButton>
      </PagesWrap>
    </div>
  );
};
export default HomePage;
