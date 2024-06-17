import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ContactButton,
  DesktopNavBarWrapper,
  NavbarFlex,
  NavbarWrap,
  NavLinkStyle,
  SearchWrapper,
} from "./StyledComponents";
import Logo from "./../pictures/Logo.png";
import { Icon, Input } from "semantic-ui-react";
import { useActivityContext } from "../Pages/Trips/ActivityContext";
import { mainMenu } from "./MainMenu";

const DesktopMenu = () => {
  const [active, setActive] = useState(
    window.location.pathname.substring(
      window.location.pathname.lastIndexOf("/") + 1
    ) ?? ""
  );
  const containsTwoNonAdjacentSlashes = (str) => /\/[^\/]*\//.test(str);

  const [menuToDisplay, setMenuToDisplay] = useState(
    containsTwoNonAdjacentSlashes(window.location.pathname)
      ? mainMenu.find(
          (m) =>
            m.title?.toLowerCase() ===
            window.location.pathname.substring(
              1,
              window.location.pathname.lastIndexOf("/")
            )
        )?.id
      : null
  );
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
          onClick={() => setActive(m.active)}
          selected={active === m.active}
        >
          {m.title}
        </NavLinkStyle>
      </Link>
    );
  };
  const handleDisplayHomeDesktop = (mc) => {
    return (
      <Link to="/">
        <NavLinkStyle
          onClick={() => {
            setActive("");
            setMenuToDisplay(null);
          }}
        >
          <Icon name="arrow left" /> Home
        </NavLinkStyle>
      </Link>
    );
  };
  const handleMainLinkToSubMenuDesktop = (m) => {
    return (
      <NavLinkStyle onClick={() => setMenuToDisplay(m.id)}>
        {m.title}
      </NavLinkStyle>
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
  const handleSubMenuDisplayDesktop = (mc) => {
    if (mc.title === "logo") {
      return handleDisplayLogo();
    } else if (mc.title === "Home") {
      return handleDisplayHomeDesktop(mc);
    }
    return handleDisplayLinkDesktop(mc);
  };
  return (
    <DesktopNavBarWrapper>
      <NavbarWrap>
        <NavbarFlex>
          {!menuToDisplay
            ? mainMenu.map((m) => {
                return handleMainMenuDisplayDesktop(m);
              })
            : mainMenu
                .find((m) => m.id === menuToDisplay)
                .children.map((mc) => {
                  return handleSubMenuDisplayDesktop(mc);
                })}

          <NavLinkStyle
            onClick={() => {
              setActive("search-results");
              navigate("/search-results");
              setShowSearch(!showSearch);
            }}
            selected={active === "search-results"}
          >
            Search
          </NavLinkStyle>

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
