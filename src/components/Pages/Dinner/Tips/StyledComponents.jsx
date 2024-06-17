import styled from "@emotion/styled";

export const TipsCardWrap = styled.div`
  border-radius: 17px;
  border: 2px solid #bdf700;
  padding: 24px;
  width: 350px;
  height: 150px;
  margin-bottom: -104px;
  position: relative;
  @media (max-width: 425px) {
    width: 298px;
    height: fit-content;
  }

  @media (min-width: 426px) and (max-width: 1284px) {
    width: 380px;
    height: fit-content;
  }

  @media (min-width: 1285px) and (max-width: 1344px) {
    width: 498px;
    height: fit-content;
  }
`;
