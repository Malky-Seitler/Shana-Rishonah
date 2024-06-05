import styled from "@emotion/styled";

export const NavbarWrap = styled.div`
  padding: 24px 95px;
  font-family: Arial;
  font-size: 24px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  @media (max-width: 1024px) {
    padding: 24px;
    font-size: 14px;
  }
`;
export const NavbarFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const DesktopWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
export const DesktopNavBarWrapper = styled.div`
  @media (max-width: 1344px) {
    display: none;
  }
`;
export const MobileWrapper = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;
export const NavMobileWrapper = styled.div`
  @media (min-width: 1345px) {
    display: none;
  }
`;
export const NavLinkStyle = styled.div`
  cursor: pointer;
  color: black;
  font-size: 18px;
  :hover {
    text-decoration: underline;
  }
  text-decoration: ${(props) => (props.selected ? "underline" : "none")};
`;
export const ContactButton = styled.button`
  background: #ffaed7;
  border-radius: 30px;
  padding: 13px; 48px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  color: white;
  border: none;
  :hover {
    background: #ff77bc;
  };
`;
export const TopWrapperMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 12px;
  @media (max-width: 320px) {
    padding: 0px;
  }
`;
export const MobileMenu = styled.div`
  width: 100%;
  padding: 12px;
`;
export const MenuItem = styled.div`
  height: fit-content;
  padding: 12px;
  border-bottom: 1px solid gray;
  color: black;
`;
export const SearchWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const ContentWrap = styled.div`
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;
  gap: 124px;
  justify-content: center;
  padding-bottom: 124px;
  @media (max-width: 426px) {
    gap: 50px;
    justify-content: center;
  }
`;
