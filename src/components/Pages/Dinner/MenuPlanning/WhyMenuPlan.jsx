import React from "react";
import { TitleText, WhyMenuPlanWrapper } from "./StyledComponents";
import { WhyMenuPlan } from "./menus";

const WhyMenuPlanCard = () => {
  return (
    <WhyMenuPlanWrapper>
      <TitleText>What is a Menu Plan?</TitleText> <br />
      {WhyMenuPlan}
    </WhyMenuPlanWrapper>
  );
};
export default WhyMenuPlanCard;
