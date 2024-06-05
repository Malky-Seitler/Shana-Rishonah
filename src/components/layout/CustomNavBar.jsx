import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ContactButton,
  DesktopNavBarWrapper,
  MenuItem,
  NavbarFlex,
  NavbarWrap,
  NavLinkStyle,
  SearchWrapper,
} from "./StyledComponents";
import Logo from "./../pictures/Logo.png";
import { Icon, Input } from "semantic-ui-react";
import { useActivityContext } from "../Pages/Trips/ActivityContext";
import MobileMenuComponent from "./MobileMenu";
import { mainMenu } from "./MainMenu";
import DesktopMenu from "./DesktopMenu";

const CustomNavBar = () => {
  return (
    <header>
      <DesktopMenu />
      <MobileMenuComponent />
    </header>
  );
};
export default CustomNavBar;
