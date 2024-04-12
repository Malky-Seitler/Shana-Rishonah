import React, { useEffect, useState } from "react";
import {
  ActivityCardContainer,
  Flex,
  PictureWrap,
  TextWrap,
  TitleStyle,
  TopPart,
} from "./StyledComponents";
import { Icon } from "semantic-ui-react";
import { DesktopWrapper, MobileWrapper } from "./layout/StyledComponents";

const ActivityCard = ({ activity }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    console.log('here')
  }, []);
  return (
    <>
      <DesktopWrapper>
        <ActivityCardContainer>
          <TopPart>
            <TitleStyle>{activity.name}</TitleStyle>
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
          </TopPart>
          <TextWrap>{activity.description}</TextWrap>
          <PictureWrap src={image} width={"45%"} height={"45%"}></PictureWrap>
        </ActivityCardContainer>
      </DesktopWrapper>
      <MobileWrapper>
        <ActivityCardContainer>
          <TopPart>
            <TitleStyle>{activity.name}</TitleStyle>
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
          </TopPart>
          <PictureWrap src={image} width={"100%"} height={"25%"}></PictureWrap>
          <TextWrap>{activity.description}</TextWrap>
        </ActivityCardContainer>
      </MobileWrapper>
    </>
  );
};
export default ActivityCard;
