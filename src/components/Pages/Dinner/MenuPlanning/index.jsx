import React from "react";
import { DairyMains, MeatMains, Soups, Starches, Veggies } from "./menus";
import ParentPage from "../../../layout/ParentPage";
import WhyMenuPlanCard from "./WhyMenuPlan";
import {
  SampleMenuCard,
  SampleMenuTwoCard,
  SampleWeekMenu,
  SampleWeekTwoMenu,
} from "./SampleMenuCard";
import { FoodListWrapper, SubTitleText } from "./StyledComponents";
const MenuPlanning = () => {
  const dairyMains = DairyMains;
  const meatMains = MeatMains;
  const soups = Soups;
  const starches = Starches;
  const veggies = Veggies;
  return (
    <ParentPage>
      <WhyMenuPlanCard />
      <div
        style={{
          display: "flex",
          width: "70%",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 24,
        }}
      >
        <SampleMenuCard />
        <SampleMenuTwoCard />
        <SampleWeekMenu />
        <SampleWeekTwoMenu />
      </div>
      <div
        style={{
          display: "flex",
          width: "80%",
          flexWrap: "wrap",
          gap: 54,
        }}
      >
        <FoodListWrapper>
          <SubTitleText>Dairy/Parve Mains</SubTitleText>
          {dairyMains.map((d) => (
            <div>{d}</div>
          ))}
        </FoodListWrapper>
        <FoodListWrapper>
          <SubTitleText>Meat/Chicken Mains</SubTitleText>
          {meatMains.map((d) => (
            <div>{d}</div>
          ))}
        </FoodListWrapper>
        <FoodListWrapper>
          <SubTitleText>Soups</SubTitleText>
          {soups.map((d) => (
            <div>{d}</div>
          ))}
        </FoodListWrapper>
        <FoodListWrapper>
          <SubTitleText>Starches</SubTitleText>
          {starches.map((d) => (
            <div>{d}</div>
          ))}
        </FoodListWrapper>
        <FoodListWrapper>
          <SubTitleText>Veggies</SubTitleText>
          {veggies.map((d) => (
            <div>{d}</div>
          ))}
        </FoodListWrapper>
      </div>
    </ParentPage>
  );
};
export default MenuPlanning;
