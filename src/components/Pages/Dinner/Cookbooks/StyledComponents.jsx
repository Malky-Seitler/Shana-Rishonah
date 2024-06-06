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
  height: 200px;
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
    left: 66.47%;
    right: 3.63%;
    top: 43.01%;
    bottom: 6.2%;
    margin-top: 0px;
    width: 30%;
    height: 40%;
  }
`;
export const CardContentWrap = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 24px;
  flex-direction: column;
  @media (min-width: 769px) {
    margin-top: 4px;
    gap: 16px;
  }
`;
