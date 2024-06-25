import React from "react";
import {
  ActivityCardContainer,
  DesktopGap,
  Flex,
  MobileHide,
  PictureWrap,
  TextWrap,
  TitleStyle,
  TopPart,
} from "./StyledComponents";
import { Icon } from "semantic-ui-react";

const ActivityCard = ({ activity }) => {
  return (
    <>
      <ActivityCardContainer>
        <TopPart>
          <TitleStyle>{activity.name}</TitleStyle>
          <DesktopGap style={{ justifyContent: "flex-end" }}>
            <Flex >
              <a
                style={{ color: "black", display: 'flex', alignItems: 'center' }}
                target="_blank"
                href={activity.website}
                rel="noreferrer"
              >  <Icon name="globe" size="large" />
                <MobileHide>     <span style={{ textDecoration: "underline" }}>   Website</span></MobileHide>
              </a>
            </Flex>
            <Flex>
              <a
                style={{ color: "black", display: 'flex', alignItems: 'center' }}
                target="_blank"
                href={`http://maps.google.com/?q=${activity.address}`}
                rel="noreferrer"
              >
                <Icon name="map marker alternate" size="large" />

                <MobileHide>     <span style={{ textDecoration: "underline" }}>   Directions</span></MobileHide>
              </a>
            </Flex>
          </DesktopGap>

        </TopPart>
        <TextWrap>{activity.description}</TextWrap>
        <PictureWrap src={activity.img}></PictureWrap>
      </ActivityCardContainer>
    </>
  );
};
export default ActivityCard;
