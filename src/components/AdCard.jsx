import React, { useEffect, useState } from "react";
import {
  ActivityCardContainer,
  AdCardContainer,
  Flex,
  PictureWrap,
  TextWrap,
  TitleStyle,
  TopPart,
} from "./StyledComponents";
import { Icon } from "semantic-ui-react";
import { DesktopWrapper, MobileWrapper } from "./layout/StyledComponents";

const AdCard = ({ activity }) => {
  return (
    <>
      <DesktopWrapper>
        <AdCardContainer>
          <TitleStyle>Ads</TitleStyle>
          <div
            style={{ marginTop: 12, fontStyle: "italic", color: "GrayText" }}
          >
            To advertise on our site contact shanarishonahwebsite@gmail.com
          </div>
          <PictureWrap
            src={activity.img}
            width={"45%"}
            height={"45%"}
          ></PictureWrap>
        </AdCardContainer>
      </DesktopWrapper>
      <MobileWrapper>
        <AdCardContainer>
          <TitleStyle>Ads</TitleStyle>
          <div
            style={{ marginTop: 12, fontStyle: "italic", color: "GrayText" }}
          >
            To advertise on our site contact shanarishonahwebsite@gmail.com
          </div>
          <PictureWrap
            src={activity.img}
            width={"45%"}
            height={"45%"}
          ></PictureWrap>
        </AdCardContainer>
      </MobileWrapper>
    </>
  );
};
export default AdCard;
