import React, { useState } from "react";
import MobileMenuComponent from "./MobileMenu";
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
