import React from "react";
import { DesktopWrapper } from "../../layout/StyledComponents";
import { Flex, TitleStyle, TopPart } from "../Trips/StyledComponents";
import { Icon } from "semantic-ui-react";
import {
  PictureWrap,
  ResourceCardContainer,
  TextWrap,
} from "./StyledComponents";

const ResourceCard = ({ resource }) => {
  return (
    <>
      <ResourceCardContainer>
        <TopPart>
          <Flex>
            <TitleStyle>{resource.name}</TitleStyle>
            <PictureWrap src={resource.img} width={"25%"} height={"25%"} />
          </Flex>
        </TopPart>
        <Flex style={{ marginTop: 16, gap: 4 }}>
          <Icon name="globe" size="large" />
          <a href={resource.website} target="_blank">
            <TextWrap>{resource.website}</TextWrap>
          </a>
        </Flex>
        <Flex style={{ marginTop: 16, gap: 4 }}>
          <Icon name="phone" size="large" />
          <TextWrap>{resource.number}</TextWrap>
        </Flex>
        <Flex style={{ marginTop: 16, gap: 4 }}>
          <Icon name="clock" size="large" />
          <TextWrap>{resource.hours ?? "N/A"}</TextWrap>
        </Flex>
      </ResourceCardContainer>
    </>
  );
};
export default ResourceCard;
