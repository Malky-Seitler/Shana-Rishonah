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
import Header from './Header.png';
const ActivityCard = ({ activity }) => {
  return (
    <>
      <ActivityCardContainer style={{ position: 'relative' }}>
        <TopPart>
          <TitleStyle>{activity.name}</TitleStyle>
          <Flex style={{ justifyContent: "flex-end" }}>
            <Flex style={{ marginRight: 24 }}>
              <Icon name="globe" size="large" />
              <a style={{ color: 'black', textDecoration: 'underline' }} target='_blank' href={activity.website}>{activity.website}</a>
            </Flex>
            <Flex>
              <Icon name="map marker alternate" size="large" />
              <a style={{ color: 'black', textDecoration: 'underline' }} target='_blank' href={`http://maps.google.com/?q=${activity.address}`}>Directions</a>
            </Flex>
          </Flex>
        </TopPart>
        <TextWrap>{activity.description}</TextWrap>
        <PictureWrap src={Header} width={'45%'} height={'45%'} >

        </PictureWrap>
      </ActivityCardContainer >
    </>
  );
};
export default ActivityCard;
