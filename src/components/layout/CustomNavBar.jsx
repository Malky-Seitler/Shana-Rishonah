import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navbar, NavItem, NavLink } from "reactstrap";
import {
  ContactButton,
  DesktopWrapper,
  MenuItem,
  MobileMenu,
  MobileWrapper,
  NavbarFlex,
  NavbarWrap,
  NavLinkStyle,
  SearchWrapper,
  TopWrapperMobile,
} from "./StyledComponents";
import Logo from "./../pictures/Logo.png";
import { Flex } from "../StyledComponents";
import { Icon, Input } from "semantic-ui-react";
import { useActivityContext } from "../../ActivityContext";

const CustomNavBar = () => {
  const [active, setActive] = useState("");
  const [showSideNav, setShowSideNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { getSearchedList } = useActivityContext();

  const searchTrips = (searchValue) => {
    getSearchedList(searchValue);
  };

  return (
    <header>
      <DesktopWrapper>
        <NavbarWrap>
          <NavbarFlex>
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
            <NavLinkStyle
              onClick={() => {
                setActive("search");

                if (showSearch) {
                  searchTrips(null);
                  setActive("");
                }
                setShowSearch(!showSearch);
              }}
              selected={active === "search"}
            >
              Search
            </NavLinkStyle>
            <Link to="/contact">
              <ContactButton>Contact</ContactButton>
            </Link>
          </NavbarFlex>
          {showSearch && (
            <SearchWrapper onChange={(e) => searchTrips(e.target.value)}>
              <Input icon="search" placeholder="Search..." />
            </SearchWrapper>
          )}
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
              {/* <Link to="/search">
                <MenuItem
                  onClick={() => {
                    if (showSearch) {
                      searchTrips(null);
                    }
                    setShowSearch(!showSearch);
                  }}
                >
                  Search
                </MenuItem>
              </Link> */}
              <Link to="/contact">
                <MenuItem onClick={() => setShowSideNav(false)}>
                  Contact
                </MenuItem>
              </Link>
              {/* {showSearch && (
                <SearchWrapper onChange={(e) => searchTrips(e.target.value)}>
                  <Input icon="search" placeholder="Search..." />
                </SearchWrapper>
              )} */}
            </MobileMenu>
          </TopWrapperMobile>
        )}
      </MobileWrapper>
    </header>
  );
};
export default CustomNavBar;
