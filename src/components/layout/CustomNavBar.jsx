import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navbar, NavItem, NavLink } from "reactstrap";
import {
  ContactButton,
  DesktopWrapper,
  MobileWrapper,
  NavbarWrap,
  NavLinkStyle,
} from "./StyledComponents";
import Logo from "./../pictures/Logo.png";

const CustomNavBar = () => {
  const [active, setActive] = useState("");
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
        <Link to="/">
          <div onClick={() => setActive("")}>
            <img src={Logo} width={"280px"} height={"95px"} />
          </div>
        </Link>
      </MobileWrapper>
    </header>
  );
};
export default CustomNavBar;
