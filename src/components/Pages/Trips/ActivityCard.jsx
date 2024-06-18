import React from "react";
import {
  ActivityCardContainer,
  Flex,
  PictureWrap,
  TextWrap,
  TitleStyle,
  TopPart,
} from "./StyledComponents";
import { Icon } from "semantic-ui-react";
import { DesktopWrapper, MobileWrapper } from "../../layout/StyledComponents";

const ActivityCard = ({ activity }) => {
  return (
    <>
      <ActivityCardContainer>
        <TopPart>
          <TitleStyle>{activity.name}</TitleStyle>
          <DesktopWrapper>
            <Flex style={{ justifyContent: "flex-end" }}>
              <Flex style={{ marginRight: 24 }}>
                <Icon name="globe" size="large" />
                <a
                  style={{ color: "black", textDecoration: "underline" }}
                  target="_blank"
                  href={activity.website}
                >
                  Website
                </a>
              </Flex>
              <Flex>
                <Icon name="map marker alternate" size="large" />
                <a
                  style={{ color: "black", textDecoration: "underline" }}
                  target="_blank"
                  href={`http://maps.google.com/?q=${activity.address}`}
                >
                  Directions
                </a>
              </Flex>
            </Flex>
          </DesktopWrapper>
          <MobileWrapper style={{ display: "flex" }}>
            <Flex style={{ justifyContent: "flex-end" }}>
              <a
                style={{ color: "black", textDecoration: "" }}
                target="_blank"
                href={activity.website}
              >
                <Icon name="globe" size="large" />
              </a>
            </Flex>
            <Flex>
              <a
                style={{ color: "black", textDecoration: "" }}
                target="_blank"
                href={`http://maps.google.com/?q=${activity.address}`}
              >
                <Icon name="map marker alternate" size="large" />
              </a>
            </Flex>
          </MobileWrapper>
        </TopPart>
        <TextWrap>{activity.description}</TextWrap>
        <PictureWrap src={activity.img}></PictureWrap>
      </ActivityCardContainer>
    </>
  );
};
export default ActivityCard;
