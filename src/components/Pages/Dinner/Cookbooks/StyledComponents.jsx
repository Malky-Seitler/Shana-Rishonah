import styled from "@emotion/styled";

export const TextWrap = styled.div`
  flex-wrap: wrap;
  color: black;
  display: flex;
  padding-right: 16px;
  @media (max-width: 769px) {
    width: 100%;
  }
`;
export const CookbookCardContainer = styled.div`
  border-radius: 17px;
  border: 1px solid black;
  padding: 24px;
  width: 550px;
  height: 250px;
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
export const PictureWrap = styled.img`
  border-radius: 17px;
  margin-top: 24px;
  @media (min-width: 769px) {
    position: absolute;
    left: 71.47%;
    right: 3.63%;
    top: 0%;
    margin-top: 0px;
  }
`;
