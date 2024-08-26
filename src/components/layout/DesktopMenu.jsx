import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ContactButton,
  DesktopNavBarWrapper,
  DropdownItemWrap,
  DropdownWrap,
  NavbarFlex,
  NavbarWrap,
  NavLinkStyle,
  SearchWrapper,
} from "./StyledComponents";
import Logo from "./../pictures/Logo.png";
import { Icon, Input, Menu } from "semantic-ui-react";
import { useActivityContext } from "../Pages/Trips/ActivityContext";
import { mainMenu } from "./MainMenu";

const DesktopMenu = () => {
  const path = window.location.pathname;
  const containsTwoNonAdjacentSlashes = (str) => /\/[^\/]*\//.test(str);
  const activePath = containsTwoNonAdjacentSlashes(path) ? path.substring(path.indexOf('/') + 1, path.lastIndexOf('/')) : path.substring(path.lastIndexOf('/') + 1)
  const [active, setActive] = useState(activePath ?? "");

  const [menuToDisplay, setMenuToDisplay] = useState(null);
  const { setShowSearch, showSearch, getSearchedList, setFilteredList } =
    useActivityContext();

  const navigate = useNavigate();
  const handleDisplayLogo = () => {
    return (
      <Link to="/">
        <div
          onClick={() => {
            setActive("");
            setMenuToDisplay(null);
          }}
        >
          <img src={Logo} width={"280px"} height={"95px"} alt="logo" />
        </div>
      </Link>
    );
  };
  const handleDisplayLinkDesktop = (m) => {
    return (
      <Link to={m.link}>
        <NavLinkStyle
          onClick={() => { setActive(m.active); setMenuToDisplay(null) }}
          selected={active === m.active}
        >
          {m.title}
        </NavLinkStyle>
      </Link >
    );
  };

  const handleMainLinkToSubMenuDesktop = (m) => {

    return (
      <div>
        <NavLinkStyle selected={active === m.active} onClick={() => setMenuToDisplay(m.id)}>
          {m.title}
        </NavLinkStyle>
        {m.id === menuToDisplay && <DropdownWrap>
          {mainMenu.find(m => m.id === menuToDisplay)?.children.filter(c => c.title !== 'Home').map(c => {
            return <Link to={c.link}>
              <DropdownItemWrap onClick={() => { setActive(m.active); setMenuToDisplay(null) }}>
                <span style={{ color: 'black' }}
                  selected={active === c.active}
                >
                  {c.title}
                </span>
              </DropdownItemWrap>
            </Link>
          })}
        </DropdownWrap>}
      </div>
    );
  };
  const handleMainMenuDisplayDesktop = (m) => {
    if (m.title === "logo") {
      return handleDisplayLogo();
    } else if (m.link) {
      return handleDisplayLinkDesktop(m);
    }
    return handleMainLinkToSubMenuDesktop(m);
  };

  return (
    <DesktopNavBarWrapper>
      <NavbarWrap>
        <NavbarFlex>
          {mainMenu.map((m) => {
            return handleMainMenuDisplayDesktop(m);
          })
          }

          {/* <NavLinkStyle
            onClick={() => {
              setActive("search-results");
              navigate("/search-results");
              setShowSearch(!showSearch);
            }}
            selected={active === "search-results"}
          >
            Search
          </NavLinkStyle> */}

          <Link to="/contact">
            <ContactButton>Contact</ContactButton>
          </Link>
        </NavbarFlex>
        {showSearch && (
          <SearchWrapper
            onChange={async (e) => {
              const data = await getSearchedList(e.target.value);
              setFilteredList(data);
            }}
          >
            <Input icon="search" placeholder="Search..." />
          </SearchWrapper>
        )}
      </NavbarWrap>
    </DesktopNavBarWrapper>
  );
};
export default DesktopMenu;
