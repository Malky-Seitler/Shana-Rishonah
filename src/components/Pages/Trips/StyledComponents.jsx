import styled from "@emotion/styled";

export const ActivityCardContainer = styled.div`
  border-radius: 17px;
  border: 1px solid black;
  padding: 24px;
  width: 550px;
  height: 350px;
  position: relative;
  @media (max-width: 425px) {
    width: 298px;
    height: fit-content;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    width: 380px;
    height: fit-content;
  }

  @media (min-width: 1285px) and (max-width: 1344px) {
    width: 550px;
    height: fit-content;
  }
`;
export const AdCardContainer = styled.div`
  border-radius: 17px;
  border: 1px solid black;
  padding: 24px;
  width: 1100px;
  height: fit-content;
  position: relative;
  justify-content: space-between;
  
  @media (max-width: 769px) {
    width: 298px;
    height: fit-content;
    display: flex;
    
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media (min-width: 426px) and (max-width: 1284px) {
    width: 380px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 1285px) and (max-width: 1344px) {
    width: 498px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const AdContentCardContainer = styled.div`
  padding: 24px;
  height: fit-content;
  position: relative;
  justify-content: space-between;
  display: flex;

  
  @media (max-width: 769px) {
    width: 298px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media (min-width: 426px) and (max-width: 1284px) {
    width: 380px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 1285px) and (max-width: 1344px) {
    width: 498px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const AdItem = styled.div`
  @media (max-width: 425px) {
    width: 198px;
    height: 50px;
    height: fit-content;
  }
`;
export const TopPart = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 22px;
  border-bottom: 1px solid black;
`;
export const TitleStyle = styled.div`
  font-size: 24px;
  font-family: arial;
`;
export const MobileHide = styled.div`
  @media(max-width: 769px){
  display: none;
  }
`;
export const DesktopGap = styled.div`
display: flex;
gap: 24px;
@media(max-width: 769px){
gap: 2px;
}
`
export const DesktopFlex = styled.div`
flex-direction: column;
gap: 24px;
@media(min-width: 769px){
display: flex;
flex-direction: row;
}
`
export const Flex = styled.div`
  display: flex;
`;
export const PictureWrap = styled.img`
  border-radius: 17px;
  margin-top: 24px;
  height: 100%;
  width: 100%;
  @media (min-width: 769px) {
    position: absolute;
    left: 49.47%;
    right: 3.63%;
    top: 35.01%;
    bottom: 6.2%;
    margin-top: 0px;
    width: 45%;
    height: 45%;
  }
`;
export const AdPictureWrap = styled.img`
  border-radius: 17px;
  height: 100%;
  width: 50%;
  @media (max-width: 769px) {
  width: 100%;
  }
`;
export const TextWrap = styled.div`
  flex-wrap: wrap;
  display: flex;
  width: 50%;
  margin-top: 16px;
  padding-right: 16px;
  @media (max-width: 769px) {
    width: 100%;
  }
`;

export const ActionButton = styled.button`
  background: ${(props) => (props.disabled ? "#97c500 " : "#bdf700")};
  border-radius: 30px;
  padding: 13px 18px;
  border: none;
  color: black;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  :hover {
    background: ${(props) => (props.disabled ? "#97c500 " : "#c2e063")};
  }
`;
export const PageNumber = styled.div`
  cursor: pointer;
`;
export const CurrentPageNumber = styled.div`
  color: gray;
  text-decoration: underline;
`;
export const PagesWrap = styled.div`
  display: flex;
  justify-content: space-between;
  float: right;
  width: 25%;
  align-items: center;
  padding-bottom: 36px;
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0px 24px;
  }
`;

export const ContactPageWrap = styled.div`
  // border: 3px solid #15aaaa;
  border-radius: 15px;
  margin-top: 72px;
  height: 600px;
  position: center;
`;
export const MessageWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TextAreaWrap = styled.div`
  padding: 10px 270px;
  @media (max-width: 426px) {
    padding: 0;
    width: 100%;
  }
  @media (max-width: 1024px) {
    padding: 0;
    width: 100%;
  }
`;
export const InputWrap = styled.div`
  margin-bottom: 24px;
`;
export const ContactButtonWrap = styled.div`
  float: right;
  padding: 10px 270px;
  @media (max-width: 426px) {
    padding: 10px 100px;
  }
  @media (max-width: 1024px) {
    padding: 10px 0;
  }
`;

export const FeedbackButton = styled.button`
  background: #bdf700;
  border-radius: 30px;
  padding: 13px; 27px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  color: black;
  border: none;
  :hover {
    background: #c2e063;
  }
  margin-top: 24px;
  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 48px;
    margin-bottom: 12px;
  }
`;

export const Circle = styled.div`
  border-radius: 50%;
  width: 34px;
  height: 34px;
  padding: 10px;
  background: #fff;
  border: 1px solid #000;
  color: #000;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexColumnCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
