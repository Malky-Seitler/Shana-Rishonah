import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MenuItem,
  MobileMenu,
  NavMobileWrapper,
  TopWrapperMobile,
} from "./StyledComponents";
import Logo from "./../pictures/Logo.png";
import { Icon } from "semantic-ui-react";
import { mainMenu } from "./MainMenu";

const MobileMenuComponent = () => {
  const [showSideNav, setShowSideNav] = useState(false);
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

  const handleDisplayLinkMobile = (m) => {
    return (
      <Link to={m.link}>
        <MenuItem onClick={() => setShowSideNav(false)}>{m.title}</MenuItem>
      </Link>
    );
  };
  const handleMainLinkToSubMenuMobile = (m) => {
    return (
      <MenuItem onClick={() => setMenuToDisplay(m.id)}>{m.title}</MenuItem>
    );
  };
  const handleDisplayHomeMobile = () => {
    return (
      <Link to="/">
        <MenuItem
          onClick={() => {
            setMenuToDisplay(null);
          }}
        >
          <Icon name="arrow left" /> Home
        </MenuItem>
      </Link>
    );
  };
  const handleDisplayMainMenuMobile = (m) => {
    if (m.title === "logo") {
      return;
    } else if (m.link) {
      return handleDisplayLinkMobile(m);
    }
    return handleMainLinkToSubMenuMobile(m);
  };

  const handleDisplaySubMenuMobile = (mc) => {
    if (mc.title === "logo") {
      return;
    } else if (mc.title === "Home") {
      return handleDisplayHomeMobile(mc);
    }
    return handleDisplayLinkMobile(mc);
  };

  return (
    <NavMobileWrapper>
      <TopWrapperMobile>
        <Link to="/">
          <div>
            <img src={Logo} width={"280px"} height={"95px"} />
          </div>
        </Link>
        <Icon
          onClick={() => setShowSideNav(!showSideNav)}
          name="sidebar"
          size="big"
        />
      </TopWrapperMobile>
      {showSideNav && (
        <TopWrapperMobile>
          <MobileMenu>
            <MenuItem></MenuItem>
            {!menuToDisplay
              ? mainMenu.map((m) => {
                  return handleDisplayMainMenuMobile(m);
                })
              : mainMenu
                  .find((m) => m.id === menuToDisplay)
                  .children.map((mc) => {
                    return handleDisplaySubMenuMobile(mc);
                  })}

            <Link to="/contact">
              <MenuItem onClick={() => setShowSideNav(false)}>Contact</MenuItem>
            </Link>
          </MobileMenu>
        </TopWrapperMobile>
      )}
    </NavMobileWrapper>
  );
};
export default MobileMenuComponent;
