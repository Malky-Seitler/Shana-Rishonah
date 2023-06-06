import styled from "@emotion/styled";

export const NavbarWrap = styled.div`
  padding: 24px 95px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Arial;
  font-size: 24px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;
export const NavLinkStyle = styled.div`
  cursor: pointer;
  color: black; 
  :hover {
    text-decoration: underline;
  }
  text-decoration: ${props => props.selected ? 'underline' : 'none'};
`;
export const ContactButton = styled.button`
  background: #15AAAA;
  border-radius: 30px;
  padding: 13px; 27px;
  cursor: ${props => props.disabled ? 'not-allowed':  'pointer'};
  color: black;
  border: none;
`;
