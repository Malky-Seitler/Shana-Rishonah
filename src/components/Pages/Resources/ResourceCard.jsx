import React from "react";
import { Flex, TitleStyle, TopPart } from "../Trips/StyledComponents";
import { Icon } from "semantic-ui-react";
import {
  DontFlexMobile,
  PictureWrap,
  ResourceCardContainer,
  TextWrap,
} from "./StyledComponents";

const ResourceCard = ({ resource }) => {
  return (
    <>
      <ResourceCardContainer>
        <TopPart>
          <DontFlexMobile>
            <TitleStyle>{resource.name}</TitleStyle>
            {resource.img && <PictureWrap src={resource.img} />}
          </DontFlexMobile>
        </TopPart>

        {resource.description ?
          <Flex style={{ marginTop: 16, gap: 4 }}>
            <TextWrap>{resource.description ?? "N/A"}</TextWrap>
          </Flex> :
          <><Flex style={{ marginTop: 16, gap: 4 }}>
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
            </Flex> </>}
      </ResourceCardContainer>
    </>
  );
};
export default ResourceCard;
