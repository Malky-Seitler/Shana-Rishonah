import React from "react";
import { Icon } from "semantic-ui-react";
import { TipsCardWrap } from "./StyledComponents";

const TipsCard = ({ tip }) => {
  return (
    <TipsCardWrap>
      <Icon
        name="lightbulb outline"
        style={{ color: "#15AAAA" }}
        size="large"
      />
      {tip}
    </TipsCardWrap>
  );
};

export default TipsCard;
