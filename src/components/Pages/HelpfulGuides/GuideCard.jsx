import React from "react";
import { DesktopWrapper } from "../../layout/StyledComponents";
import {
  Flex,
  FlexColumnCenter,
  TitleStyle,
  TopPart,
} from "../Trips/StyledComponents";
import { Checkbox, Icon } from "semantic-ui-react";
import {
  GuideCardContainer,
  PictureWrap,
  ResourceCardContainer,
  TextWrap,
} from "./StyledComponents";

const GuideCard = ({ guide }) => {
  return (
    <>
      <GuideCardContainer key={guide[0]} id={guide[0]}>
        <TopPart>
          <Flex style={{ justifyContent: "space-between", width: "100%" }}>
            <TitleStyle>{guide[0]}</TitleStyle>
          </Flex>
        </TopPart>
        <Flex style={{ flexDirection: "column", gap: 16, marginTop: 16 }}>
          {guide.map((g, idx) => {
            if (idx > 0) {
              return (
                <Flex style={{ gap: 8 }}>
                  <Checkbox />
                  <TextWrap>{g}</TextWrap>
                </Flex>
              );
            }
          })}
        </Flex>
      </GuideCardContainer>
    </>
  );
};
export default GuideCard;
