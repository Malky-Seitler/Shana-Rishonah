import React from "react";
import { SampleMenuCardWrapper, SubTitleText } from "./StyledComponents";

export const SampleMenuTwoCard = () => {
  return (
    <SampleMenuCardWrapper>
      <SubTitleText>Sample Menu Plan Two</SubTitleText>
      <div> Sunday: Chicken Sandwiches</div>
      <div> Monday: Pasta </div>
      <div> Tuesday: Deli/Meat </div>
      <div> Wednesday: Chicken cutlets/Chicken on the bone </div>
      <div> Thursday: Pizza/Eggs</div>
    </SampleMenuCardWrapper>
  );
};
export const SampleMenuCard = () => {
  return (
    <SampleMenuCardWrapper>
      <SubTitleText>Sample Menu Plan One</SubTitleText>
      <div>Sunday: Chicken Sandwiches</div>
      <div>Monday: Ground Beef</div>
      <div>Tuesday: Chicken Cutlets</div>
      <div>Wednesday: Deli/Hot dogs/Chicken on the bone</div>
      <div>Thursday: Dairy</div>
    </SampleMenuCardWrapper>
  );
};

export const SampleWeekMenu = () => {
  return (
    <SampleMenuCardWrapper>
      <SubTitleText>Sample Menu For Menu Plan One</SubTitleText>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div>
          Sunday: Cooked Schnitzel from Between Carpools, served on rolls with
          lettuce and pickles
        </div>
        <div>Monday: Meatballs and spaghetti with broccoli</div>
        <div>
          Tuesday: Chicken nuggets and fries from Between Carpools with
          Cauliflower
        </div>
        <div>
          {" "}
          Wednesday: Pastrami BBQ stir fry from Table for Two with pitas{" "}
        </div>
        <div> Thursday: Eggs & Pancakes with roasted mini peppers</div>
      </div>
    </SampleMenuCardWrapper>
  );
};
export const SampleWeekTwoMenu = () => {
  return (
    <SampleMenuCardWrapper>
      <SubTitleText>Sample Menu For Menu Plan Two</SubTitleText>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div>
          {" "}
          Sunday: Chicken Sandwiches from Table for Two served on rolls with
          coleslaw and pickles
        </div>
        <div> Monday: Lasanga with buttered broccoli</div>
        <div> Tuesday: Ground Beef Pizza with lettuce salad </div>
        <div> Wednesday: Chinese Chicken Lo Mein from Table for Two </div>
        <div> Thursday: Pizza and fries with onion soup and green beans</div>
      </div>
    </SampleMenuCardWrapper>
  );
};
