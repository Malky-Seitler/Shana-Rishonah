import React, { useEffect, useState } from "react";
import {
  ActivityCardContainer,
  AdCardContainer,
  AdItem,
  Flex,
  PictureWrap,
  TextWrap,
  TitleStyle,
  TopPart,
} from "./Pages/Trips/StyledComponents";
import { Icon } from "semantic-ui-react";
import { DesktopWrapper, MobileWrapper } from "./layout/StyledComponents";
import ChanieAd from "./ads/csnaps.png";

const AdCard = ({ activity }) => {
  return (
    <>
      <DesktopWrapper>
        <AdCardContainer>
          <div>
            <TitleStyle>Ads</TitleStyle>
            <div
              style={{ marginTop: 12, fontStyle: "italic", color: "GrayText" }}
            >
              To advertise on our site contact shanarishonahwebsite@gmail.com
            </div>
          </div>
          <div
            style={{
              border: "1px solid purple",
              padding: 24,
              width: "fit-content",
              backgroundColor: "purple",
              borderRadius: 10,
              color: "white",
              textAlign: "center",
            }}
          >
            <div>Affordable lighting rentals</div>
            <div>For all your in-house occasions!</div>
            <div>Call/Text: 732-573-5248</div>
          </div>
          <img
            src={ChanieAd}
            width={"25%"}
            style={{ zoom: "200%" }}
            height={"100%"}
          ></img>
        </AdCardContainer>
      </DesktopWrapper>
      <MobileWrapper>
        <AdCardContainer>
          <div>
            <TitleStyle>Ads</TitleStyle>
            <div
              style={{ marginTop: 12, fontStyle: "italic", color: "GrayText" }}
            >
              To advertise on our site contact shanarishonahwebsite@gmail.com
            </div>
          </div>
          <AdItem
            style={{
              border: "1px solid purple",
              backgroundColor: "purple",
              borderRadius: 10,
              color: "white",
              marginTop: 21,
              textAlign: "center",
            }}
          >
            <div>Affordable lighting rentals</div>
            <div>For all your in-house occasions!</div>
            <div>Call/Text: 732-573-5248</div>
          </AdItem>
          <img
            src={ChanieAd}
            width={"100%"}
            style={{ zoom: "200%" }}
            height={"100%"}
          ></img>
        </AdCardContainer>
      </MobileWrapper>
    </>
  );
};
export default AdCard;
