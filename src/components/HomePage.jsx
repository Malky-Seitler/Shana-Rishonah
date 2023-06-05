import React from "react";
import ActivityCard from "./ActivityCard";
import { Activities, Categories } from "./Trips";
import {
  ActionButton,
  ContentWrap,
  PageNumber,
  PagesWrap,
} from "./StyledComponents";
import { useParams } from "react-router-dom";

const HomePage = () => {
  const { type } = useParams();
  let activitiesToUse = Activities;
  if(type){
    const category = Categories.find(c => c.name === type);
    if(category){
      activitiesToUse = activitiesToUse.filter(a => a.categoryId === category.id);
      if(activitiesToUse?.length < 1){
        activitiesToUse = Activities;
      }
    }
  }
  return (
    <div>
      <ContentWrap>
        {activitiesToUse.map((a) => {
          return <ActivityCard activity={a} />;
        })}
      </ContentWrap>
      <PagesWrap>
        <ActionButton>PREV</ActionButton>
        <PageNumber>1</PageNumber>
        <PageNumber>2</PageNumber>
        <PageNumber>3</PageNumber>
        <ActionButton>NEXT</ActionButton>
      </PagesWrap>
    </div>
  );
};
export default HomePage;
