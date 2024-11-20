import React from "react";
import { Guides } from "./guides";
import GuideCard from "./GuideCard";
import ParentPage from "../../layout/ParentPage";
import { GuideCardContainer, TextWrap } from "./StyledComponents";
import { DesktopFlex, Flex, TitleStyle, TopPart } from "../Trips/StyledComponents";
import { Icon } from "semantic-ui-react";

const HelpfulGuides = () => {
  const guides = Guides;

  return (
    <ParentPage>
      <GuideCardContainer>
        <TopPart>
          <Flex style={{ justifyContent: "space-between", width: "100%" }}>
            <TitleStyle><Icon name='gift' /> {'Gift Guide'}</TitleStyle>
          </Flex>
        </TopPart>
        <Flex style={{ flexDirection: "column", gap: 16, marginTop: 16 }}>

          <DesktopFlex>
            <Flex>
              <Icon name='paint brush' />
              <TextWrap> Jbrush Paint by Number</TextWrap>
            </Flex>
            <a style={{ marginLeft: 2 }} href="https://dreamjudaica.com/" target="_blank" rel="noreferrer" >
              <Icon name='globe' /> Website
            </a>
          </DesktopFlex>
          <TextWrap style={{ fontStyle: 'italic' }}>Choose from a wide array of Jewish paint by numbers or create your own custom paint by number of any photo! Use the code SR10Off for $10 off when you order within 3 months of your wedding!</TextWrap>
        </Flex>
        <Flex style={{ flexDirection: "column", gap: 16, marginTop: 16 }}>
          <DesktopFlex>
            <Flex>
              <Icon name='pencil' />
              <TextWrap> Personalization Center</TextWrap>
            </Flex>
            <a style={{ marginLeft: 2 }} href="https://wa.me/message/YOQJMJ6FEKQND1" target="_blank" rel="noreferrer" >
              <Icon name='whatsapp' /> WhatsApp
            </a>
          </DesktopFlex>
          <TextWrap style={{ fontStyle: 'italic' }}>Take any gift a level higher by adding a personal touch! Reach out to Rachie for pricing!</TextWrap>
        </Flex>
        <Flex style={{ flexDirection: "column", gap: 16, marginTop: 16 }}>
          <DesktopFlex>
            <Flex>
              <Icon name='paint brush' />
              <TextWrap> Rivky's Fine Art</TextWrap>
            </Flex>
            <a style={{ marginLeft: 2 }} href="https://rivkyhart.com/" target="_blank" rel="noreferrer" >
              <Icon name='globe' /> Website
            </a>
          </DesktopFlex>
          <TextWrap style={{ fontStyle: 'italic' }}>Elevate your home with stunning artwork by Rivky Hart!</TextWrap>
        </Flex>
        <Flex style={{ flexDirection: "column", gap: 16, marginTop: 16 }}>
          <Flex><Icon name='linkify' /> <TextWrap> Shop the rest of our gift guide here!</TextWrap> </Flex>
          <a style={{ marginLeft: 2 }} href="https://tapto.shop/shanarishonah" target="_blank" rel="noreferrer" >
            <Icon name='globe' /> ShanaRishonah.com Official Gift Guide </a>
        </Flex>
      </GuideCardContainer>
      {
        guides.map((r) => (
          <GuideCard guide={r} />
        ))
      }
    </ParentPage >
  );
};
export default HelpfulGuides;
