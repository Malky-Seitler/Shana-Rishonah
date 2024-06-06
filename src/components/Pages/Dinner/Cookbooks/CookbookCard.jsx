import React from "react";
import {
  ButtonWrap,
  CardContentWrap,
  CookbookCardContainer,
  PictureWrap,
  TextWrap,
} from "./StyledComponents";
import { Flex, TitleStyle, TopPart } from "../../Trips/StyledComponents";
import { Button, Icon } from "semantic-ui-react";

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
          <PictureWrap src={cookbook.img}></PictureWrap>
        </Flex>
        <CardContentWrap>
          <>
            <Flex style={{ gap: 4 }}>
              <Icon name="user" size="large" />
              <TextWrap>By: {cookbook.author}</TextWrap>
            </Flex>
            <a href={cookbook.link} target="_blank">
              <Button style={{ width: "250px" }}>
                <Icon name="cart" /> Buy Now
              </Button>
            </a>
          </>
        </CardContentWrap>
      </CookbookCardContainer>
    </>
  );
};
export default CookbookCard;
