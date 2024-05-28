import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Navbar, NavItem, NavLink } from "reactstrap";
import {
  ContactButton,
  DesktopNavBarWrapper,
  DesktopWrapper,
  MenuItem,
  MobileMenu,
  MobileWrapper,
  NavbarFlex,
  NavbarWrap,
  NavLinkStyle,
  NavMobileWrapper,
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
  const { setShowSearch, showSearch, getSearchedList, setFilteredList } =
    useActivityContext();

  const navigate = useNavigate();

  return (
    <header>
      <DesktopNavBarWrapper>
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
            <Link to="/trips/parks-and-beaches">
              <NavLinkStyle
                onClick={() => setActive("parks")}
                selected={active === "parks"}
              >
                Parks & Beaches
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
            <NavLinkStyle
              onClick={() => {
                setActive("search");
                navigate("/search-results");
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
      <NavMobileWrapper>
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
              <Link to="/trips/parks-and-beaches">
                <MenuItem onClick={() => setShowSideNav(false)}>
                  Parks & Beaches
                </MenuItem>
              </Link>
              <Link to="/trips/at-home">
                <MenuItem onClick={() => setShowSideNav(false)}>
                  At Home
                </MenuItem>
              </Link>
              <Link to="/trips/restaurants">
                <MenuItem onClick={() => setShowSideNav(false)}>
                  Restaurants
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
      </NavMobileWrapper>
    </header>
  );
};
export default CustomNavBar;
