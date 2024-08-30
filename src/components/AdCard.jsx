import React from "react";
import {
  AdCardContainer,
  AdContentCardContainer,
  AdPictureWrap,
  TitleStyle,
} from "./Pages/Trips/StyledComponents";
import JBrush from "./ads/jbrush.png";
import buyCars from "./ads/buycars.png";
import { Icon } from "semantic-ui-react";

const AdCard = ({ activity }) => {
  return (
    <>
      <AdCardContainer>
        <div>
          <TitleStyle>Ads</TitleStyle>
          <div
            style={{ marginTop: 12, marginBottom: 12, fontStyle: "italic", color: "GrayText" }}
          >
            To advertise on our site contact shanarishonahwebsite@gmail.com
          </div>
        </div>
        <AdContentCardContainer>
          <div style={{ width: '40%', border: '1px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 8, padding: 8, height: 'fit-content', marginBottom: 24 }}>
            <AdPictureWrap src={buyCars}></AdPictureWrap>
            <div style={{ fontSize: '24px', marginTop: 14, color: 'green' }}>  <a href="https://chat.whatsapp.com/KFuoG28Q0gh5f0RCgDzbJV" style={{ color: 'green' }} >  <Icon size="large" name='whatsapp' /> Buy & Sell Cars chat</a></div>

          </div>

          <AdPictureWrap
            src={JBrush}
          ></AdPictureWrap>
        </AdContentCardContainer>
      </AdCardContainer>
    </>
  );
};
export default AdCard;
