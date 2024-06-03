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
  const mainMenu = [
    {
      title: "Trips",
      id: 1,
      children: [
        { title: "Home", link: "/", active: "" },
        { title: "Day Trips", link: "/trips/day-trips", active: "day" },
        { title: "Date Night", link: "/trips/date-night", active: "date" },
        { title: "Quick Trips", link: "/trips/quick-trips", active: "quick" },
        {
          title: "Parks & Beaches",
          link: "/trips/parks-and-beaches",
          active: "parks",
        },
        { title: "logo" },
        {
          title: "At Home",
          link: "/trips/at-home",
          active: "home",
        },
        {
          title: "Restaurants",
          link: "/trips/restaurants",
          active: "food",
        },
      ],
    },
    { title: "Resources", id: 2, link: "/resources", active: "resources" },
    {
      title: "Dinner",
      id: 3,
      children: [
        { title: "Home", link: "/", active: "" },
        {
          title: "Menu Planning",
          link: "/dinner/menu-planning",
          active: "menu",
        },
        {
          title: "Tips & Tricks",
          link: "/dinner/tips-and-tricks",
          active: "dinnerTricks",
        },
        { title: "logo" },
        {
          title: "Cookbooks",
          link: "/dinner/cookbooks",
          active: "cookbooks",
        },
      ],
    },
    { title: "logo" },
    {
      title: "Helpful Guides",
      id: 4,
      link: "/helpful-guides",
      active: "guides",
    },
  ];
  const [showSideNav, setShowSideNav] = useState(false);
  const [menuToDisplay, setMenuToDisplay] = useState(null);
  const { setShowSearch, showSearch, getSearchedList, setFilteredList } =
    useActivityContext();

  const navigate = useNavigate();

  return (
    <header>
      <DesktopNavBarWrapper>
        <NavbarWrap>
          <NavbarFlex>
            {!menuToDisplay
              ? mainMenu.map((m) => {
                  if (m.title === "logo") {
                    return (
                      <Link to="/">
                        <div
                          onClick={() => {
                            setActive("");
                            setMenuToDisplay(null);
                          }}
                        >
                          <img src={Logo} width={"280px"} height={"95px"} />
                        </div>
                      </Link>
                    );
                  } else if (m.link) {
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
                  }
                  return (
                    <NavLinkStyle onClick={() => setMenuToDisplay(m.id)}>
                      {m.title}
                    </NavLinkStyle>
                  );
                })
              : mainMenu
                  .find((m) => m.id === menuToDisplay)
                  .children.map((mc) => {
                    if (mc.title === "logo") {
                      return (
                        <Link to="/">
                          <div
                            onClick={() => {
                              setActive("");
                              setMenuToDisplay(null);
                            }}
                          >
                            <img src={Logo} width={"280px"} height={"95px"} />
                          </div>
                        </Link>
                      );
                    } else if (mc.title === "Home") {
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
                    }
                    return (
                      <Link to={mc.link}>
                        <NavLinkStyle
                          onClick={() => setActive(mc.active)}
                          selected={active === mc.active}
                        >
                          {mc.title}
                        </NavLinkStyle>
                      </Link>
                    );
                  })}

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
              {!menuToDisplay
                ? mainMenu.map((m) => {
                    if (m.title === "logo") {
                      return;
                    } else if (m.link) {
                      return (
                        <Link to={m.link}>
                          <MenuItem onClick={() => setShowSideNav(false)}>
                            {m.title}
                          </MenuItem>
                        </Link>
                      );
                    }
                    return (
                      <MenuItem onClick={() => setMenuToDisplay(m.id)}>
                        {m.title}
                      </MenuItem>
                    );
                  })
                : mainMenu
                    .find((m) => m.id === menuToDisplay)
                    .children.map((mc) => {
                      if (mc.title === "logo") {
                        return;
                      } else if (mc.title === "Home") {
                        return (
                          <Link to="/">
                            <MenuItem
                              onClick={() => {
                                setActive("");
                                setMenuToDisplay(null);
                              }}
                            >
                              <Icon name="arrow left" /> Home
                            </MenuItem>
                          </Link>
                        );
                      }
                      return (
                        <Link to={mc.link}>
                          <MenuItem onClick={() => setShowSideNav(false)}>
                            {mc.title}
                          </MenuItem>
                        </Link>
                      );
                    })}

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
