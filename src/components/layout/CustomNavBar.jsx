import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem, NavLink } from "reactstrap";

const CustomNavBar = () => {
    return <header>
        {/* <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light> */}
        <div style={{ padding: '72px 95px', border: '1px solid red' }}>
            <div>
                Day Trips
            </div>
        </div>
        {/* </Navbar> */}
    </header>
}
export default CustomNavBar;