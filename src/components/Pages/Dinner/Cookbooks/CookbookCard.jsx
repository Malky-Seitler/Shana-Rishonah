import React from "react";
import { CookbookCardContainer, PictureWrap } from "./StyledComponents";
import { Flex, TitleStyle, TopPart } from "../../Trips/StyledComponents";

const CookbookCard = ({ cookbook }) => {
  return (
    <>
      <CookbookCardContainer>
        <TopPart>
          <Flex>
            <TitleStyle>{cookbook.name}</TitleStyle>
          </Flex>
        </TopPart>
        <Flex style={{ marginTop: 16, gap: 4 }}>
          <PictureWrap
            src={cookbook.img}
            width={"45%"}
            height={"45%"}
          ></PictureWrap>
          {/* <Icon name="globe" size="large" />
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
          <TextWrap>{resource.hours ?? "N/A"}</TextWrap>*/}
        </Flex>
      </CookbookCardContainer>
    </>
  );
};
export default CookbookCard;
