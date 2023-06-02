import React from "react";
import {
  ActivityCardContainer,
  Flex,
  TitleStyle,
  TopPart,
} from "./StyledComponents";
import { Icon } from "semantic-ui-react";

const ActivityCard = () => {
  return (
    <>
      <ActivityCardContainer>
        <TopPart>
          <TitleStyle>Prospect Park</TitleStyle>
          <Flex style={{ justifyContent: "flex-end" }}>
            <Flex style={{ marginRight: 24 }}>
              <Icon name="globe" size="large" />
              www.prospectpark.com
            </Flex>
            <Flex>
              <Icon name="map marker alternate" size="large" />
              directions
            </Flex>
          </Flex>
        </TopPart>
        <div>
          <img src="https%3A%2F%2Fwww.nycgo.com%2Fimages%2Fvenues%2F3087%2Fprospect-park-lake-will-steacy-002__large.jpg&tbnid=eMo65oyEGuTVTM&vet=12ahUKEwjjorTHxKL_AhWxCFkFHeVYDdgQMygUegUIARCEAg..i&imgrefurl=https%3A%2F%2Fwww.nycgo.com%2Fvenues%2Fprospect-park-lake&docid=-3khN6QSY-ccuM&w=1200&h=800&q=prospect%20park&ved=2ahUKEwjjorTHxKL_AhWxCFkFHeVYDdgQMygUegUIARCEAg" />
        </div>
      </ActivityCardContainer>
    </>
  );
};
export default ActivityCard;
