import styled from "@emotion/styled";

export const HomePageSectionWrap = styled.div`
  border-radius: 36px;
  border: 4px solid #98c600;
  margin: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  box-shadow: 0px 8px 12px rgba(152, 198, 0);
  :hover {
    transform: translateY(-10px);
  }

  @media (max-width: 769px) {
    width: 80%;
  }
`;
export const HomePageText = styled.div`
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
  text-align: center;
`;

export const HomePageTitleType = styled.div`
  font-size: 32px;
  margin-bottom: 24px;
  line-height: 1px;
  font-style: italic;
  line-height: 1;
  color: #15aaaa;
`;

export const HomePageCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 769px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HomePageWelcomeText = styled.div`
  font-size: 48px;
  margin-bottom: 36px;
  text-align: center;
  @media (max-width: 769px) {
    font-size: 24px;
    margin-bottom: 18px;
  }
`;

export const HomePageSubtitleText = styled.div`
  font-size: 24px;
  margin-bottom: 36px;
  font-style: italic;
  color: darkgray;
  text-align: center;
  @media (max-width: 769px) {
    font-size: 14px;
  }
`;
