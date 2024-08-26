import styled from "@emotion/styled";

export const ContentWrap = styled.div`
  margin-top: 36px;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 items per row */
  gap: 124px;
  justify-content: center;
  padding-bottom: 124px;
  
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
  }
`;
