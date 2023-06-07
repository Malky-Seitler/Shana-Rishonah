import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navbar, NavItem, NavLink } from "reactstrap";
import {
  ContactButton,
  DesktopWrapper,
  MenuItem,
  MobileMenu,
  MobileWrapper,
  NavbarWrap,
  NavLinkStyle,
  TopWrapperMobile,
} from "./StyledComponents";
import Logo from "./../pictures/Logo.png";
import { Flex } from "../StyledComponents";
import { Icon } from "semantic-ui-react";

const CustomNavBar = () => {
  const [active, setActive] = useState("");
  const [showSideNav, setShowSideNav] = useState(false);

  return (
    <header>
      <DesktopWrapper>
        <NavbarWrap>
          <Link to="/trips/day-trips">
            <NavLinkStyle
              onClick={() => setActive("day")}
              selected={active === "day"}
            >
              Day Trips
            </NavLinkStyle>
          </Link>
          <Link to="/trips/date-night">
            <NavLinkStyle
              onClick={() => setActive("date")}
              selected={active === "date"}
            >
              Date Night
            </NavLinkStyle>
          </Link>
          <Link to="/trips/quick-trips">
            <NavLinkStyle
              onClick={() => setActive("quick")}
              selected={active === "quick"}
            >
              Quick Trips
            </NavLinkStyle>
          </Link>
          <Link to="/">
            <div onClick={() => setActive("")}>
              <img src={Logo} width={"280px"} height={"95px"} />
            </div>
          </Link>
          <Link to="/trips/at-home">
            <NavLinkStyle
              onClick={() => setActive("home")}
              selected={active === "home"}
            >
              At Home
            </NavLinkStyle>
          </Link>
          <Link to="/trips/restaurants">
            <NavLinkStyle
              onClick={() => setActive("food")}
              selected={active === "food"}
            >
              Restaurants
            </NavLinkStyle>
          </Link>
          <Link to="/contact">
            <ContactButton>Contact</ContactButton>
          </Link>
        </NavbarWrap>
      </DesktopWrapper>
      <MobileWrapper>
        <TopWrapperMobile>
          <Link to="/">
            <div onClick={() => setActive("")}>
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
              <Link to="/trips/day-trips">
                <MenuItem onClick={() => setShowSideNav(false)}>
                  Day Trips
                </MenuItem>
              </Link>
              <Link to="/trips/date-night">
                <MenuItem onClick={() => setShowSideNav(false)}>
                  Date Nights
                </MenuItem>
              </Link>
              <Link to="/trips/quick-trips">
                <MenuItem onClick={() => setShowSideNav(false)}>
                  Quick Trips
                </MenuItem>
              </Link>
              <Link to="/trips/at-home">
                <MenuItem onClick={() => setShowSideNav(false)}>
                  At Home
                </MenuItem>
              </Link>
              <Link to="/search">
                <MenuItem onClick={() => setShowSideNav(false)}>
                  Search
                </MenuItem>
              </Link>
            </MobileMenu>
          </TopWrapperMobile>
        )}
      </MobileWrapper>
    </header>
  );
};
export default CustomNavBar;
